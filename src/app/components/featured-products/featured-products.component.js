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
var resttest_service_1 = require("../../resttest.service");
var router_1 = require('@angular/router');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
require('rxjs/add/observable/from');
var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent(restService, router1, route) {
        this.products = new Array();
        this.restService = restService;
        this.router = router1;
        this.route = route;
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.restService.getProductsFromProductgroup(params['id']); })
            .subscribe(function (products) { return _this.products = products; });
    };
    FeaturedProductsComponent.prototype.getProductValues = function () {
        var _this = this;
        var _loop_1 = function(item) {
            this_1.restService.getProductWithValuesById(item.id).then(function (product) { return _this.products.find(function (x) { return x.id == item.id; }).values = product.values; });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var item = _a[_i];
            _loop_1(item);
        }
    };
    FeaturedProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'featured-products',
            templateUrl: 'featured-products.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router, router_1.ActivatedRoute])
    ], FeaturedProductsComponent);
    return FeaturedProductsComponent;
}());
exports.FeaturedProductsComponent = FeaturedProductsComponent;
//# sourceMappingURL=featured-products.component.js.map