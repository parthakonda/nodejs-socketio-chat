var express = require('express');
var router = express.Router();

module.exports = io => {
  router.get('/', function(req, res) {
    io.to('parthasaradhi1992@gmail.com').emit('message', 'Welcome dude');
    res.render('index', { title: 'Welcome' });
  });
  return router;
};
