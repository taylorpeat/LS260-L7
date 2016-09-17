var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var albums = fs.readFileSync(path.resolve(path.dirname(__dirname), "public/data/albums.json"), 'utf8');

  res.render('index', {
    title: "Test Title",
    albums: JSON.parse(albums)
  });
});

module.exports = router;
