/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../resttest.service";
import {Product} from "../../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Values} from "../../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'detailPictures-component',
    templateUrl: 'detail-pictures.component.html'
})
export class DetailPicturesComponent
{
    @Input()
    public product: Product;

    private restService: RestService;
    private router: Router;
    private showcase_artikelBildValues: Values[];
    private location: Location;


    constructor(restService: RestService, router1: Router, location: Location)
    {
        this.restService = restService;
        this.router = router1;
        this.location = location;

    }

    ngOnInit(): void
    {


        this.getArtikelbild();

    }


    getArtikelbild()
    {
        var me = this;

        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }

    goBack(): void {
        this.location.back();
    }

}
