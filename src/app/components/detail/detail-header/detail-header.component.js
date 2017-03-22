"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by sebastian.seelig on 15.02.2017.
 */
var core_1 = require('@angular/core');
var rest_service_1 = require("../../../rest.service");
var Product_1 = require("../../../Product");
require('rxjs/add/operator/switchMap');
var DetailHeaderComponent = (function () {
    function DetailHeaderComponent(restService) {
        this.restService = restService; // zuweisung des RestServices.
    }
    DetailHeaderComponent.prototype.ngOnInit = function () {
        this.getArtikelkurztext(); // führe Funktion getArtikelkurztext() aus.
    };
    /**
     * benutzt die Funktion vom RestService um sich die ArtikelKurztext-Values zu holen und
     * weist sie dem Property zu.
     */
    DetailHeaderComponent.prototype.getArtikelkurztext = function () {
        var me = this;
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelKurztextValues = values; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], DetailHeaderComponent.prototype, "product", void 0);
    DetailHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail-header-component',
            templateUrl: 'detail-header.component.html'
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], DetailHeaderComponent);
    return DetailHeaderComponent;
}());
exports.DetailHeaderComponent = DetailHeaderComponent;
//# sourceMappingURL=detail-header.component.js.map