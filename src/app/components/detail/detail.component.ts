/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";
import {Product} from "../../Product";
import {Router, Params, ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Values} from "../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'detail-component',                   // selector => <detail-component></detail-component>
    templateUrl: 'detail.component.html'            // Pfad des Html-templates.
})
export class DetailComponent
{
    private restService: RestService;               // Property für den RestService
    private router: Router;                         // Property für den Router
    private product: Product;                       // Property für das Produkt.
    private route: ActivatedRoute;                  // Property für die ActivatedRoute.



    constructor(restService:RestService, router1: Router, route: ActivatedRoute)  // DI
    {
        this.restService = restService;             // zuweisen RestService
        this.router = router1;                      // zuweisen Router
        this.route = route;                         // zuweisen Route

    }

    ngOnInit(): void                // Oninit Anglular 2 lifecycle hook
    {

        // Wenn sich die Parameter der Url ändern, dann wird mit dem Parameter ID der Url eine Funktion vom RestService aufgerufen.
        // Diese Funtion gibt ein Produkt wieder. Wenn der RestService das Produkt geliefert hat, dann wird es im Property gespeichert.
        let params = this.route.params.switchMap((params: Params) => this.restService.getProductById(params['id']))
            .subscribe((product1: Product) => this.product = product1);

    }

}
