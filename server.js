'use strict';

var http = require('http');
var config = require('./config');
var app = require('express')();

config.applyConfiguration(app);
require('./server/middleware').before(app);
require('./server/routes')(app);
require('./server/middleware').after(app);

http.createServer(app)
  .listen(config.port, config.host, function() {
    console.info('Application running at', config.host + ':' + config.port);
  });

