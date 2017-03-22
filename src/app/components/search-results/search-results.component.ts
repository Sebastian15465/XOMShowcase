/**
 * Created by sebastian.seelig on 22.02.2017.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {RestSearchService} from "../../rest-search.service";
import {Product} from "../../Product";
import {Observable, Subject} from "rxjs/Rx";
import {RestService} from "../../rest.service";
import {stringLanguageConstants} from "../../stringLanguageConstants";

@Component({
    moduleId: module.id,
    selector: 'search-results',                         // selector => <search-results></search-results>
    templateUrl: 'search-results.component.html'        // Pfad zum Html-Template
})


export class SearchResultsComponent implements OnInit
{
    private products: Observable<Product[]>;            // Property für die Produkte
    private searchTerms = new Subject<string>();        // Property für die eingegebenen Suchstrings
    private restSearchService: RestSearchService;       // Property für den RestSearchService
    private restService : RestService;                  // Property für den RestService
    private router: Router;                             // Property für den Router
    private languageSelected :string;                   // Property für die aktuelle Sprache
    private strings : stringLanguageConstants;          // Property für die Sprachstrings

    constructor(restsearchservice: RestSearchService, router: Router, restservice : RestService, strings : stringLanguageConstants)  // DI
    {
        this.restSearchService = restsearchservice;             // Zuweisung RestSearchService
        this.router = router;                                   // Zuweisung Router
        this.restService = restservice;                         // Zuweisung RestService
        this.strings = strings;                                 // Zuweisung languageStrings

        this.restService.languageTerms.subscribe((value : string) => this.languageSelected = value);        // Subscription an den langeuageTerms, um immer die aktuelle Sprache lokal zu haben.

    }

    /**
     * Schiebt einen string in die SearchTerms
     * @param term
     */
    search(term: string): void {
        this.searchTerms.next(term);
    }


    ngOnInit(): void {                                  // OnInit Angluar 2 lifecycle hook
        this.products = this.searchTerms
            .debounceTime(300)                      // warte 300ms nach jeder Eingabe
            .distinctUntilChanged()                 // ignoriere die Eingabe wenn es die Gleiche wie vorher ist.
            .switchMap(term => term                 // wechsel zu einem neuen Observable wenn sich die Eingabe ändert.
                // returniere die Observable vom RestSearchService
                ? this.restSearchService.search(term)
                // oder returniere ein Observable mit einem leeren Produkt.
                : Observable.of<Product[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Product[]>([]);
            });
    }

    /**
     * setze Url auf /detail?id=product.id
     * @param product
     */
    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }


}