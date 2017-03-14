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
var RestService = (function () {
    function RestService(http) {
        this._languageSelected = "en";
        this.hosturl = "http://my-scott:8080/";
        this.productUrl = this.hosturl + 'xom-rest/products/'; // URL to web API
        this.classificationUrl = this.hosturl + 'xom-rest/productclassifications/'; // URL to web API
        this.productgroupUrl = this.hosturl + 'xom-rest/productgroups/'; // URL to web API
        this.assetUrl = this.hosturl + "xom-rest/assets/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.http = http;
    }
    Object.defineProperty(RestService.prototype, "languageSelected", {
        get: function () {
            return this._languageSelected;
        },
        set: function (value) {
            if (value == "de" || value == "en") {
                this._languageSelected = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RestService.prototype, "http", {
        get: function () {
            return this._http;
        },
        set: function (value) {
            this._http = value;
        },
        enumerable: true,
        configurable: true
    });
    RestService.prototype.getProductsFromProductgroup = function (Id) {
        var url = "" + this.productgroupUrl + Id + "/products" + ("?locale=" + this._languageSelected);
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RestService.prototype.getProductById = function (id) {
        var url = this.productUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.getProductWithValuesById = function (id) {
        var url = this.productUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.getProductGroupWithExtendedProductgroups = function (productgroupId) {
        var url = "" + this.productgroupUrl + productgroupId + ("?locale=" + this._languageSelected) + "&expand=productgroups";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RestService.prototype.getClassificationWithProductGroups = function () {
        var url = "" + this.classificationUrl + ("?locale=" + this._languageSelected) + "&expand=productgroups";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RestService.prototype.getClassificationByIdWithChildren = function (id) {
        var url = this.classificationUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    RestService.prototype.getShowcaseArtikelPreisValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this._languageSelected + "&expand=values&showvalue=showcase_artikellistenpreis&format=object");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; })
            .catch(this.handleError);
    };
    RestService.prototype.getShowcaseArtikelkurztextValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this._languageSelected + "&expand=values&showvalue=showcase_artikelkurztext&format=object");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; })
            .catch(this.handleError);
    };
    RestService.prototype.getShowcaseArtikelbildValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this._languageSelected + "&expand=values&showvalue=showcase_artikelbild&format=object");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().values != [] ? response.json().values : null; })
            .catch(this.handleError);
    };
    RestService.prototype.getShowcaseArtikelbeschreibungsValueByProductId = function (id) {
        var url = this.productUrl + "/" + id + "/" + ("?locale=" + this._languageSelected + "&expand=values&showvalue=showcase_artikelbeschreibung&format=object");
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().values != (new Array()) ? response.json().values : null; })
            .catch(this.handleError);
    };
    RestService.prototype.getShowcaseArtikelbildURLByValueId = function (values) {
        var urlArray = new Array();
        try {
            if (values && values[0]) {
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var item = values_1[_i];
                    var url = "" + this.assetUrl + item.value[0]['id'] + "/preview?mimeType=image%2Fpng";
                    urlArray.push(url);
                }
            }
        }
        catch (e) {
            this.handleError(e);
        }
        if (urlArray.length == 0) {
            urlArray.push("./../assets/images/noimage_595.png");
        }
        return urlArray;
    };
    RestService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
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
        __metadata('design:paramtypes', [http_1.Http])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=resttest.service.js.map