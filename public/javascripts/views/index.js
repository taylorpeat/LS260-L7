var IndexView = Backbone.View.extend({
  id: "index",
  template: App.templates.index,
  events: {
    "click footer a": "newAlbum",
    "click form input": "deleteAlbum",
    "click a.add-cart": "addCart"
  },
  newAlbum: function(e) {
    e.preventDefault();

    this.trigger("new_album");
  },
  render: function() {
    App.$el.html(this.$el.html(this.template()));
  },
  initialize: function() {
    this.render();
  },
  deleteAlbum: function(e) {
    e.preventDefault();

    var id = +$(e.target).siblings("input").val();
    
    $.ajax({
      method: "DELETE",
      url: "/albums",
      data: id,
      success: function() {
        App.renderIndex();
      }
    });
  },
  addCart: function(e) {
    e.preventDefault();
    var id = +$(e.target).siblings("a").attr("data-id"),
        album = App.albums.get(id);

    this.trigger("add_to_cart", { album: album });
  }
});