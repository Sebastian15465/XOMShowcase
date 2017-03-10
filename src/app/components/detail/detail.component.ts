/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../resttest.service";
import {Product} from "../../Product";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Values} from "../../Values";
import {Observable} from "rxjs";
import {Response} from "@angular/http";


@Component({
    moduleId: module.id,
    selector: 'detail-component',
    templateUrl: 'detail.component.html'
})
export class DetailComponent
{
    private restService: RestService;
    private router: Router;
    private product: Product;
    private route: ActivatedRoute;
    private location: Location;


    constructor(restService:RestService, router1: Router, route: ActivatedRoute,location: Location)
    {
        this.restService = restService;
        this.router = router1;
        this.route = route;
        this.location = location;
    }

    ngOnInit(): void
    {
        /*this.getFilteredProducts();*/
        let params = this.route.params.switchMap((params: Params) => this.restService.getProductById(params['id']))
            .subscribe((product1: Product) => this.product = product1);



    }





}
