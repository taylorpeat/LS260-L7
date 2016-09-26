Backbone.Router.extend({
  routes: {
    "": "App.renderAlbums",
    "albums/new": "App.newAlbum"
  }
});