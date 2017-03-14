/**
 * Created by sebastian.seelig on 22.02.2017.
 */

import {Component} from '@angular/core';
import {stringLanguageConstants} from "../../stringLanguageConstants";
import {RestService} from "../../resttest.service";

@Component({
    moduleId: module.id,
    selector: 'welcome-c',
    templateUrl: './welcome.component.html'
})


export class WelcomeComponent
{
    private strings: stringLanguageConstants;
    private restService: RestService;

    constructor(strings: stringLanguageConstants, restservice: RestService)
    {
        this.strings = strings;
        this.restService = restservice;

    }
}