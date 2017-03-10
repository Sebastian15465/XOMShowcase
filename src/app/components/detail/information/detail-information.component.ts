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
    selector: 'detailInformation-component',
    templateUrl: 'detail-information.component.html'
})
export class DetailInformationComponent
{
    @Input()
    public product: Product;

    private restService: RestService;
    private router: Router;
    private route: ActivatedRoute;
    private location: Location;
    private showcase_artikelListenpreisValues: Values[];
    private showcase_artikelKurztextValues: Values[];
    private showcase_artikelBildValues: Values[];
    private showcase_artikelRatingValues: Values[];
    private showcase_artikelAktionsPreisValues: Values[];
    private showcase_artikelBeschreibungValues: Values[];
    private showcase_artikelIsNewValues: Values[];
    private showcase_artikelIsOnSaleValues: Values[];

    constructor(restService: RestService, router1: Router, route: ActivatedRoute, location: Location)
    {
        this.restService = restService;
        this.router = router1;
        this.route = route;
        this.location = location;
    }

    ngOnInit(): void
    {

        this.getInformations();

    }


    getInformations(): void
    {
        this.getArtikelListenpreis();
        this.getArtikelkurztext();
        this.getArtikelbild();
        this.getArtikelBeschreiung();


    }

    getArtikelListenpreis(): void
    {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelListenpreisValues = values)
            .then(function ()
            {
                console.log("Bin da!");
                console.log(me.product.id);
                me.showcase_artikelListenpreisValues.forEach(x => console.log(x.value['value']))

            })
    }

    getArtikelbild()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    getArtikelkurztext()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)
            .then(() => console.log(me.showcase_artikelKurztextValues))

    }

    getArtikelBeschreiung()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelbeschreibungsValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBeschreibungValues = values)


    }

    /*   TODO  */
    getArtikelrating()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelRatingValues = values)

    }


    /*   TODO  */
    getArtikelAktionspreis()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelAktionsPreisValues = values)

    }


    goBack(): void
    {
        this.location.back();
    }


}
