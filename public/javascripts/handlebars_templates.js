this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"><figcaption><h1>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h1><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><h4>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</h4><h3>$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</h3></figcaption><a class=\"button\" href=\"#\">Add to Cart</a><form action=\"delete-albums\" method=\"post\"><input class=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><input type=\"submit\" value=\"Delete\"></form></a>";
},"useData":true});