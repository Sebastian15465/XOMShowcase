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
var HeaderComponent = (function () {
    function HeaderComponent(router, restsevice) {
        this.router = router;
        this.restservice = restsevice;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.languageSelected = this.restservice.languageSelected;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.restservice.languageSelected = language;
        this.languageSelected = this.restservice.languageSelected;
    };
    HeaderComponent.prototype.goToSearch = function () {
        var link = ['/search'];
        this.router.navigate(link);
    };
    HeaderComponent.prototype.goToWelcome = function () {
        var link = ['/welcome'];
        this.router.navigate(link);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-component',
            templateUrl: 'header.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, resttest_service_1.RestService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map