var App = {
  $el: $("main"),
  templates: JST,
  renderIndex: function() {
    this.preventBrokenImages();
    this.indexView = new IndexView();
    this.renderAlbums();
    this.cart = new CartItems();
    this.cart.view = new CartView({ collection: this.cart });
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
  resetAlbums: function(json) {
    this.$el.find("ul").empty();
    this.albums.reset(json);
    this.renderAlbums();
  },
  addCart: function(args) {
    this.cart.addItem(args.album);
  },
  preventBrokenImages: function(e) {
    document.addEventListener("DOMContentLoaded", function(event) {
      document.querySelectorAll('img').forEach(function(img){
        img.onerror = function(){ $(this).attr("src", "http://placehold.it/300x300/&text=You're Lazy"); };
      });
    });
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});

