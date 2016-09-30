var path = require('path'),
    fs = require('fs'),
    albumCollection = require('../local_modules/albums.js');

function addAlbumRoutes(router) {
  router.get('/albums/new', function(req, res, next) {
    res.render('new', {
      albums: App.albums
    });
  });

  router.post('/albums', function(req, res) {
    var album = req.body,
        albums = albumCollection.get(),
        last_id = albumCollection.getLastID();
    
    album.id = last_id;
    albums.push(album);

    albumCollection.set(albums);
    res.json(album);
  });

  router.put('/albums', function(req, res) {
    var album = req.body,
        albums = albumCollection.get();

    albums.find(function(album) {
      return id === album.id
    }) = album;
    albumCollection.set(albums);
    res.json(albumCollection.get());
  });

  router.delete('/albums', function(req, res) {
    var id = +req.query.id,
        albums = albumCollection.get();

    rev_albums = albums.filter(function(album) {
      return album.id !== id;
    });
    albumCollection.set(rev_albums);
    res.json(albumCollection.get());
  });
}

module.exports = addAlbumRoutes;