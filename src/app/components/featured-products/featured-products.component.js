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
var rest_service_1 = require("../../rest.service");
var router_1 = require('@angular/router');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/from');
var stringLanguageConstants_1 = require("../../stringLanguageConstants");
var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent(restService, router1, route, stringConstants) {
        var _this = this;
        this.products = new Array(); // Property der Produkte
        this.restService = restService; // Zuweisung RestService
        this.router = router1; // Zuweisung Router
        this.route = route; // Zuweisung Route
        this.strings = stringConstants; // Zuweisung languageStrings
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscription an den languageTerms des RestServices.
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params // Subscription and den Parametern der Url. D.h. wenn sich die Url verändert, dann wird
            .switchMap(function (params) { return _this.restService.getProductsFromProductgroup(params['id']); })
            .subscribe(function (products) { return _this.products = products; });
    };
    FeaturedProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'featured-products',
            templateUrl: 'featured-products.component.html' // Pfad des Html-Templates.
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router, router_1.ActivatedRoute, stringLanguageConstants_1.stringLanguageConstants])
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());
exports.FeaturedProductsComponent = FeaturedProductsComponent;
//# sourceMappingURL=featured-products.component.js.map