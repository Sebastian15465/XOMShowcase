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
require('rxjs/add/operator/switchMap');
var DetailComponent = (function () {
    function DetailComponent(restService, router1, route) {
        this.restService = restService; // zuweisen RestService
        this.router = router1; // zuweisen Router
        this.route = route; // zuweisen Route
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Wenn sich die Parameter der Url ändern, dann wird mit dem Parameter ID der Url eine Funktion vom RestService aufgerufen.
        // Diese Funtion gibt ein Produkt wieder. Wenn der RestService das Produkt geliefert hat, dann wird es im Property gespeichert.
        var params = this.route.params.switchMap(function (params) { return _this.restService.getProductById(params['id']); })
            .subscribe(function (product1) { return _this.product = product1; });
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail-component',
            templateUrl: 'detail.component.html' // Pfad des Html-templates.
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router, router_1.ActivatedRoute])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map