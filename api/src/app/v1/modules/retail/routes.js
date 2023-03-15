
import { Router } from "express";
import { upload } from "../../../../config/multer.js";
import { chainValidators } from "../../../middlewares/validator.js";
import { onBoardCustomer, verifyCustomerKYC, getCustomerById, getCustomersByStatus, rejectCustomer } from "./controller.js";
import { idValidator, onBoardCustomerValidator, statusValidator } from "./validations.js";

export const retailRoutes = new Router();

retailRoutes.post(
  "/on-board-customer",
  upload.any(),
  chainValidators(onBoardCustomerValidator),
  onBoardCustomer
);

retailRoutes.get("/customer/:id", getCustomerById)

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
