var CartItems = Backbone.Collection.extend({
  addItem: function(album) {
    var item = album.clone();
    item.set("quantity", 1);
    this.add(item);
  },
  quantity: function() {
    return this.models.reduce(function(total, item) {
      return (total || 0) + item.quantity;
    });
  },
  total: function() {
    return this.models.length;
  }
});