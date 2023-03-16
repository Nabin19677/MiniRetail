import { Router } from "express";
import { upload } from "../../../../config/multer.js";
import { chainValidators } from "../../../middlewares/validator.js";
import {
  onBoardCustomer,
  verifyCustomerKYC,
  getCustomerById,
  getCustomersByStatus,
  rejectCustomer,
} from "./controller.js";
import {
  idValidator,
  onBoardCustomerValidator,
  statusValidator,
} from "./validations.js";

export const retailRoutes = new Router();

/**
 * @swagger
 * /api/v1/retail/customer/on-board-customer:
 *    post:
 *      summary: Onboard Retail Customer
 *      description: Save Customer KYC for and set status to Waiting For Approval, For Further Process
 *      tags:
 *        - Retail
 *
 */
retailRoutes.post(
  "/on-board-customer",
  upload.any(),
  chainValidators(onBoardCustomerValidator),
  onBoardCustomer
);

/**
 * @swagger
 * /api/v1/retail/customer/{id}:
 *    get:
 *      summary: Get a customer by ID
 *      tags:
 *        - Retail
 *      parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the customer to retreive
 *
 */
retailRoutes.get("/customer/:id", getCustomerById);

/**
 * @swagger
 * /api/v1/retail/customer/list:
 *    post:
 *      summary: Fetch Customer List
 *      description: Fetch Customers by Status Waiting For Approval, Rejected and Approved
 *      tags:
 *        - Retail
 *
 */
retailRoutes.post(
  "/customer/list",
  chainValidators(statusValidator),
  getCustomersByStatus
);

/**
 * @swagger
 * /api/v1/retail/customer/approve:
 *    put:
 *      summary: Approve Customer by ID
 *      tags:
 *        - Retail
 *      parameters:
 *       - in: body
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the customer to be approve
 *
 */
retailRoutes.put(
  "/customer/approve",
  chainValidators(idValidator),
  verifyCustomerKYC
);

/**
 * @swagger
 * /api/v1/retail/customer/reject:
 *    put:
 *      summary: Reject Customer by ID
 *      tags:
 *        - Retail
 *      parameters:
 *       - in: body
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the customer to be rejected
 *
 */
retailRoutes.put(
  "/customer/reject",
  chainValidators(idValidator),
  rejectCustomer
);
