import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule}   from '@angular/http';

import {AppComponent}  from './app.component';
import {RestService} from "./resttest.service";
/*
 import {InMemoryDataService} from "./in-memory-data.service";
 */
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

import {SlideTopComponent} from "./components/slide-top/slide-top.component";
import {TopBarComponent} from "./components/top-bar/top-bar";
import {HeaderComponent} from "./components/header/header.component";
import {FeaturedProductsComponent} from "./components/featured-products/featured-products.component";
import {CategoriesLeftNavComponent} from "./components/categories-left-nav/categories-left-nav.component";
import {BrandsNavComponent} from "./components/brands-nav/brands-nav.component";
import {FooterPanelComponent} from "./components/footer-panel/footer-panel.component";
import {PopupNewsletterComponent} from "./components/popup-newsletter/popup-newsletter.component";
import {SubGroupComponent} from "./components/categories-left-nav/sub-group/sub-group.component";
import {AppRoutingModule} from "./app-routing.module";
import {WelcomeComponent} from "./components/welcome.component/welcome.component";
import {DetailComponent} from "./components/detail/detail.component";
import {SingleProductComponent} from "./components/featured-products/single-product/single-product.component";
import {PictureComponent} from "./components/featured-products/single-product/Picture/picture.component";
import {DetailInformationComponent} from "./components/detail/information/detail-information.component";
import {DetailPicturesComponent} from "./components/detail/pictures/detail-pictures.component";
import {DetailSinglePictureComponent} from "./components/detail/pictures/detail-single-picture/detail-single-picture.component";
import {ModalComponent} from "./components/detail/pictures/detail-single-picture/modal/modal.component";
import {DetailHeaderComponent} from "./components/detail/detail-header/detail-header.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        AppRoutingModule
        /*InMemoryWebApiModule.forRoot(InMemoryDataService),*/
    ],
    declarations: [
        AppComponent,
        SlideTopComponent,
        TopBarComponent,
        HeaderComponent,
        FeaturedProductsComponent,
        CategoriesLeftNavComponent,
        BrandsNavComponent,
        FooterPanelComponent,
        PopupNewsletterComponent,
        SubGroupComponent,
        WelcomeComponent,
        DetailComponent,
        SingleProductComponent,
        PictureComponent,
        DetailInformationComponent,
        DetailPicturesComponent,
        DetailSinglePictureComponent,
        ModalComponent,
        DetailHeaderComponent


    ],
    bootstrap: [AppComponent],
    providers: [RestService]
})
export class AppModule
{
}
