import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product }           from './Product';
import {RestService} from "./rest.service";

@Injectable()                                                                                   // Injectable decorator - Gibt an das dieser service in andere Komponenten injiziert werden kann.
export class RestSearchService {

    private productUrlFromRestService : string;                                                                       // kommt von restService

    constructor(private http: Http, private restService : RestService) // Hier kurze Declaration und Initialisierung des Http-Properties.
    {
        this.productUrlFromRestService = restService.getProductUrl();
    }

    /**
     * Funktion zum suchen von Parametern in der Rest API/product. Gibt ein Observable von einem Produkt-Array wieder
     * @param term
     * @returns {Observable<Product[]>}
     */
    search(term: string): Observable<Product[]> {
        return this.http
            .get(`${this.productUrlFromRestService}?locale=de&search=                     
                @SP:pattr674489917227=*${term}* OR @SP:pattr5200394238715=*${term}*`)           // @SP:pattr674489917227 ist der Artikelkurztext und @SP:pattr5200394238715 ist die Artikelbeschreibung.
            .map(response => response.json().data as Product[]);
    }
}