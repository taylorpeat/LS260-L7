var App = {
  templates: JST,
  init: function() {
    this.renderAlbums();
    this.bindEvents();
  },
  renderAlbums: function() {
    this.indexView = this.albums.each(function(album) {
      new AlbumView({
        model: album
      });
    });
  },
  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.listenTo(this.indexView, "add_album", this.addAlbum);
    $('#create').on("click", function(e) {
      e.preventDefault();

      
    });
  },
  addAlbum: function() {
    $.ajax({
      method: "POST",
      url: "/albums",
      data: $('form').serialize(),
      success: function() {
        console.log("added album");
      }
    });
  }
};

Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});