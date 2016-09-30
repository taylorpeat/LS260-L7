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
    this.update();
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
    return this;
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(total, item) {
      return total + item.quantity * item.price;
    }, 0);
    return this;
  },
  getQuantity: function() {
    return this.quantity;
  },
  getTotal: function() {
    return this.total;
  },
  destroy: function(args) {
    this.remove(args.id);
    this.update();
  },
  initialize: function() {
    this.on("destroy", this.destroy);
    this.readStorage();
  },
  update: function() {
    this.setQuantity().setTotal().updateStorage();
  },
  updateStorage: function() {
    localStorage.setItem("cart", JSON.stringify(this.toJSON()));
  },
  readStorage: function() {
    this.reset(JSON.parse(localStorage.getItem("cart")));
    this.setQuantity().setTotal();
  }
});