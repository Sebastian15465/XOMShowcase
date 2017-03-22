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
var rest_service_1 = require("../../../../rest.service");
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var DetailSinglePictureComponent = (function () {
    function DetailSinglePictureComponent(restService, router1) {
        this.activePictureUrl = ""; // String Property für das gerade groß geschaltete Bild, als Url.
        this.restService = restService; // Zuweisung des RestServices.
        this.router = router1; // Zuweisung des Routers.
    }
    DetailSinglePictureComponent.prototype.ngOnInit = function () {
        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValue(this.assetValues); // Hole die Bild-Urls vom Restservice.
        this.showModal = false; // Setzte showModal auf Unwahr.
        this.setActivePicture(this.pictureUrls[0] ? this.pictureUrls[0] : ""); // Wenn es ein erstes Element in dem Array gibt, dann benutze die erste Url als Parameter für die
        // Funktion setActivePicture. Ansonsten übergebe den Parameter "".
    };
    /**
     * setter der aktiven Url.
     * @param url
     */
    DetailSinglePictureComponent.prototype.setActivePicture = function (url) {
        this.activePictureUrl = url;
    };
    /**
     * Setze die Url auf /detail + product.id.
     * @param product
     */
    DetailSinglePictureComponent.prototype.redirectToDetail = function (product) {
        this.router.navigate(["/detail", product.id]);
    };
    /**
     * Öffne Modal mit dem übergebenen Parameter als erstes angezeigtes Bild.
     * @param activePicUrl
     */
    DetailSinglePictureComponent.prototype.openModal = function (activePicUrl) {
        this.showModal = true;
        this.activePictureUrl = activePicUrl;
    };
    /**
     * Schließe Modal
     */
    DetailSinglePictureComponent.prototype.closeModal = function () {
        this.showModal = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DetailSinglePictureComponent.prototype, "assetValues", void 0);
    DetailSinglePictureComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detailSinglePicture-component',
            styleUrls: ['detail-single-picture.component.css'],
            templateUrl: 'detail-single-picture.component.html'
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService, router_1.Router])
    ], DetailSinglePictureComponent);
    return DetailSinglePictureComponent;
}());
exports.DetailSinglePictureComponent = DetailSinglePictureComponent;
//# sourceMappingURL=detail-single-picture.component.js.map