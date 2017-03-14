/**
 * Created by sebastian.seelig on 22.02.2017.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {RestSearchService} from "../../rest-search.service";
import {Product} from "../../Product";
import {Observable, Subject} from "rxjs/Rx";

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: 'search-results.component.html'
})


export class SearchResultsComponent implements OnInit
{
    private products: Observable<Product[]>;
    private searchTerms = new Subject<string>();
    constructor(
        private restSearchService: RestSearchService,
        private router: Router) {}
    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }
    ngOnInit(): void {
        this.products = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.restSearchService.search(term)
                // or the observable of empty products if there was no search term
                : Observable.of<Product[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Product[]>([]);
            });
    }
    gotoDetail(product: Product): void {
        let link = ['/detail', product.id];
        this.router.navigate(link);
    }


}