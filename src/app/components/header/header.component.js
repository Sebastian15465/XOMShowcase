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
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(router, restsevice) {
        this.router = router; // Zuweisung Router
        this.restService = restsevice; // Zuweisung RstService
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscription an den languageTerms, um immer die aktuelle Sprache lokal zur Verfügung haben.
    };
    /**
     * Setze Sprache. "de" und "en" erlaubt.
     * @param language
     */
    HeaderComponent.prototype.setLanguage = function (language) {
        this.restService.changeLanguage(language);
    };
    /**
     * setzt Url auf /search
     */
    HeaderComponent.prototype.goToSearch = function () {
        var link = ['/search'];
        this.router.navigate(link);
    };
    /**
     * setzt Url auf /welcome
     */
    HeaderComponent.prototype.goToWelcome = function () {
        var link = ['/welcome'];
        this.router.navigate(link);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header-component',
            templateUrl: 'header.component.html' // Pfad zum Html-Template
        }), 
        __metadata('design:paramtypes', [router_1.Router, rest_service_1.RestService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map