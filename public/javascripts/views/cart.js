var CartView = Backbone.View.extend({
  id: "cart",
  template: App.templates.cart,
  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
      quantity: this.collection.getQuantity()
    }));
    $("#cart").replaceWith(this.$el);
  },
  events: {
    "click a": "deleteItem"
  },
  deleteItem: function(e) {
    e.preventDefault();
    
    var id = +$(e.target).parent("li").attr("data-id");

    _(this.collection.toJSON()).findWhere({ id: id }).destroy();
  }
});