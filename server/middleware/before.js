'use strict';

const bodyparser = require('body-parser');


module.exports = function(app) {
  app.use(bodyparser.json());
  app.use(errorHandler);
}

function errorHandler(err, req, res, next) {
  if (err) {
    // for the logs
    console.error(err);
    res.statusCode = err.status;
    res.end();
  }
  next();
}
