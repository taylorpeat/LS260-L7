var router = new(Backbone.Router.extend({
  routes: {
    "albums/new": App.newAlbum
  },
  initialize: function() {
    this.route(/^\/?$/, "index", App.renderIndex.bind(App));
  }
}))();

Backbone.history.start({
  pushState: true
});

$(document).on("click", "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), {trigger: true});
});