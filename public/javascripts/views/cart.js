var CartView = Backbone.View.extend({
  id: "cart",
  template: App.templates.cart,
  initialize: function(options) {
    this.collection = options.collection;

    this.listenTo(this.collection, "cart_updated", this.render);
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.total(),
      quantity: this.collection.quantity()
    }));
    $("#cart").replaceWith(this.$el);
  },
  events: {
    "click a": "deleteItem"
  },
  deleteItem: function(e) {
    e.preventDefault();
    
    var id = $(e.target).parent("li").attr("data-id");

    _(this.collection).findWhere({ id: id }).destroy();
  }
});