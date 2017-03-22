/**
 * Created by sebastian.seelig on 22.02.2017.
 */

import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../Product";
import {RestService} from "../../../rest.service";
import {Router} from "@angular/router";
import {Values} from "../../../Values";

@Component({
    moduleId: module.id,
    selector: 'single-search-result',                       // selector => <single-search-result [product]="product1"></single-search-result>
    templateUrl: 'single-search-result.component.html'      // Pfad des Html-Templates
})


export class SingleSearchResultComponent implements OnInit
{
    @Input()
    public product: Product;                                        // Input product - wird von darüberliegenden Element and dieses weitergegeben s.o..

    private restService: RestService;                               // Property RestService
    private router: Router;                                         // Property Router
    private showcase_artikelListenpreisValues: Values[];            // Property showcase_artikelListenpreisValues
    private showcase_artikelKurztextValues: Values[];               // Property showcase_artikelKurztextValues
    private showcase_artikelBildValues: Values[];                   // Property showcase_artikelBildValues
    private showcase_artikelRatingValues: Values[];                 // Property showcase_artikelRatingValues
    private showcase_artikelAktionsPreisValues: Values[];           // Property showcase_artikelAktionsPreisValues
    private showcase_artikelBeschreibungValues: Values[];           // Property showcase_artikelBeschreibungValues
    private showcase_artikelIsNewValues: Values[];                  // Property showcase_artikelIsNewValues
    private showcase_artikelIsOnSaleValues: Values[];               // Property showcase_artikelIsOnSaleValues


    constructor(restService: RestService, router1: Router)              // DI
    {
        this.restService = restService;                 // Zuweisung RestService
        this.router = router1;                          // Zuweisung Router


    }


    ngOnInit(): void                            // OnInit Angular 2 lifecycle hook
    {
        this.getInformations();

    }

    /**
     * setze Url auf /deteil mit id= product.id.
     */
    redirectToDetail(): void
    {
        this.router.navigate(["/detail", this.product.id]);
    }

    /**
     * führe die einthaltenen Funktion aus, um die benötigten Information zu beschaffen.
     */
    getInformations(): void
    {
        this.getArtikelListenpreis();
        this.getArtikelurztext();
        this.getArtikelbild();
        this.getArtikelBeschreiung();

    }

    /**
     * hole den Preis vom RestService
     */
    getArtikelListenpreis(): void
    {
        var me = this;

        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelListenpreisValues = values)

    }

    /**
     * hole die Beschreibung vom RestService
     */
    getArtikelBeschreiung()
    {
        var me = this;

        this.restService.getShowcaseArtikelbeschreibungsValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBeschreibungValues = values)


    }

    /**
     * hole die Artikelbilden vom RestService
     */
    getArtikelbild()
    {
        var me = this;

        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    /**
     * hole den Namen des Produktes vom RestService
     */
    getArtikelurztext()
    {
        var me = this;

        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)


    }

    /*   TODO  */
    getArtikelrating()
    {
        var me = this;

        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelRatingValues = values)

    }


    /*   TODO  */
    getArtikelAktionspreis()
    {
        var me = this;

        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelAktionsPreisValues = values)

    }

}