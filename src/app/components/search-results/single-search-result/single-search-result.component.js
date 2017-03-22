/**
 * Created by sebastian.seelig on 22.02.2017.
 */
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
var core_1 = require('@angular/core');
var Product_1 = require("../../../Product");
var rest_service_1 = require("../../../rest.service");
var router_1 = require("@angular/router");
var SingleSearchResultComponent = (function () {
    function SingleSearchResultComponent(restService, router1) {
        this.restService = restService; // Zuweisung RestService
        this.router = router1; // Zuweisung Router
    }
    SingleSearchResultComponent.prototype.ngOnInit = function () {
        this.getInformations();
    };
    /**
     * setze Url auf /deteil mit id= product.id.
     */
    SingleSearchResultComponent.prototype.redirectToDetail = function () {
        this.router.navigate(["/detail", this.product.id]);
    };
    /**
     * führe die einthaltenen Funktion aus, um die benötigten Information zu beschaffen.
     */
    SingleSearchResultComponent.prototype.getInformations = function () {
        this.getArtikelListenpreis();
        this.getArtikelurztext();
        this.getArtikelbild();
        this.getArtikelBeschreiung();
    };
    /**
     * hole den Preis vom RestService
     */
    SingleSearchResultComponent.prototype.getArtikelListenpreis = function () {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelListenpreisValues = values; });
    };
    /**
     * hole die Beschreibung vom RestService
     */
    SingleSearchResultComponent.prototype.getArtikelBeschreiung = function () {
        var me = this;
        this.restService.getShowcaseArtikelbeschreibungsValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBeschreibungValues = values; });
    };
    /**
     * hole die Artikelbilden vom RestService
     */
    SingleSearchResultComponent.prototype.getArtikelbild = function () {
        var me = this;
        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelBildValues = values; });
    };
    /**
     * hole den Namen des Produktes vom RestService
     */
    SingleSearchResultComponent.prototype.getArtikelurztext = function () {
        var me = this;
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelKurztextValues = values; });
    };
    /*   TODO  */
    SingleSearchResultComponent.prototype.getArtikelrating = function () {
        var me = this;
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelRatingValues = values; });
    };
    /*   TODO  */
    SingleSearchResultComponent.prototype.getArtikelAktionspreis = function () {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then(function (values) { return me.showcase_artikelAktionsPreisValues = values; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Product_1.Product)
    ], SingleSearchResultComponent.prototype, "product", void 0);
    SingleSearchResultComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'single-search-result',
            templateUrl: 'single-search-result.component.html' // Pfad des Html-Templates
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router])
    ], SingleSearchResultComponent);
    return SingleSearchResultComponent;
}());
exports.SingleSearchResultComponent = SingleSearchResultComponent;
//# sourceMappingURL=single-search-result.component.js.map