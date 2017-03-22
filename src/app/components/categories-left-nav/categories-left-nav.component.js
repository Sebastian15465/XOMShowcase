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
var core_1 = require('@angular/core'); // Importe
var rest_service_1 = require("../../rest.service");
var stringLanguageConstants_1 = require("../../stringLanguageConstants");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var CategoriesLeftNavComponent = (function () {
    function CategoriesLeftNavComponent(restService, router1, stringConstants) {
        this.toggle = false; // Bool zum auf oder zuklappen des darunterliegenden DOM Elements. Wird für kleine Bildschirme(responsive
        this.restService = restService; // Zuweisung RestService
        this.router = router1; // Zuweisung Router
        this.strings = stringConstants; // Zuweisung LanguageStrings
    }
    CategoriesLeftNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.innerWidth >= 768) {
            this.toggle = true;
        }
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscribe an den restService.languageTerms. Wert wird benötigt, um schnell auf die
        // länderspezifischen Strings in stringLanguageConstants zuzugreifen. Ist entweder "de"
        // oder "en".
        this.classificationsObs = this.restService.languageTerms // Subscribe an den restService.languageTerms, um die Rest API jedes mal nach den Klassifikationen
            .debounceTime(300) // warte 300ms wenn ein neuer Wert in die lanuageTerms geschoben wurde.                
            .distinctUntilChanged() // berücksichtige nur String die sich von dem vorigen unterscheiden.
            .switchMap(function (term) { return term // wechsel zu einem neuen Observable, wenn term sich ändert. Bricht die vorherige Anfrage ab.
            ? _this.restService.getClassificationWithProductGroups() // Wenn die languageTerms ein neuen String bekommen haben, dann führe die Funktion
            : Rx_1.Observable.of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return Rx_1.Observable.of([]);
        });
    };
    CategoriesLeftNavComponent.prototype.onSelect = function (classification) {
        if (this.selectedClassification != classification) {
            this.selectedClassification = classification; // Zuweisen des Parameters in die Variable
            this.router.navigate(['classification', this.selectedClassification.id]); // gehe zu URL: classification mit der ID der ausgewählten Klassifikation.
        }
        else {
            this.selectedClassification = null; // Setzen der Variable auf null.
            this.router.navigate(['/welcome']); // gehe zum welcome screen.
        }
    };
    CategoriesLeftNavComponent.prototype.menuToggleWhenSmallScreen = function () {
        if (this.toggle == false) {
            this.toggle = true; // Setze toggle auf Wahr.
        }
        else
            this.toggle = false; // Setze toggle auf Falsch/Unwahr.
    };
    CategoriesLeftNavComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth >= 768) {
            this.toggle = true;
        }
        else
            this.toggle = false;
    };
    CategoriesLeftNavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories-left-nav',
            styleUrls: ['categories-left-nav.component.css'],
            templateUrl: 'categories-left-nav.component.html' // Pfad des HTML-Templates.
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router, stringLanguageConstants_1.stringLanguageConstants])
    ], CategoriesLeftNavComponent);
    return CategoriesLeftNavComponent;
}());
exports.CategoriesLeftNavComponent = CategoriesLeftNavComponent;
//# sourceMappingURL=categories-left-nav.component.js.map