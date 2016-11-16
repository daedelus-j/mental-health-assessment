'use strict';

var ext = require('jquery-extend');
var commandLineArgs = require('yargs').argv;
var express = require('express')
var path = require('path')


module.exports = ext({}, {
    host: 'localhost',
    port: 3030
  }, {
    host: commandLineArgs.host,
    port: commandLineArgs.port
  });


module.exports.applyConfiguration = function(app) {
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, 'server/templates'));
  app.use(express.static(__dirname + '/dist'));
}
