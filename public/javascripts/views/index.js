var IndexView = Backbone.View.extend({
  template: App.templates.index,
  events: {
    "click footer a": "newAlbum",
    "click form input": "deleteAlbum"
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
    })
  }
});