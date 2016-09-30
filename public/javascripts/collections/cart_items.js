var CartItems = Backbone.Collection.extend({
  addItem: function(album) {
    if (this.existingID(album)) {
      var current_album = this.get(album.id);
      current_album.set("quantity", current_album.get("quantity") + 1);
    } else {
      var item = album.clone();
      item.set("quantity", 1);
      this.add(item);
    }
    this.setQuantity();
    this.setTotal();
    this.trigger("cart_updated");
  },
  existingID: function(model) {
    return this.models.some(function(mod) {
      return mod.id === model.id;
    });
  },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(total, item) {
      return total + item.quantity;
    }, 0);
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(total, item) {
      return total + item.quantity * item.price;
    }, 0);
  },
  getQuantity: function() {
    return this.quantity;
  },
  getTotal: function() {
    return this.total;
  },
  destroy: function(args) {
    this.remove(args.id);
    this.setQuantity();
    this.setTotal();
  },
  initialize: function() {
    this.on("destroy", this.destroy);
  }
});