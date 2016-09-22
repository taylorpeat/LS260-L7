var AlbumView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.album,
  initialize: function() {
    this.render();
    this.model.view = this;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo( $("main ul") );
  }
});