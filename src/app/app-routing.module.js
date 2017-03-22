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
var router_1 = require('@angular/router');
var featured_products_component_1 = require('./components/featured-products/featured-products.component');
var welcome_component_1 = require('./components/welcome-component/welcome.component');
var detail_component_1 = require('./components/detail/detail.component');
var search_results_component_1 = require("./components/search-results/search-results.component");
var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    // <router-outlet></router-outlet> befindet.
    { path: 'classification/:id', component: featured_products_component_1.FeaturedProductsComponent },
    // das <router-outlet></router-outlet> befindet.
    { path: 'productgroup/:id', component: featured_products_component_1.FeaturedProductsComponent },
    // das <router-outlet></router-outlet> befindet.
    { path: 'detail/:id', component: detail_component_1.DetailComponent },
    // das <router-outlet></router-outlet> befindet.
    { path: 'search', component: search_results_component_1.SearchResultsComponent } // Wenn der Pfad detail ist, dann lade den DetailComponent an der stelle an der sich
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map