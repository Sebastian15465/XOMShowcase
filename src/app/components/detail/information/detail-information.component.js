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
var DetailInformationComponent = (function () {
    function DetailInformationComponent(restService, router1, route, location) {
        this.restService = restService;
        this.router = router1;
        this.route = route;
        this.location = location;
    }
    DetailInformationComponent.prototype.ngOnInit = function () {
        this.getInformations();
    };
    DetailInformationComponent.prototype.getInformations = function () {
        this.getArtikelListenpreis();
        this.getArtikelkurztext();
        this.getArtikelbild();
        this.getArtikelBeschreiung();
    };
    DetailInformationComponent.prototype.getArtikelListenpreis = function () {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelListenpreisValues = values; })
            .then(function () {
            console.log("Bin da!");
            console.log(me.product.id);
            me.showcase_artikelListenpreisValues.forEach(function (x) { return console.log(x.value['value']); });
        });
    };
    DetailInformationComponent.prototype.getArtikelbild = function () {
        var me = this;
        console.log(me.product.name);
        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBildValues = values; });
    };
    DetailInformationComponent.prototype.getArtikelkurztext = function () {
        var me = this;
        console.log(me.product.name);
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelKurztextValues = values; })
            .then(function () { return console.log(me.showcase_artikelKurztextValues); });
    };
    DetailInformationComponent.prototype.getArtikelBeschreiung = function () {
        var me = this;
        console.log(me.product.name);
        this.restService.getShowcaseArtikelbeschreibungsValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBeschreibungValues = values; });
    };
    /*   TODO  */
    DetailInformationComponent.prototype.getArtikelrating = function () {
        var me = this;
        console.log(me.product.name);
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelRatingValues = values; });
    };
    /*   TODO  */
    DetailInformationComponent.prototype.getArtikelAktionspreis = function () {
        var me = this;
        console.log(me.product.name);
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelAktionsPreisValues = values; });
    };
    DetailInformationComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], DetailInformationComponent.prototype, "product", void 0);
    DetailInformationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detailInformation-component',
            templateUrl: 'detail-information.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router, router_1.ActivatedRoute, common_1.Location])
    ], DetailInformationComponent);
    return DetailInformationComponent;
}());
exports.DetailInformationComponent = DetailInformationComponent;
//# sourceMappingURL=detail-information.component.js.map