import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product }           from './Product';
@Injectable()
export class RestSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Product[]> {
        return this.http
            .get(`http://my-scott:8080/xom-rest/products/?locale=de&search=content%3A*${term}*`)
            .map(response => response.json().data as Product[]);
    }
}