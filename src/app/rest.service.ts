import {Injectable, OnInit} from '@angular/core';
import {Http, Response, Headers, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Product} from './Product'
import {Classification} from "./Classification";
import {Productgroup} from "./Productgroup";
import {Values} from "./Values";
import {Subject, BehaviorSubject} from "rxjs/Rx";
import {Router} from "@angular/router";


@Injectable()                           // Injectable decorator - Gibt an das dieser Service in andere Komponenten eingefügt werden kann.
export class RestService
{

    private hosturl = "http://demo.xom.one/";                                                              //  Strings der Anfrage-Urls
    private xomUrl = 'xom-rest';                                                                            //
    private productUrl = this.hosturl + this.xomUrl + '/products/';                                         // URL to web API
    private classificationUrl = this.hosturl + this.xomUrl + '/productclassifications/';                    // URL to web API
    private productgroupUrl = this.hosturl + this.xomUrl + '/productgroups/';                               // URL to web API
    private assetUrl = this.hosturl + this.xomUrl + "/assets/";                                             // URL to web API
    private _http: Http;                                                        // Http Objekt - Benötigt um die HTTP-Anfragen an die REST-API zu stellen.
    public languageTerms = new BehaviorSubject<string>("de");                   // Vergleich Subject vs. BehaviorSubject:
                                                                                // https://hassantariqblog.wordpress.com/2016/12/03/angular2-difference-between-a-behavior-subject-and-an-observable/
                                                                                // Hier wird ein Objekt initialisiert welches mit Strings gefüllt werden kann. Dieses Objekt kann man aus Komponenten
                                                                                // überwachen. Wenn ein neuer String in das Objekt durch die changeLanguage Methode geschoben wird, dann bekommen die
                                                                                // überwachenden Komponenten den Event und den Parameter mit. Ein Beispiel für das Überwachen(subscriben) befindet sich
                                                                                // in dem Konstruktor dieses Services.
    private router: Router;
    private languageSelectedAfter: string;

    constructor(http: Http, router: Router)                                 // Injection der Http und Router Module
    {
        this.http = http;
        this.router = router;
        this.languageTerms.subscribe((value: string) => this.languageSelectedAfter = value);         // Das Beispiel für ein subscribe an den languageTerms.
    }

    /**
     * Methode um einen String in den Observable Stream zu schieben.
     * @param term
     */
    public changeLanguage(term: string): void
    {
        if (term == "de" || term == "en")                               // Nur wenn "de" oder "en"
        {
            this.languageTerms.next(term);                              // Hier wird der String in das Objekt geschoben.
            let link = ['/welcome'];
            this.router.navigate(link);                                 // Zeige welcome.component an.
        }
    }


    /**
     * getter für das Http Property
     * @returns {Http}
     */
    get http(): Http
    {
        return this._http;
    }

    /**
     * setter für das Http Property
     * @param value
     */
    set http(value: Http)
    {
        this._http = value;
    }


    /**
     * Hole Produkte von Produktgruppe mit ID. Liefert ein
     * @param Id
     * @returns {Promise<Product[]>}
     */
    getProductsFromProductgroup(Id: string): Promise<Product[]>
    {                                                                                                           // Promise(Versprechen) von einem Produkt-Array.
        const url = `${this.productgroupUrl}${Id}${"/products"}${"?locale=" + this.languageSelectedAfter}`;     // Url für die Anfrage

        return this.http.get(url)                                                                               // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                        // umgewandelt.
            .then(response => response.json().data as Product[])                                                // Wenn Antwort da ist, dann return die Antwort als Produkt-Array.
            .catch(this.handleError);                                                                           // Error handling.
    }

    /**
     * Hole ein einzelnes Produkt mit der ID.
     * @param id
     * @returns {Promise<Product>}
     */
    getProductById(id: string): Promise<Product>
    {
        const url = `${this.productUrl}/${id}`;                                                 // Url für die Anfrage.
        return this.http.get(url)                                                               // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                        // umgewandelt.
            .then(response => response.json() as Product)                                       // Wenn Antwort da ist, dann return die Antwort als Produkt.
            .catch(this.handleError);                                                           // Error handling.
    }

    /**
     * Hole Produkt mit erweiterten Values von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Product>}
     */
    getProductWithValuesById(id: string): Promise<Product>
    {
        const url = `${this.productUrl}/${id}`;                                         // Url für die Anfrage.
        return this.http.get(url)                                                       // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                // umgewandelt.
            .then(response => response.json() as Product)                               // Wenn Antwort da ist, dann return die Antwort als Produkt.
            .catch(this.handleError);                                                   // Error handling.
    }


    /**
     * Hole Produktgruppe mit erweiterten Produktgruppen von der
     * @param productgroupId
     * @returns {Promise<Productgroup>}
     */
    getProductGroupWithExtendedProductgroups(productgroupId: string): Promise<Productgroup>
    {                                                                                                                                   // Produktgruppen mit ID.
        const url = `${this.productgroupUrl}${productgroupId}${"?locale=" + this.languageSelectedAfter}${"&expand=productgroups"}`;     // Url der Anfrage.
        return this.http.get(url)                                                                                                       // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                                                // umgewandelt.
            .then(response => response.json() as Productgroup)                                                                          // Wenn Antwort da ist, dann return die Antwort als Produktgruppe.
            .catch(this.handleError);                                                                                                   // Error handling.

    }

    /**
     * Hole alle Klassifikationen mit erweiteterten Produktgruppen.
     * @returns {Promise<Classification[]>}
     */
    getClassificationWithProductGroups(): Promise<Classification[]>
    {
        const url = `${this.classificationUrl}${"?locale=" + this.languageSelectedAfter}${"&expand=productgroups"}`;    // Anfrage URL.
        return this.http.get(url)                                                                                       // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                                // umgewandelt.
            .then(response => response.json().data as Classification[])                                                 // Wenn Antwort da ist, dann return die Antwort als Klassifikations-Array.
            .catch(this.handleError);                                                                                   // Error handling.
    }

    /**
     * Hole den showcase_artikellistenpreis von dem Produkt mit der ID
     * @param id
     * @returns {Promise<Values[]>}
     */
    getShowcaseArtikelPreisValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelectedAfter                                         // Anfrage URL
        + "&expand=values&showvalue=showcase_artikellistenpreis&format=object"}`;

        return this.http.get(url)                                                                                              // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                                       // umgewandelt.
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)     // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError);                                                                                          // Error handling.
    }

    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    getShowcaseArtikelkurztextValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelectedAfter                                     // Anfrage URL
        + "&expand=values&showvalue=showcase_artikelkurztext&format=object"}`;

        return this.http.get(url)                                                                                           // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                                    // umgewandelt.
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)  // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError);                                                                                       // Error handling.
    }

    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    getShowcaseArtikelbildValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelectedAfter                     // Anfrage URL.
        + "&expand=values&showvalue=showcase_artikelbild&format=object"}`;

        return this.http.get(url)                                                                           // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                    // umgewandelt.
            .then(response => response.json().values != [] ? response.json().values as Values[] : null)     // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError);                                                                       // Error handling.
    }

    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    getShowcaseArtikelbeschreibungsValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelectedAfter                                     // Anfrage URL.
        + "&expand=values&showvalue=showcase_artikelbeschreibung&format=object"}`;

        return this.http.get(url)                                                                                           // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise()                                                                                                    // umgewandelt.
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)  // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError);                                                                                       // Error handling.
    }


    /**
     * Funktion um die URLs der Artikelbilder aus einem Values-Objekt zu bekommen.
     * @param values
     * @returns {string[]}
     */
    getShowcaseArtikelbildURLByValue(values: Values[]): string[]
    {

        let urlArray = new Array<string>();                                                                         // Neues String-Array
        try
        {
            if (values && values[0])                                                                                //
            {
                for (let item of values)                                                                            // Für jedes Value-Objekt in dem Value-Array
                {
                    const url = `${this.assetUrl}${item.value[0]['id']}${"/preview?mimeType=image%2Fpng"}`;         // zusammenbau der Rest API URL für das jeweilige Bild.
                    urlArray.push(url);                                                                             // Dem neuen String-Array die URL hinzufügen.
                }
            }
        }
        catch (e)
        {
            this.handleError(e);
        }
        if (urlArray.length == 0)                                                                                   // Wenn keine URL gefunden wurden.
        {
            urlArray.push("./../assets/images/noimage_595.png")                                                     // Füge das "kein Bild gefunden"-Bild ein.
        }
        return urlArray;
    }

    /**
     * Error Handling
     * @param error
     * @returns {Promise<never>}
     */
    private handleError(error: any): Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /**
     * Error handlicng
     * @param error
     * @returns {any}
     */
    private handleErrorObservable(error: Response | any)
    {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response)
        {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else
        {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}