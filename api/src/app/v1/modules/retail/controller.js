import { responseBuilder, created } from "../../../util/helpers/response-builder.js";
import { Customer } from "./models/customer.model.js";
import { generateCIFNumber } from "./services.js";
import { HttpError } from "../../../util/errors/http.js";
import httpStatus from "http-status";

export async function onBoardCustomer(req, res, next) {
  try {
    let customer = {...req.body};
    await Customer.create(customer);
    return res.send(created("Customer Created"))
  } catch (e) {
    next(e);
  }
}

export async function getCustomersByStatus(req, res, next) {
  try {
    let {status} = req.body;
    let customers = await Customer.findAll({where : {status}});
    return res.send(responseBuilder(customers))
  } catch (e) {
    next(e);
  }
}

export async function verifyCustomerKYC(req, res, next) {
  try {
    const {id} = req.body;
    const customer = await Customer.findByPk(id)
    if(customer.status === "REJECTED"){
      throw new HttpError("Customer is already rejected.", httpStatus.BAD_REQUEST)
    }
    const CIF_NUMBER = generateCIFNumber(customer)
    await customer.update({ status : "APPROVED", CIF : CIF_NUMBER }, {
      where: {
        id
      }
    });
    return res.send(responseBuilder({id}, "VERIFIED"))
  } catch (e) {
    next(e);
  }
}

export async function rejectCustomer(req, res, next) {
  try {
    const {id} = req.body;
    const customer = await Customer.findByPk(id)
    console.log(customer)
    if(customer.status === "APPROVED"){
      throw new HttpError("Customer has already been Approved!.", httpStatus.BAD_REQUEST)
    }
    if(customer.status === "REJECTED"){
      throw new HttpError("Customer is already rejected.", httpStatus.BAD_REQUEST)
    }
    await Customer.update({ status : "REJECTED", CIF : null }, {
      where: {
        id
      }
    });
    return res.send(responseBuilder({id}, "REJECTED"))
  } catch (e) {
    next(e);
  }
}
