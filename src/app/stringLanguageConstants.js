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
var core_1 = require("@angular/core");
/**
 * Created by sebastian.seelig on 14.03.2017.
 */
var stringLanguageConstants = (function () {
    function stringLanguageConstants() {
        this.classifications = { "de": "Klassifikationen", "en": "Classifications" };
        this.products = { "de": "Produkte", "en": "Products" };
        this.welcome = { "de": "Willkommen!", "en": "Welcome!" };
        this.welcomeText = { "de": "Willkommen auf dem XOM-Showcase.", "en": "Welcome to the XOM-Showcase." };
        this.noProducts = { "de": "Hier gibt es keine Produkte.", "en": "No products in this group." };
        this.search = { "de": "Suche", "en": "Search" };
    }
    stringLanguageConstants = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], stringLanguageConstants);
    return stringLanguageConstants;
}());
exports.stringLanguageConstants = stringLanguageConstants;
//# sourceMappingURL=stringLanguageConstants.js.map