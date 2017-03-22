"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var RestService = (function () {
    function RestService(http, router) {
        var _this = this;
        this.hosturl = "http://demo.xom.one/"; //  Strings der Anfrage-Urls
        this.xomUrl = 'xom-rest'; //
        this.productUrl = this.hosturl + this.xomUrl + '/products/'; // URL to web API
        this.classificationUrl = this.hosturl + this.xomUrl + '/productclassifications/'; // URL to web API
        this.productgroupUrl = this.hosturl + this.xomUrl + '/productgroups/'; // URL to web API
        this.assetUrl = this.hosturl + this.xomUrl + "/assets/"; // URL to web API
        this.languageTerms = new Rx_1.BehaviorSubject("de"); // Vergleich Subject vs. BehaviorSubject:
        this.http = http;
        this.router = router;
        this.languageTerms.subscribe(function (value) { return _this.languageSelectedAfter = value; }); // Das Beispiel für ein subscribe an den languageTerms.
    }
    /**
     * Methode um einen String in den Observable Stream zu schieben.
     * @param term
     */
    RestService.prototype.changeLanguage = function (term) {
        if (term == "de" || term == "en") {
            this.languageTerms.next(term); // Hier wird der String in das Objekt geschoben.
            var link = ['/welcome'];
            this.router.navigate(link); // Zeige welcome.component an.
        }
    };
    RestService.prototype.getProductUrl = function () {
        return this.productUrl;
    };
    Object.defineProperty(RestService.prototype, "http", {
        /**
         * getter für das Http Property
         * @returns {Http}
         */
        get: function () {
            return this._http;
        },
        /**
         * setter für das Http Property
         * @param value
         */
        set: function (value) {
            this._http = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Hole Produkte von Produktgruppe mit ID. Liefert ein
     * @param Id
     * @returns {Promise<Product[]>}
     */
    RestService.prototype.getProductsFromProductgroup = function (Id) {
        var url = "" + this.productgroupUrl + Id + "/products" + ("?locale=" + this.languageSelectedAfter + "&recurse=true"); // Url für die Anfrage
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().data; }) // Wenn Antwort da ist, dann return die Antwort als Produkt-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole ein einzelnes Produkt mit der ID.
     * @param id
     * @returns {Promise<Product>}
     */
    RestService.prototype.getProductById = function (id) {
        var url = this.productUrl + "/" + id; // Url für die Anfrage.
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json(); }) // Wenn Antwort da ist, dann return die Antwort als Produkt.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole Produkt mit erweiterten Values von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Product>}
     */
    RestService.prototype.getProductWithValuesById = function (id) {
        var url = this.productUrl + "/" + id; // Url für die Anfrage.
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json(); }) // Wenn Antwort da ist, dann return die Antwort als Produkt.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole Produktgruppe mit erweiterten Produktgruppen von der
     * @param productgroupId
     * @returns {Promise<Productgroup>}
     */
    RestService.prototype.getProductGroupWithExtendedProductgroups = function (productgroupId) {
        var url = "" + this.productgroupUrl + productgroupId + ("?locale=" + this.languageSelectedAfter) + "&expand=productgroups"; // Url der Anfrage.
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json(); }) // Wenn Antwort da ist, dann return die Antwort als Produktgruppe.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole alle Klassifikationen mit erweiteterten Produktgruppen.
     * @returns {Promise<Classification[]>}
     */
    RestService.prototype.getClassificationWithProductGroups = function () {
        var url = "" + this.classificationUrl + ("?locale=" + this.languageSelectedAfter) + "&expand=productgroups"; // Anfrage URL.
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().data; }) // Wenn Antwort da ist, dann return die Antwort als Klassifikations-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole den showcase_artikellistenpreis von dem Produkt mit der ID
     * @param id
     * @returns {Promise<Values[]>}
     */
    RestService.prototype.getShowcaseArtikelPreisValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this.languageSelectedAfter // Anfrage URL
            + "&expand=values&showvalue=showcase_artikellistenpreis&format=object");
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; }) // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    RestService.prototype.getShowcaseArtikelkurztextValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this.languageSelectedAfter // Anfrage URL
            + "&expand=values&showvalue=showcase_artikelkurztext&format=object");
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; }) // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    RestService.prototype.getShowcaseArtikelbildValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this.languageSelectedAfter // Anfrage URL.
            + "&expand=values&showvalue=showcase_artikelbild&format=object");
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().values != [] ? response.json().values : null; }) // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Hole den showcase_artikelkurztext von dem Produkt mit der ID.
     * @param id
     * @returns {Promise<Values[]>}
     */
    RestService.prototype.getShowcaseArtikelbeschreibungsValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this.languageSelectedAfter // Anfrage URL.
            + "&expand=values&showvalue=showcase_artikelbeschreibung&format=object");
        return this.http.get(url) // http.get liefert ein Obervable. Dieses Observable wird in einen Promise
            .toPromise() // umgewandelt.
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; }) // Wenn Antwort da ist, dann return die Antwort als Values-Array.
            .catch(this.handleError); // Error handling.
    };
    /**
     * Funktion um die URLs der Artikelbilder aus einem Values-Objekt zu bekommen.
     * @param values
     * @returns {string[]}
     */
    RestService.prototype.getShowcaseArtikelbildURLByValue = function (values) {
        var urlArray = new Array(); // Neues String-Array
        try {
            if (values && values[0]) {
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var item = values_1[_i];
                    var url = "" + this.assetUrl + item.value[0]['id'] + "/preview?mimeType=image%2Fpng"; // zusammenbau der Rest API URL für das jeweilige Bild.
                    urlArray.push(url); // Dem neuen String-Array die URL hinzufügen.
                }
            }
        }
        catch (e) {
            this.handleError(e);
        }
        if (urlArray.length == 0) {
            urlArray.push("./../assets/images/noimage_595.png"); // Füge das "kein Bild gefunden"-Bild ein.
        }
        return urlArray;
    };
    /**
     * Error Handling
     * @param error
     * @returns {Promise<never>}
     */
    RestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    /**
     * Error handlicng
     * @param error
     * @returns {any}
     */
    RestService.prototype.handleErrorObservable = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map