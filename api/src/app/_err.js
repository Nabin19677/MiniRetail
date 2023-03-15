import { HttpError } from "./util/errors/http.js";


export default (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      msg: err.message,
      status: err.statusCode,
    });
  }

  return res.status(500).json({
    msg: err.msg || err.message || "Unknown Error",
  });
};
