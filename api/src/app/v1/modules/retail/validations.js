import { check } from "express-validator";

export const onBoardCustomerValidator = [
  check("salutation").notEmpty().withMessage("Please provide salutation."),
  check("full_name").notEmpty().withMessage("Please provide full name."),
  check("dob").notEmpty().withMessage("Please provide date of birth"),
  check("gender").notEmpty().withMessage("Please provide gender."),
  check("marital_status").notEmpty().withMessage("Please provide marital status."),
  check("address_desc").notEmpty().withMessage("Please provide address description"),
  check("nationality").notEmpty().withMessage("Please provide nationality"),
  check("email").notEmpty().withMessage("Please provide email"),
  check("mobile_number").notEmpty().withMessage("Please provide mobile number"),
];

export const idValidator = [
  check("id").notEmpty().withMessage("Please provide id"),
];

export const statusValidator = [
  check("status").notEmpty().withMessage("Please provide statusX"),
];
