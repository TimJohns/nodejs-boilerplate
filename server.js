#!/usr/bin/env node
const PORT=process.env.PORT || 80;
var app = require('./app');

function startServer(app) {
  console.log('Starting server.');

  var http = require('http');
  var httpServer = http.createServer(app);
  httpServer.listen(PORT, function() {
    console.log('Server listening on port ' + httpServer.address().port);
  });
}

startServer(app);
