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
 * Created by sebastian.seelig on 02.03.2017.
 */
/**
 * Created by sebastian.seelig on 15.02.2017.
 */
var core_1 = require('@angular/core');
var resttest_service_1 = require("../../../resttest.service");
var Product_1 = require("../../../Product");
var router_1 = require('@angular/router');
require('rxjs/add/operator/mergeMap');
var SingleProductComponent = (function () {
    function SingleProductComponent(restService, router1) {
        this.restService = restService;
        this.router = router1;
    }
    SingleProductComponent.prototype.ngOnInit = function () {
        this.getInformations();
    };
    SingleProductComponent.prototype.redirectToDetail = function () {
        this.router.navigate(["/detail", this.product.id]);
    };
    SingleProductComponent.prototype.getInformations = function () {
        this.getArtikelListenpreis();
        this.getArtikelurztext();
        this.getArtikelbild();
    };
    SingleProductComponent.prototype.getArtikelListenpreis = function () {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelListenpreisValues = values; });
    };
    SingleProductComponent.prototype.getArtikelbild = function () {
        var me = this;
        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBildValues = values; });
    };
    SingleProductComponent.prototype.getArtikelurztext = function () {
        var me = this;
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelKurztextValues = values; });
    };
    /*   TODO  */
    SingleProductComponent.prototype.getArtikelrating = function () {
        var me = this;
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelRatingValues = values; });
    };
    /*   TODO  */
    SingleProductComponent.prototype.getArtikelAktionspreis = function () {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelAktionsPreisValues = values; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], SingleProductComponent.prototype, "product", void 0);
    SingleProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'single-product',
            templateUrl: 'single-product.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router])
    ], SingleProductComponent);
    return SingleProductComponent;
}());
exports.SingleProductComponent = SingleProductComponent;
//# sourceMappingURL=single-product.component.js.map