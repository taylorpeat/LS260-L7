var express = require('express'),
    router = express.Router(),
    path = require('path'),
    fs = require('fs'),
    routes = ['./albums.js', './index.js'];

function addRoutes() {
  for (route of routes) {
    require(route)(router);
  }
}

addRoutes();

module.exports = router;