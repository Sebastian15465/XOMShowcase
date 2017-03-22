"use strict";
var externalIDs_1 = require("./externalIDs");
/**
 * Created by sebastian.seelig on 08.02.2017.
 */
var Product = (function () {
    function Product() {
        this.externalIds = new externalIDs_1.externalIDsClass();
        this.values = new Array();
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map