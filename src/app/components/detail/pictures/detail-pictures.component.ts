/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../rest.service";
import {Product} from "../../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Values} from "../../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'detailPictures-component',                       // selector => <detailPictures-component [product]="product1"></detailPictures-component>
    templateUrl: 'detail-pictures.component.html'               // Pfad zu dem Html-Template.
})
export class DetailPicturesComponent
{
    @Input()
    public product: Product;                                // Input - Property Product

    private restService: RestService;                       // Property für den RestService
    private router: Router;                                 // Property für den Router.
    private showcase_artikelBildValues: Values[];           // Property für die showcase Artikelbild Values
    private location: Location;                             // Property um auf Browser-Funktionealitäten zuzugreifen zu können.


    constructor(restService: RestService, router1: Router, location: Location)   // DI
    {
        this.restService = restService;         // setzen vom restService.
        this.router = router1;                  // setzen vom Router.
        this.location = location;               // letzen von der Location

    }

    ngOnInit(): void
    {


        this.getArtikelbild();

    }


    /**
     * Funktion die die showcase Artikelbid Values vom restService anfordert und in die Property schreibt, wenn sie angekommen sind.
     */
    getArtikelbild()
    {
        var me = this;

        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    /**
     * Rufe Url /detail mit id=product.id auf.
     * @param product
     */
    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }

    /**
     * Browser Zurück Funktion
     */
    goBack(): void {
        this.location.back();
    }

}
