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
 * /api/v1/retail/on-board-customer:
 *    post:
 *      summary: Onboard Retail Customer
 *      description: Save Customer KYC for and set status to Waiting For Approval, For Further Process
 *      tags:
 *        - Retail
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#components/schemas/Customer"
 *      responses:
 *        200:
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  msg:
 *                    type: string
 *                    example: Customer Created
 *                  
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
 *      responses:
 *        200:
 *          description: Customer Detail
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    $ref: "#components/schemas/Customer"
 *
 */
retailRoutes.get("/customer/:id", getCustomerById);

/**
 * @swagger
 * /api/v1/retail/customer/list:
 *    post:
 *      summary: Retrieve Customer List
 *      description: Retrieve Customers by Status - Waiting For Approval, Rejected and Approved
 *      tags:
 *        - Retail
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 *                  description: Status of Customer (WAITING_FOR_APPROVAL, APPROVED, REJECTED)
 *                  example: WAITING_FOR_APPROVAL
 *      responses:
 *        200:
 *          description: List of Customers.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      $ref: "#components/schemas/Customer"
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  example: 5
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
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                  example: 5
 *
 */
retailRoutes.put(
  "/customer/reject",
  chainValidators(idValidator),
  rejectCustomer
);
