'use strict';

const main = require('../resources/main');

module.exports = routes;

function routes(app) {
  app.get('/', main.get);
}
