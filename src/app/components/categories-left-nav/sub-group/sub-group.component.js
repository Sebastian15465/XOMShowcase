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
var rest_service_1 = require("../../../rest.service");
var router_1 = require("@angular/router");
var SubGroupComponent = (function () {
    // BehaviorSubject vom restService.
    function SubGroupComponent(restService, router) {
        this.isDataAvailable = false; // Deklaration und Initialisierung eines Boolean Propertys.
        this.isSelected = false; // Deklaration und Initialisierung eines Boolean Propertys.
        this.restService = restService; // Zuweisen des Restservices.
        this.router = router; // Zuweisen des Routers.
    }
    SubGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getNextProductgroup(); // führe die Funktion getNextProductgroup() aus.
        this.restService.languageTerms.subscribe(function (value) { return _this.languageSelected = value; }); // Subscribe an den restService.languageTerms.
    };
    /**
     * Funktion getNextProductgroup() -> returnt nichts.
     */
    SubGroupComponent.prototype.getNextProductgroup = function () {
        var me = this; // me kann als this benutz werden.
        this.restService.getProductGroupWithExtendedProductgroups(me.productgroupId) // Führe die Funktion getProductGroupWithExtendedProductgroups() des restServices aus. Benutze
            .then((function (productgroup1) { return me.productgroup = productgroup1; })).then(function () {
            // dann weise der Property productgroup die empfangenen Daten zu.
            return me.isDataAvailable = true;
        }); // Wenn die erste Callback-Methode abgeschlossen ist, dann setze isDataAvailable auf true.
    };
    /**
     * Toggle zum aufklappen.
     */
    SubGroupComponent.prototype.toggleSelect = function () {
        if (this.isSelected == false) {
            this.isSelected = true; // setze isSelected auf true.
        }
        else {
            this.isSelected = false; // setze isSelected auf Unwahr.
        }
        this.router.navigate(['productgroup', this.productgroup.id]); // setze die URL in der Adressleiste des Browsers auf /productgroup/ID der ausgewählten Produktgruppe.
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SubGroupComponent.prototype, "productgroupId", void 0);
    SubGroupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories-left-nav-sub-group',
            // => <categories-left-nav-sub-group [productgroupId]="productgroupItem.id"></categories-left-nav-sub-group>
            styleUrls: ['sub-group.component.css'],
            templateUrl: 'sub-group.component.html' // Pfad zum HTML-Template.
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router])
    ], SubGroupComponent);
    return SubGroupComponent;
}());
exports.SubGroupComponent = SubGroupComponent;
//# sourceMappingURL=sub-group.component.js.map