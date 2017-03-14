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
    selector: 'detail-header-component',
    templateUrl: 'detail-header.component.html'
})
export class DetailHeaderComponent
{
    @Input()
    public product: Product;

    private restService: RestService;
    private showcase_artikelKurztextValues: Values[];


    constructor(restService: RestService,)
    {
        this.restService = restService;

    }

    ngOnInit(): void
    {

        this.getArtikelkurztext();

    }


    getArtikelkurztext()
    {
        var me = this;

        this.restService.getShowcaseArtikelkurztextValueByProductId(me.product.id)
            .then((values: Values[]) => me.showcase_artikelKurztextValues = values)


    }

}
