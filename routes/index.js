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

router.get('/albums/new', function(req, res, next) {
  res.render('new');
});

router.post('/albums', function(req, res) {
  var album = req.body;
  res.json(album);
});

module.exports = router;

function createAlbum(data) {

}