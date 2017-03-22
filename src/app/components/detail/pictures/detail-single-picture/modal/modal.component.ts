/**
 * Created by sebastian.seelig.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../../rest.service";
import {Product} from "../../../../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Values} from "../../../../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'Modal-component',
    styleUrls: ['modal.component.css'],
    templateUrl: 'modal.component.html'
})
export class ModalComponent
{
    @Input()
    public pictureUrls: string[];                       // Input Array von Bilder URLs
    @Input()
    public withActivatedPictureUrl: string;             // Input aktives Bild vom Parent Komponenten
    private activePictureUrl : string;                  // Property für das große Bild in der Mitte.
    private slideIndex: number = 1;                     // Index für die Slides.

    constructor()
    {

    }

    ngOnInit(): void
    {
        this.slideIndex = this.pictureUrls.indexOf(this.withActivatedPictureUrl);   // Zuweisung des Indexes vom 2. Input
        this.activePictureUrl = this.pictureUrls[this.slideIndex];                  // Zuweisung der Url des 2. Inputs.
    }


    /**
     * Funktion für die nächstes- und vorheriges Bild-Buttons
     * @param n
     */
    plusSlides(n: any): void
    {
        this.showSlides(this.slideIndex += n);
    }

    /**
     * Funktion zum setzen der aktiven Bild-Url durch klicken auf die kleinen Preview Bilder.
     * @param n
     */
    currentSlide(n: any): void
    {
        this.activePictureUrl = n;
    }


    /**
     * Funktion für die nächstes- und vorheriges Bild-Buttons mit Modulo-Operator um eine OutOfBounds Exception zu vermeiden.
     * @param n
     */
    showSlides(n: any): void
    {
        this.activePictureUrl = this.pictureUrls[n % this.pictureUrls.length];

    }

}
