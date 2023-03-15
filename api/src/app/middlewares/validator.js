import { validationResult } from "express-validator";

const catchValidationErrors = (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    let _errors = {};
    errors.array().forEach((error) => {
      Object.assign(_errors, error);
    });
    return res.status(400).json({ errors: _errors });
  }
  next();
};

/**
 * validationChain -> chain[]
 */ 
const chainValidators = (...validators) => {
  return [...validators, catchValidationErrors];
};


const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  let _nestedErrors = {};
  // nestedErrors only exist when using the oneOf function
  if (nestedErrors) {
    nestedErrors.forEach((nestedError) => {
      _nestedErrors[nestedError.param] = nestedError.msg;
    });
    return { ..._nestedErrors, oneOf: msg };
  }
  return { [param]: msg };
};


export {chainValidators}