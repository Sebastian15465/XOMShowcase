/**
 * Created by sebastian.seelig on 22.02.2017.
 */

import {Component, OnInit} from '@angular/core';
import {stringLanguageConstants} from "../../stringLanguageConstants";
import {RestService} from "../../rest.service";

@Component({
    moduleId: module.id,
    selector: 'welcome-c',                              // selector => <welcome-c></welcome-c>
    templateUrl: './welcome.component.html'             // Pfad zum Html-Template.
})


export class WelcomeComponent implements OnInit
{

    private strings: stringLanguageConstants;                   // Property für die Sprachstrings
    private restService: RestService;                           // Property für den RestService
    private languageSelected: string;                           // Property für dei aktuelle Sprache

    constructor(strings: stringLanguageConstants, restservice: RestService)         // DI
    {
        this.strings = strings;                                              // Zuweisung languageStrings
        this.restService = restservice;                                      // Zuweisung RestService
    }

    ngOnInit(): void
    {
        this.restService.languageTerms.subscribe((value : string) => this.languageSelected = value);        // Subscription an den languageTerms, um immer die aktuelle Sprache lokal zu Verfügung zu haben.
    }
}