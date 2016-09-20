var path = require('path'),
    fs = require('fs');

function addIndexRoute(router) {
  router.get('/', function(req, res, next) {
    var albums = fs.readFileSync(path.resolve(path.dirname(__dirname), "public/data/albums.json"), 'utf8');

    res.render('index', {
      title: "Test Title",
      albums: JSON.parse(albums).data
    });
  });
}


module.exports = addIndexRoute;