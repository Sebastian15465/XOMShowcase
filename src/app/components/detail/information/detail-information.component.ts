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


@Component({                                                                        // Component decorator
    moduleId: module.id,
    selector: 'detailInformation-component',                                        // Selector der Komponente => <detailInformation-component [product]= product1></detailInformation-component>
    templateUrl: 'detail-information.component.html'                                // Pfad zum HTML-Template.
})
export class DetailInformationComponent
{
    @Input()                                                        // Input decorator
    public product: Product;                                        // Input Property vom Typ Product

    private restService: RestService;                                   // Property für den RestService.
    private router: Router;                                             // Property für den Router.
    private route: ActivatedRoute;                                      // Property für die aktuelle URL.
    private location: Location;                                         // Für den back-Button.
    private showcase_artikelListenpreisValues: Values[];                // Property für die Artikellistenpreis Values.
    private showcase_artikelKurztextValues: Values[];                   // Property für die Artikelkurztext Values.
    private showcase_artikelBildValues: Values[];                       // Property für die Artikelbild Values.
    private showcase_artikelRatingValues: Values[];                     // Property für die ArtikelRating Values.
    private showcase_artikelAktionsPreisValues: Values[];               // Property für die ArtikellAktionspreis Values.
    private showcase_artikelBeschreibungValues: Values[];               // Property für die Artikelbeschreibungs Values.
    private showcase_artikelIsNewValues: Values[];                      // Property für die ArtikellisNew Values.
    private showcase_artikelIsOnSaleValues: Values[];                   // Property für die ArtikelIsOnSale Values.

    constructor(restService: RestService, router1: Router, route: ActivatedRoute, location: Location) // DI der benötigten Services und Funktionalitäten.
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


    /**
     * Auswahl der Funktionen die angestoßen werden sollen.
     */
    getInformations(): void
    {
        this.getArtikelListenpreis();
        this.getArtikelkurztext();
        this.getArtikelbild();
        this.getArtikelBeschreibung();


    }

    /**
     * Hole Artikellistenpreis Values vom RestService
     */
    getArtikelListenpreis(): void
    {
        var me = this;
        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelListenpreisValues = values)

    }

    /**
     * Hole Artikelbild Values vom RestService
     */
    getArtikelbild()
    {
        var me = this;

        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    /**
     * Hole Artikelkurztext Values von RestService
     */
    getArtikelkurztext()
    {
        var me = this;

        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)


    }

    /**
     * Hole Artikelbeschreibung von RestService
     */
    getArtikelBeschreibung()
    {
        var me = this;

        this.restService.getShowcaseArtikelbeschreibungsValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBeschreibungValues = values)


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


    /**
     * Browser zurück Funktionalität.
     */
    goBack(): void
    {
        this.location.back();
    }


}
