import multer from "multer";
import { Router } from "express";
import { chainValidators } from "../../../middlewares/validator.js";
import { onBoardCustomer, verifyCustomerKYC, getCustomersByStatus, rejectCustomer } from "./controller.js";
import { idValidator, onBoardCustomerValidator, statusValidator } from "./validations.js";

var upload=multer({dest:"uploads/"});

export const retailRoutes = new Router();

retailRoutes.post(
  "/on-board-customer",
  upload.single('citizenship'),
  chainValidators(onBoardCustomerValidator),
  onBoardCustomer
);

retailRoutes.post("/customer/list",  chainValidators(statusValidator),getCustomersByStatus)

retailRoutes.put(
  "/customer/approve",
  chainValidators(idValidator),
  verifyCustomerKYC
);

retailRoutes.put(
  "/customer/reject",
  chainValidators(idValidator),
  rejectCustomer
);
