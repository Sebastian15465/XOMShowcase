/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../resttest.service";
import {Product} from "../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';


@Component({
    moduleId: module.id,
    selector: 'featured-products',
    templateUrl: 'featured-products.component.html'
})
export class FeaturedProductsComponent implements OnInit
{


    private restService: RestService;
    private router: Router;
    private products: Product[] = new Array<Product>();

    private route: ActivatedRoute;



    constructor(restService: RestService, router1: Router, route: ActivatedRoute)
    {
        this.restService = restService;
        this.router = router1;
        this.route = route;


    }

    ngOnInit(): void
    {

        this.route.params
        // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.restService.getProductsFromProductgroup(params['id']))

            .subscribe((products: Product[]) => this.products = products);


    }


    getProductValues(): void
    {
        for (let item of this.products)
        {
            this.restService.getProductWithValuesById(item.id).then((product : Product) => this.products.find(x => x.id == item.id).values = product.values);
        }
    }
}
