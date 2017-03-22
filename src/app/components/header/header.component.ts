/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../rest.service";
import {Product} from "../../Product";
import {Router} from "@angular/router";
import {CategoriesLeftNavComponent} from "../categories-left-nav/categories-left-nav.component";
import {AppModule} from "../../app.module";
import {Observable, Subject} from "rxjs";


@Component({
    moduleId: module.id,
    selector: 'header-component',                       // selector => <header-component></header-component>
    templateUrl: 'header.component.html'                // Pfad zum Html-Template
})
export class HeaderComponent implements OnInit
{

    private router: Router;                         // Property für den Router
    private restService: RestService;               // Property für der RestService
    private languageSelected: string;               // Property für die ausgewählte Sprache



    constructor(router: Router, restsevice: RestService)            // DI
    {
        this.router = router;                                       // Zuweisung Router
        this.restService = restsevice;                              // Zuweisung RstService
    }

    ngOnInit(): void
    {
        this.restService.languageTerms.subscribe((value : string) => this.languageSelected = value);  // Subscription an den languageTerms, um immer die aktuelle Sprache lokal zur Verfügung haben.
    }

    /**
     * Setze Sprache. "de" und "en" erlaubt.
     * @param language
     */
    setLanguage(language: string): void
    {
        this.restService.changeLanguage(language);
    }

    /**
     * setzt Url auf /search
     */
    goToSearch()
    {
        let link = ['/search'];
        this.router.navigate(link);
    }

    /**
     * setzt Url auf /welcome
     */
    goToWelcome()
    {
        let link = ['/welcome'];
        this.router.navigate(link);
    }



}
