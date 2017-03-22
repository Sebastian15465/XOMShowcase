import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Product }           from './Product';

@Injectable()                                                                                   // Injectable decorator - Gibt an das dieser service in andere Komponenten injiziert werden kann.
export class RestSearchService {
    constructor(private http: Http) {}                                                          // Hier kurze Declaration und Initialisierung des Http-Properties.

    /**
     * Funktion zum suchen von Parametern in der Rest API/product. Gibt ein Observable von einem Produkt-Array wieder
     * @param term
     * @returns {Observable<Product[]>}
     */
    search(term: string): Observable<Product[]> {
        return this.http
            .get(`http://demo.xom.one/xom-rest/products/?locale=de&search=                     
                @SP:pattr674489917227=*${term}* OR @SP:pattr5200394238715=*${term}*`)           // @SP:pattr674489917227 ist der Artikelkurztext und @SP:pattr5200394238715 ist die Artikelbeschreibung.
            .map(response => response.json().data as Product[]);
    }
}