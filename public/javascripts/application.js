var App = {
  templates: JST,
  init: function() {
    this.renderAlbums();
  },
  renderAlbums: function() {
    this.albums.each(function(album) {
      new AlbumView({
        model: album
      });
    });
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});