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
var resttest_service_1 = require("../../../resttest.service");
var Product_1 = require("../../../Product");
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var DetailPicturesComponent = (function () {
    function DetailPicturesComponent(restService, router1, location) {
        this.restService = restService;
        this.router = router1;
        this.location = location;
    }
    DetailPicturesComponent.prototype.ngOnInit = function () {
        this.getArtikelbild();
    };
    DetailPicturesComponent.prototype.getArtikelbild = function () {
        var me = this;
        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBildValues = values; });
    };
    DetailPicturesComponent.prototype.redirectToDetail = function (product) {
        this.router.navigate(["/detail", product.id]);
    };
    DetailPicturesComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], DetailPicturesComponent.prototype, "product", void 0);
    DetailPicturesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detailPictures-component',
            templateUrl: 'detail-pictures.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router, common_1.Location])
    ], DetailPicturesComponent);
    return DetailPicturesComponent;
}());
exports.DetailPicturesComponent = DetailPicturesComponent;
//# sourceMappingURL=detail-pictures.component.js.map