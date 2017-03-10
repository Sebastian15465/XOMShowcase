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
var router_1 = require("@angular/router");
var SubGroupComponent = (function () {
    function SubGroupComponent(restService, router) {
        this.isDataAvailable = false;
        this.isSelected = false;
        this.restService = restService;
        this.router = router;
    }
    SubGroupComponent.prototype.ngOnInit = function () {
        this.getNextProductgroup();
    };
    SubGroupComponent.prototype.getNextProductgroup = function () {
        var me = this;
        this.restService.getProductGroupWithExtendedProductgroups(this.productgroupId).then((function (productgroup1) { return me.productgroup = productgroup1; })).then(function () {
            return me.isDataAvailable = true;
        }).then(function () { return console.log("async"); });
    };
    SubGroupComponent.prototype.toggleSelect = function () {
        if (this.isSelected == false) {
            this.isSelected = true;
            this.router.navigate(['productgroup', this.productgroup.id]);
        }
        else {
            this.isSelected = false;
            this.router.navigate(['productgroup', this.productgroup.id]);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SubGroupComponent.prototype, "productgroupId", void 0);
    SubGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories-left-nav-sub-group',
            styleUrls: ['sub-group.component.css'],
            templateUrl: 'sub-group.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router])
    ], SubGroupComponent);
    return SubGroupComponent;
}());
exports.SubGroupComponent = SubGroupComponent;
//# sourceMappingURL=sub-group.component.js.map