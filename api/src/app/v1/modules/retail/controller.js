import { responseBuilder, created } from "../../../util/helpers/response-builder.js";
import { Customer } from "./models/customer.model.js";


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
    await Customer.update({ status : "APPROVED", CIF : "XXX" }, {
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
