var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { requestLogger } = require('./middleware');
var mustacheExpress = require('mustache-express');

/**
 * Configure tmeplate engine
 */
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', './templates');

/**
 * Configure static
 */
app.use(express.static('assets'));

/**
 * Configure middleware
 */
app.use(bodyParser.json());
app.use(requestLogger);

module.exports = io => {
  var router = require('./router')(io);
  // Include routes
  app.use('/', router);
  return app;
};
