/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../rest.service";
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
export class DetailSinglePictureComponent implements OnInit
{
    @Input()
    public assetValues: Values[];                           // Input um die Komponente zu laden. Property für die Values.

    private restService: RestService;                       // Property für den RestService.
    private router: Router;                                 // Property für den Router.
    private pictureUrls: string[];                          // Property für das String-Array in dem die Urls sind.
    private showModal: boolean;                             // Bool Property für den toggle Effekt.
    private activePictureUrl : string = "";                 // String Property für das gerade groß geschaltete Bild, als Url.


    constructor(restService: RestService, router1: Router)              // DI
    {
        this.restService = restService;                         // Zuweisung des RestServices.
        this.router = router1;                                  // Zuweisung des Routers.


    }

    ngOnInit(): void                // OnInit Angular 2 lifecycle hook
    {


        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValue(this.assetValues);         // Hole die Bild-Urls vom Restservice.
        this.showModal = false;                                                                         // Setzte showModal auf Unwahr.
        this.setActivePicture(this.pictureUrls[0] ? this.pictureUrls[0] : "");                          // Wenn es ein erstes Element in dem Array gibt, dann benutze die erste Url als Parameter für die
                                                                                                        // Funktion setActivePicture. Ansonsten übergebe den Parameter "".

    }

    /**
     * setter der aktiven Url.
     * @param url
     */
    setActivePicture(url:string):void
    {
        this.activePictureUrl = url;
    }

    /**
     * Setze die Url auf /detail + product.id.
     * @param product
     */
    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }


    /**
     * Öffne Modal mit dem übergebenen Parameter als erstes angezeigtes Bild.
     * @param activePicUrl
     */
    openModal(activePicUrl : string): void
    {
        this.showModal = true;
        this.activePictureUrl = activePicUrl;


    }

    /**
     * Schließe Modal
     */
    closeModal(): void
    {

        this.showModal = false;

    }





}
