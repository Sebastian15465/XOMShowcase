/**
 * Created by sebastian.seelig on 02.03.2017.
 */
/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../resttest.service";
import {Product} from "../../../Product";
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {Values} from "../../../Values";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
    moduleId: module.id,
    selector: 'single-product',
    templateUrl: 'single-product.component.html'
})
export class SingleProductComponent implements OnInit
{
    @Input()
    public product: Product;

    private restService: RestService;
    private router: Router;
    private showcase_artikelListenpreisValues: Values[];
    private showcase_artikelKurztextValues: Values[];
    private showcase_artikelBildValues: Values[];
    private showcase_artikelRatingValues: Values[];
    private showcase_artikelAktionsPreisValues: Values[];
    private showcase_artikelIsNewValues: Values[];
    private showcase_artikelIsOnSaleValues: Values[];


    constructor(restService: RestService, router1: Router)
    {
        this.restService = restService;
        this.router = router1;


    }

    ngOnInit(): void
    {
        this.getInformations();

    }


    redirectToDetail(): void
    {
        this.router.navigate(["/detail", this.product.id]);
    }

    getInformations(): void
    {
        this.getArtikelListenpreis();
        this.getArtikelurztext();
        this.getArtikelbild();


    }

    getArtikelListenpreis(): void
    {
        var me = this;
        console.log(me.product.name)
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

    getArtikelurztext()
    {
        var me = this;
        console.log(me.product.name)
        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)
            .then(() => console.log(me.showcase_artikelKurztextValues))

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

}
