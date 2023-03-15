function responseBuilder(data = {}, msg = "SUCCESS", status = 200) {
  return {
    data,
    msg,
    status,
  };
}

function created(msg) {
  return responseBuilder({},msg, 201)
}

//#################### MIDDLEWARE RESPONSE.SEND OVERRIDER (DEVELOPMENT IN PROGRESS) ####################
function builder(req, res, next){
  try {
    var oldSend = res.send;
    res.builder = function (data) {
      let pMsg = parseMessage(arguments[0]);
      arguments[0] = pMsg;
      // res.statusCode = 200;
      oldSend.apply(res, arguments);
    };
  } catch (ex) {
    next(ex);
  }
  next();
}

function parseMessage(d) {
  let isError = function (e) {
    return e.Errors || (e && e.stack && e.message);
  };
  let err = isError(d);
  if (err)
    return {
      msg: err,
      status: -1,
    };
  return {
    msg: d.Message || "SUCCESS",
    status: 200,
    data: Array.isArray(d?.Data || d) ? d?.Data || d : [d],
  };
}



export { responseBuilder, created, builder};
