"use strict";
/**
 * Created by sebastian.seelig on 17.02.2017.
 */
var externalIDs_1 = require("./externalIDs");
var Productgroup = (function () {
    function Productgroup() {
        this.externalIds = new externalIDs_1.externalIDsClass;
        this.productgroups = new Array();
        this.products = new Array();
    }
    return Productgroup;
}());
exports.Productgroup = Productgroup;
//# sourceMappingURL=Productgroup.js.map