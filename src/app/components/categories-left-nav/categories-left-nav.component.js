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
var router_1 = require("@angular/router");
var CategoriesLeftNavComponent = (function () {
    function CategoriesLeftNavComponent(restService, router1) {
        this.restService = restService;
        this.router = router1;
    }
    CategoriesLeftNavComponent.prototype.ngOnInit = function () {
        this.getClassificationsFromRest();
    };
    CategoriesLeftNavComponent.prototype.getClassificationsFromRest = function () {
        var _this = this;
        this.restService.getClassificationWithProductGroups().then((function (classifications) { return _this.classifications = classifications; }));
    };
    CategoriesLeftNavComponent.prototype.onSelect = function (classification) {
        if (this.selectedClassification != classification) {
            this.selectedClassification = classification;
            console.log("Klassifikation ausgewählt.");
            this.router.navigate(['classification', this.selectedClassification.id]);
        }
        else {
            this.selectedClassification = null;
            this.router.navigate(['/welcome']);
        }
    };
    CategoriesLeftNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories-left-nav',
            templateUrl: 'categories-left-nav.component.html'
        }), 
        __metadata('design:paramtypes', [resttest_service_1.RestService, router_1.Router])
    ], CategoriesLeftNavComponent);
    return CategoriesLeftNavComponent;
}());
exports.CategoriesLeftNavComponent = CategoriesLeftNavComponent;
//# sourceMappingURL=categories-left-nav.component.js.map