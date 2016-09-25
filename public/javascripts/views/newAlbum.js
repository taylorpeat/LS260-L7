var newAlbumView = Backbone.View.extend({
  template: App.templates.newAlbum,
  initialize: function() {
    this.render();
  },
  render: function() {
    $("body").html(this.$el.html(this.template()));
  },
  events: {
    "submit form": "addAlbum"
  },
  addAlbum: function(e) {
    e.preventDefault();
    
    this.trigger("add_album");
  }
});