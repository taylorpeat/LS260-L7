var NewAlbumView = Backbone.View.extend({
  id: "new_album",
  template: App.templates.newAlbum,
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  events: {
    "submit form": "addAlbum"
  },
  addAlbum: function(e) {
    e.preventDefault();

    $.ajax({
      method: "POST",
      url: "/albums",
      data: $('form').serialize(),
      success: function(json) {
        App.albums.add(json);
        history.back({
          albums: App.albums
        });
      }
    });
  }
});