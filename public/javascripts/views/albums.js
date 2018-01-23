var AlbumView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.album,
  initialize: function() {
    this.render();
    this.model.view = this;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo( App.$el.find("ul") );
    this.checkForBrokenImage();
  },
  checkForBrokenImage: function() {
    this.$el.find('img')[0].onerror = function(){ $(this).attr("src", "http://placehold.it/300x300/&text=You're Lazy"); };
  },
});