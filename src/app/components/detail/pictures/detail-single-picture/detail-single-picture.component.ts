/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../resttest.service";
import {Product} from "../../../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Values} from "../../../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'detailSinglePicture-component',
    styleUrls: ['detail-single-picture.component.css'],
    templateUrl: 'detail-single-picture.component.html'
})
export class DetailSinglePictureComponent
{
    @Input()
    public assetValues: Values[];

    private restService: RestService;
    private router: Router;
    private pictureUrls: string[];
    private showModal: boolean;
    private activePictureUrl : string = "";


    constructor(restService: RestService, router1: Router)
    {
        this.restService = restService;
        this.router = router1;


    }

    ngOnInit(): void
    {


        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValueId(this.assetValues);
        this.showModal = false;
        this.setActivePicture(this.pictureUrls[0] ? this.pictureUrls[0] : "");

    }

    setActivePicture(url:string):void
    {
        this.activePictureUrl = url;
    }

    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }


    openModal(activePicUrl : string): void
    {
        this.showModal = true;
        this.activePictureUrl = activePicUrl;


    }

    closeModal(): void
    {

        this.showModal = false;

    }





}
