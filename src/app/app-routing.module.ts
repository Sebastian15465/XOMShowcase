import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturedProductsComponent}  from './components/featured-products/featured-products.component';
import {WelcomeComponent}  from './components/welcome-component/welcome.component';
import {DetailComponent}  from './components/detail/detail.component';
import {SearchResultsComponent} from "./components/search-results/search-results.component";

const routes: Routes = [                                                    // Definition der Routen der gesamten App.

    {path: '', redirectTo: '/welcome', pathMatch: 'full'},                  // Wenn kein Pfad in der Adressleiste des Browsers, dann gehe zum welcome Pfad.

    {path: 'welcome', component: WelcomeComponent},                         // Wenn der Pfad welcome ist, dann lade den WelcomeComponent an der stelle an der sich das
                                                                            // <router-outlet></router-outlet> befindet.

    {path: 'classification/:id', component: FeaturedProductsComponent},     // Wenn der Pfad classification ist, dann lade den FeaturedProductsComponent an der stelle an der sich
                                                                            // das <router-outlet></router-outlet> befindet.

    {path: 'productgroup/:id', component: FeaturedProductsComponent},       // Wenn der Pfad productgroup ist, dann lade den FeaturedProductsComponent an der stelle an der sich
                                                                            // das <router-outlet></router-outlet> befindet.

    {path: 'detail/:id', component: DetailComponent},                       // Wenn der Pfad detail ist, dann lade den DetailComponent an der stelle an der sich
                                                                            // das <router-outlet></router-outlet> befindet.

    {path: 'search', component: SearchResultsComponent}                     // Wenn der Pfad detail ist, dann lade den DetailComponent an der stelle an der sich
                                                                            // das <router-outlet></router-outlet> befindet.
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}