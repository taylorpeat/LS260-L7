var path = require('path'),
    fs = require('fs'),
    albumCollection = require('../local_modules/albums.js'),
    _ = require('underscore');

function addAlbumRoutes(router) {
  router.get('/albums/new', function(req, res, next) {
    res.render('new');
  });

  router.post('/albums', function(req, res) {
    var album = req.body,
        albums = albumCollection.get(),
        last_id = albumCollection.getLastID();
    
    album.id = last_id;
    albums.push(album);

    albumCollection.set(albums);
    res.redirect('/');
  });

  router.put('/albums', function(req, res) {
    var album = req.query.id,
        albums = albumCollection.get();

    _(albums).findWhere({ id: album.id }) = album;
    albumCollection.set(albums);
    res.json(albumCollection.get());
  });

  router.post('/delete-albums', function(req, res) {
    var id = +req.query.id,
        albums = albumCollection.get();
    console.log(id);

    rev_albums = albums.filter(function(album) {
      return album.id === id;
    });
    albumCollection.set(rev_albums);
    res.json(rev_albums);
  });
}

module.exports = addAlbumRoutes;