var App = {
  $el: $("main"),
  templates: JST,
  renderIndex: function() {
    this.indexView = new IndexView();
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.albums.each(function(album) {
      new AlbumView({
        model: album
      });
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.indexView, "new_album", this.newAlbum);
  },
  newAlbum: function() {
    new NewAlbumView();
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});