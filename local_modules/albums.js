var fs = require('fs'),
    path = require('path');

var albumRetreiver = {
  getAlbums: function() {
    return JSON.parse(fs.readFileSync(path.resolve(path.dirname(__dirname), "public/data/albums.json"), 'utf8'));
  },
  get: function() {
    return this.getAlbums().data;
  },
  set: function(new_albums) {
    var albums = this.getAlbums();
    albums.last_id += 1;
    albums.data = new_albums;
    fs.writeFileSync(path.resolve(path.dirname(__dirname), "public/data/albums.json"), JSON.stringify(albums));
  },
  getLastID: function() {
    return this.getAlbums().last_id;
  }
}

module.exports = albumRetreiver;