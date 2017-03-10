/**
 * Created by sebastian.seelig on 09.02.2017.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturedProductsComponent}  from './components/featured-products/featured-products.component';
import {WelcomeComponent}  from './components/welcome.component/welcome.component';
import {DetailComponent}  from './components/detail/detail.component';



const routes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'classification/:id', component: FeaturedProductsComponent},
    {path: 'productgroup/:id', component: FeaturedProductsComponent},
    {path: 'detail/:id', component: DetailComponent},




    /*{ path: 'detail/:id', component: HeroDetailComponent },
     { path: 'heroes',     component: HeroesComponent },*/


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule
{
}
