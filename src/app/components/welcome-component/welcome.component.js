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
var stringLanguageConstants_1 = require("../../stringLanguageConstants");
var rest_service_1 = require("../../rest.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(strings, restservice) {
        this.strings = strings; // Zuweisung languageStrings
        this.restService = restservice; // Zuweisung RestService
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscription an den languageTerms, um immer die aktuelle Sprache lokal zu Verfügung zu haben.
    };
    WelcomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'welcome-c',
            templateUrl: './welcome.component.html' // Pfad zum Html-Template.
        }), 
        __metadata('design:paramtypes', [stringLanguageConstants_1.stringLanguageConstants, rest_service_1.RestService])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map