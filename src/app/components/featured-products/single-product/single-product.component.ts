
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../rest.service";
import {Product} from "../../../Product";
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {Values} from "../../../Values";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
    moduleId: module.id,
    selector: 'single-product',                                 // selector => <single-product [product]="product1"></single-product>
    templateUrl: 'single-product.component.html'                // Pfad zum Html-Template
})
export class SingleProductComponent implements OnInit
{
    @Input()
    public product: Product;                                    // Input product

    private restService: RestService;                           // Property für den restService
    private router: Router;                                     // Property für den Router
    private showcase_artikelListenpreisValues: Values[];        // Property für die showcase_artikelListenpreisValues
    private showcase_artikelKurztextValues: Values[];           // Property für die showcase_artikelKurztextValues
    private showcase_artikelBildValues: Values[];               // Property für die showcase_artikelBildValues
    private showcase_artikelRatingValues: Values[];             // Property für die showcase_artikelRatingValues
    private showcase_artikelAktionsPreisValues: Values[];       // Property für die showcase_artikelAktionsPreisValues
    private showcase_artikelIsNewValues: Values[];              // Property für die showcase_artikelIsNewValues  TODO
    private showcase_artikelIsOnSaleValues: Values[];           // Property für die showcase_artikelIsOnSaleValues TODO


    constructor(restService: RestService, router1: Router)          // DI
    {
        this.restService = restService;                 // Zuweisung RestService
        this.router = router1;                          // Zuweisung Router


    }

    ngOnInit(): void
    {
        this.getInformations();

    }

    /**
     * Setze Url auf /detail mit id=product.id
     */
    redirectToDetail(): void
    {
        this.router.navigate(["/detail", this.product.id]);
    }

    /**
     * führe Funktionen aus.
     */
    getInformations(): void
    {
        this.getArtikelListenpreis();
        this.getArtikelurztext();
        this.getArtikelbild();


    }

    /**
     * Hole Artikellistenpreis vom RestService
     */
    getArtikelListenpreis(): void
    {
        var me = this;

        this.restService.getShowcaseArtikelPreisValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelListenpreisValues = values)

    }

    /**
     * Hole Artikelbilder vom restService
     */
    getArtikelbild()
    {
        var me = this;

        this.restService.getShowcaseArtikelbildValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelBildValues = values)

    }

    /**
     * Hole ArtikelKurztext vom restService
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
