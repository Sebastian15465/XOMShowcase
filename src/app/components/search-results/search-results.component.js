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
var router_1 = require("@angular/router");
var rest_search_service_1 = require("../../rest-search.service");
var Rx_1 = require("rxjs/Rx");
var rest_service_1 = require("../../rest.service");
var stringLanguageConstants_1 = require("../../stringLanguageConstants");
var SearchResultsComponent = (function () {
    function SearchResultsComponent(restsearchservice, router, restservice, strings) {
        var _this = this;
        this.searchTerms = new Rx_1.Subject(); // Property für die eingegebenen Suchstrings
        this.restSearchService = restsearchservice; // Zuweisung RestSearchService
        this.router = router; // Zuweisung Router
        this.restService = restservice; // Zuweisung RestService
        this.strings = strings; // Zuweisung languageStrings
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscription an den langeuageTerms, um immer die aktuelle Sprache lokal zu haben.
    }
    /**
     * Schiebt einen string in die SearchTerms
     * @param term
     */
    SearchResultsComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.searchTerms
            .debounceTime(300) // warte 300ms nach jeder Eingabe
            .distinctUntilChanged() // ignoriere die Eingabe wenn es die Gleiche wie vorher ist.
            .switchMap(function (term) { return term // wechsel zu einem neuen Observable wenn sich die Eingabe ändert.
            ? _this.restSearchService.search(term)
            : Rx_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Rx_1.Observable.of([]);
        });
    };
    /**
     * setze Url auf /detail?id=product.id
     * @param product
     */
    SearchResultsComponent.prototype.gotoDetail = function (product) {
        var link = ['/detail', product.id];
        this.router.navigate(link);
    };
    SearchResultsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-results',
            templateUrl: 'search-results.component.html' // Pfad zum Html-Template
        }), 
        __metadata('design:paramtypes', [rest_search_service_1.RestSearchService, router_1.Router, rest_service_1.RestService, stringLanguageConstants_1.stringLanguageConstants])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
exports.SearchResultsComponent = SearchResultsComponent;
//# sourceMappingURL=search-results.component.js.map