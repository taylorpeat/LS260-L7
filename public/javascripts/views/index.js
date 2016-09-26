var IndexView = Backbone.View.extend({
  template: App.templates.index,
  events: {
    "click footer a": "newAlbum"
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
  }
});