/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";
import {Product} from "../../Product";
import {Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import {Observable} from 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/from';
import {stringLanguageConstants} from "../../stringLanguageConstants";


@Component({
    moduleId: module.id,
    selector: 'featured-products',                                  // selector => <featured-products></featured-products>
    templateUrl: 'featured-products.component.html'                 // Pfad des Html-Templates.
})
export class FeaturedProductsComponent implements OnInit
{


    private restService: RestService;                           // Property des RestServices
    private router: Router;                                     // Property des Routers
    private products: Product[] = new Array<Product>();         // Property der Produkte
    private strings: stringLanguageConstants;                   // Property der Sprach-Strings
    private route: ActivatedRoute;                              // Property um die Url zu überwachen
    private languageSelected : string;                          // Property um die eingestellte Sprache lokal zu Speichern.


    constructor(restService: RestService, router1: Router, route: ActivatedRoute, stringConstants: stringLanguageConstants)         // DI
    {
        this.restService = restService;                                                                 // Zuweisung RestService
        this.router = router1;                                                                          // Zuweisung Router
        this.route = route;                                                                             // Zuweisung Route
        this.strings = stringConstants;                                                                 // Zuweisung languageStrings
        this.restService.languageTerms.subscribe((value:string) => this.languageSelected = value);      // Subscription an den languageTerms des RestServices.
    }

    ngOnInit(): void
    {

        this.route.params                                                                                   // Subscription and den Parametern der Url. D.h. wenn sich die Url verändert, dann wird
        // (+) converts string 'id' to a number                                                             // die Funktion vom RestService neu angestoßen und die Produkte aktualisiert.
            .switchMap((params: Params) => this.restService.getProductsFromProductgroup(params['id']))

            .subscribe((products: Product[]) => this.products = products);


    }

}
