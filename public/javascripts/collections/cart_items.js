var CartItems = Backbone.Collection.extend({
  addItem: function(album) {
    if (this.existingID(album)) {
      _(this.models).findWhere({ id: album.id }).quantity++
    } else {
      var item = album.clone();
      item.set("quantity", 1);
      this.add(item);
    }
    // this.updateQuantity();
    // this.updateTotal();
    this.trigger("cart_updated");
  },
  existingID: function(model) {
    return this.models.some(function(mod) {
      return mod.id === model.id;
    });
  },
  quantity: function() {
    return this.models.reduce(function(total, item) {
      return (total || 0) + item.quantity;
    });
  },
  total: function() {
    return this.models.reduce(function(total, item) {
      return (total || 0) + item.quantity * item.price;
    });
  }
});