import httpStatus from "http-status";

export class HttpError extends Error {
  constructor(message = "Something went wrong", statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(message);
    this.statusCode = httpStatus.UNAUTHORIZED;
  }
}
export class UnrecognizedFieldError extends HttpError {
  constructor(message = "Unrecognized Field") {
    super(message);
    this.statusCode = httpStatus.BAD_REQUEST;
  }
}
