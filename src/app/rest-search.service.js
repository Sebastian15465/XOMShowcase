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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var RestSearchService = (function () {
    function RestSearchService(http) {
        this.http = http;
    } // Hier kurze Declaration und Initialisierung des Http-Properties.
    /**
     * Funktion zum suchen von Parametern in der Rest API/product. Gibt ein Observable von einem Produkt-Array wieder
     * @param term
     * @returns {Observable<Product[]>}
     */
    RestSearchService.prototype.search = function (term) {
        return this.http
            .get("http://demo.xom.one/xom-rest/products/?locale=de&search=                     \n                @SP:pattr674489917227=*" + term + "* OR @SP:pattr5200394238715=*" + term + "*") // @SP:pattr674489917227 ist der Artikelkurztext und @SP:pattr5200394238715 ist die Artikelbeschreibung.
            .map(function (response) { return response.json().data; });
    };
    RestSearchService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestSearchService);
    return RestSearchService;
}());
exports.RestSearchService = RestSearchService;
//# sourceMappingURL=rest-search.service.js.map