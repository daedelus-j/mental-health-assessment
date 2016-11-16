'use strict';

module.exports = function(app) {
  app.use(errorHandler);
};

function errorHandler(err, req, res, next) {
  res.statusCode = 404;
  res.end();
}
