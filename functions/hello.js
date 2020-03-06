exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      msg: `hello, netlify`
    })
  };
  callback(undefined, response);
};
