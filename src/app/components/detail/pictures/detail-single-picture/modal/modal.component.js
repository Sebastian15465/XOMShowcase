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
 * Created by sebastian.seelig.
 */
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var ModalComponent = (function () {
    function ModalComponent() {
        this.slideIndex = 1; // Index für die Slides.
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.slideIndex = this.pictureUrls.indexOf(this.withActivatedPictureUrl); // Zuweisung des Indexes vom 2. Input
        this.activePictureUrl = this.pictureUrls[this.slideIndex]; // Zuweisung der Url des 2. Inputs.
    };
    /**
     * Funktion für die nächstes- und vorheriges Bild-Buttons
     * @param n
     */
    ModalComponent.prototype.plusSlides = function (n) {
        this.showSlides(this.slideIndex += n);
    };
    /**
     * Funktion zum setzen der aktiven Bild-Url durch klicken auf die kleinen Preview Bilder.
     * @param n
     */
    ModalComponent.prototype.currentSlide = function (n) {
        this.activePictureUrl = n;
    };
    /**
     * Funktion für die nächstes- und vorheriges Bild-Buttons mit Modulo-Operator um eine OutOfBounds Exception zu vermeiden.
     * @param n
     */
    ModalComponent.prototype.showSlides = function (n) {
        this.activePictureUrl = this.pictureUrls[n % this.pictureUrls.length];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ModalComponent.prototype, "pictureUrls", void 0);
    __decorate([
        // Input Array von Bilder URLs
        core_1.Input(), 
        __metadata('design:type', String)
    ], ModalComponent.prototype, "withActivatedPictureUrl", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'Modal-component',
            styleUrls: ['modal.component.css'],
            templateUrl: 'modal.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map