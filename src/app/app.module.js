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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var resttest_service_1 = require("./resttest.service");
var slide_top_component_1 = require("./components/slide-top/slide-top.component");
var top_bar_1 = require("./components/top-bar/top-bar");
var header_component_1 = require("./components/header/header.component");
var featured_products_component_1 = require("./components/featured-products/featured-products.component");
var categories_left_nav_component_1 = require("./components/categories-left-nav/categories-left-nav.component");
var brands_nav_component_1 = require("./components/brands-nav/brands-nav.component");
var footer_panel_component_1 = require("./components/footer-panel/footer-panel.component");
var popup_newsletter_component_1 = require("./components/popup-newsletter/popup-newsletter.component");
var sub_group_component_1 = require("./components/categories-left-nav/sub-group/sub-group.component");
var app_routing_module_1 = require("./app-routing.module");
var welcome_component_1 = require("./components/welcome.component/welcome.component");
var detail_component_1 = require("./components/detail/detail.component");
var single_product_component_1 = require("./components/featured-products/single-product/single-product.component");
var picture_component_1 = require("./components/featured-products/single-product/Picture/picture.component");
var detail_information_component_1 = require("./components/detail/information/detail-information.component");
var detail_pictures_component_1 = require("./components/detail/pictures/detail-pictures.component");
var detail_single_picture_component_1 = require("./components/detail/pictures/detail-single-picture/detail-single-picture.component");
var modal_component_1 = require("./components/detail/pictures/detail-single-picture/modal/modal.component");
var detail_header_component_1 = require("./components/detail/detail-header/detail-header.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                slide_top_component_1.SlideTopComponent,
                top_bar_1.TopBarComponent,
                header_component_1.HeaderComponent,
                featured_products_component_1.FeaturedProductsComponent,
                categories_left_nav_component_1.CategoriesLeftNavComponent,
                brands_nav_component_1.BrandsNavComponent,
                footer_panel_component_1.FooterPanelComponent,
                popup_newsletter_component_1.PopupNewsletterComponent,
                sub_group_component_1.SubGroupComponent,
                welcome_component_1.WelcomeComponent,
                detail_component_1.DetailComponent,
                single_product_component_1.SingleProductComponent,
                picture_component_1.PictureComponent,
                detail_information_component_1.DetailInformationComponent,
                detail_pictures_component_1.DetailPicturesComponent,
                detail_single_picture_component_1.DetailSinglePictureComponent,
                modal_component_1.ModalComponent,
                detail_header_component_1.DetailHeaderComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [resttest_service_1.RestService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map