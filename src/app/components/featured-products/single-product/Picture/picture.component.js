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
var rest_service_1 = require("../../../../rest.service");
var router_1 = require('@angular/router');
require('rxjs/add/operator/mergeMap');
var PictureComponent = (function () {
    function PictureComponent(restService, router1) {
        this.restService = restService; // Zuweisung RestService
        this.router = router1; // Zuweisung Router
    }
    PictureComponent.prototype.ngOnInit = function () {
        // Hole die Bilder Urls vom RestService.
        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValue(this.assetValues);
    };
    /**
     * Setze Url auf /detail mit id=product.id
     * @param product
     */
    PictureComponent.prototype.redirectToDetail = function (product) {
        this.router.navigate(["/detail", product.id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PictureComponent.prototype, "assetValues", void 0);
    PictureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'picture-component',
            templateUrl: 'picture.component.html' // Pfad des Html-Templates.
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router])
    ], PictureComponent);
    return PictureComponent;
}());
exports.PictureComponent = PictureComponent;
//# sourceMappingURL=picture.component.js.map