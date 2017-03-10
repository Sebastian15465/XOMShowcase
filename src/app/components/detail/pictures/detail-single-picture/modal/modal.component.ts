/**
 * Created by sebastian.seelig.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../../resttest.service";
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
    public pictureUrls: string[];
    @Input()
    public withActivatedPictureUrl: string;
    private activePictureUrl : string;
    private slideIndex: number = 1;

    constructor()
    {

    }

    ngOnInit(): void
    {
        this.slideIndex = this.pictureUrls.indexOf(this.withActivatedPictureUrl);
        this.activePictureUrl = this.pictureUrls[this.slideIndex];
    }


    plusSlides(n: any): void
    {
        this.showSlides(this.slideIndex += n);
    }


    currentSlide(n: any): void
    {
        this.activePictureUrl = n;
    }


    showSlides(n: any): void
    {
        this.activePictureUrl = this.pictureUrls[n % this.pictureUrls.length];

    }

}
