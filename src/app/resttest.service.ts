import {Injectable}              from '@angular/core';
import {Http, Response, Headers, ResponseContentType}          from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import {Product} from './Product'
import {Classification} from "./Classification";
import {Productgroup} from "./Productgroup";
import {Values} from "./Values";
import {CustomProductClass} from "./CustomProductClass";
import {letProto} from "rxjs/operator/let";
import {tryCatch} from "rxjs/util/tryCatch";

@Injectable()
export class RestService
{
    private languageSelected = "de";
    private hosturl = "http://my-scott:8080/";
    private productUrl = this.hosturl + 'xom-rest/products/';// URL to web API
    private classificationUrl = this.hosturl + 'xom-rest/productclassifications/';// URL to web API
    private productgroupUrl = this.hosturl + 'xom-rest/productgroups/';// URL to web API
    private assetUrl = this.hosturl + "xom-rest/assets/"
    private headers = new Headers({'Content-Type': 'application/json'});
    private _http: Http;

    constructor(http: Http)
    {
        this.http = http;
    }


    get http(): Http
    {
        return this._http;
    }

    set http(value: Http)
    {
        this._http = value;
    }


    getProductsFromProductgroup(Id: string): Promise<Product[]>
    {
        const url = `${this.productgroupUrl}${Id}${"/products"}${"?locale=" + this.languageSelected}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Product[])
            .catch(this.handleError);
    }

    getProductById(id: string): Promise<Product>
    {
        const url = `${this.productUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }

    getProductWithValuesById(id: string): Promise<Product>
    {
        const url = `${this.productUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Product)
            .catch(this.handleError);
    }


    getProductGroupWithExtendedProductgroups(productgroupId: string): Promise<Productgroup>
    {
        const url = `${this.productgroupUrl}${productgroupId}${"?locale=" + this.languageSelected}${"&expand=productgroups"}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Productgroup)
            .catch(this.handleError);

    }

    getClassificationWithProductGroups(): Promise<Classification[]>
    {
        const url = `${this.classificationUrl}${"?locale=" + this.languageSelected}${"&expand=productgroups"}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Classification[])
            .catch(this.handleError);
    }

    getClassificationByIdWithChildren(id: string): Promise<Classification>
    {
        const url = `${this.classificationUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Classification[])
            .catch(this.handleError);
    }

    getShowcaseArtikelPreisValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelected + "&expand=values&showvalue=showcase_artikellistenpreis&format=object"}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)
            .catch(this.handleError);
    }

    getShowcaseArtikelkurztextValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelected + "&expand=values&showvalue=showcase_artikelkurztext&format=object"}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)
            .catch(this.handleError);
    }


    getShowcaseArtikelbildValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelected + "&expand=values&showvalue=showcase_artikelbild&format=object"}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().values != [] ? response.json().values as Values[] : null)
            .catch(this.handleError);
    }

    getShowcaseArtikelbeschreibungsValueByProductId(id: string): Promise<Values[]>
    {
        const url = `${this.productUrl}/${id}/${"?locale=" + this.languageSelected + "&expand=values&showvalue=showcase_artikelbeschreibung&format=object"}`;

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().values != (new Array<Values>()) ? response.json().values as Values[] : null)
            .catch(this.handleError);
    }


    getShowcaseArtikelbildURLByValueId(values: Values[]): string[]
    {

        let urlArray = new Array<string>();
        try
        {
            if (values && values[0])
            {
                for (let item of values)
                {
                    const url = `${this.assetUrl}${item.value[0]['id']}${"/preview?mimeType=image%2Fpng"}`;
                    urlArray.push(url);
                }
            }
        }
        catch (e)
        {
            this.handleError(e);
        }
        if (urlArray.length == 0)
        {
            urlArray.push("./../assets/images/noimage_595.png")
        }
        return urlArray;
    }


    private handleError(error: any): Promise<any>
    {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

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

