var App = {
  $el: $("main"),
  templates: JST,
  renderIndex: function() {
    this.indexView = new IndexView();
    this.renderAlbums();
    new CartView({ collection: this.albums });
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
    this.listenTo(this.indexView, "add_to_cart", this.addCart);
  },
  newAlbum: function() {
    new NewAlbumView();
  },
  addCart: function(args) {
    this.cart.addItem(args.album);
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

