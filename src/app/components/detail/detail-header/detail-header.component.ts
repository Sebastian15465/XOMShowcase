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
    selector: 'detail-header-component',
    templateUrl: 'detail-header.component.html'
})
export class DetailHeaderComponent
{
    @Input()                                                    // Input decorator - gibt an, dass das Product ein Input ist.
    public product: Product;                                    // Input

    private restService: RestService;                           // RestService
    private showcase_artikelKurztextValues: Values[];           // Property um auf den Titel zuzugreifen.


    constructor(restService: RestService,)                  // DI
    {
        this.restService = restService;                 // zuweisung des RestServices.

    }

    ngOnInit(): void
    {

        this.getArtikelkurztext();              // führe Funktion getArtikelkurztext() aus.

    }


    /**
     * benutzt die Funktion vom RestService um sich die ArtikelKurztext-Values zu holen und
     * weist sie dem Property zu.
     */
    getArtikelkurztext() : void
    {
        var me = this;

        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)


    }

}
