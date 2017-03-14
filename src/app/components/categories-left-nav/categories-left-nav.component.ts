/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../resttest.service";
import {Classification} from "../../Classification";
import {stringLanguageConstants} from "../../stringLanguageConstants";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'categories-left-nav',
    styleUrls: ['categories-left-nav.component.css'],
    templateUrl: 'categories-left-nav.component.html'
})
export class CategoriesLeftNavComponent implements OnInit
{

    private restService: RestService;
    private classifications: Classification[];
    private selectedClassification: Classification;
    private router: Router;
    private toggle: boolean = false;
    private strings : stringLanguageConstants;
    private languageSelected :string;

    constructor(restService: RestService, router1: Router, stringConstants : stringLanguageConstants)
    {
        this.restService = restService;
        this.router = router1;
        this.strings = stringConstants;
    }

    ngOnInit(): void
    {
        this.getClassificationsFromRest();
        if (window.innerWidth>=768)
        {
            this.toggle = true;
        }
        this.languageSelected = this.restService.languageSelected;

    }

    getClassificationsFromRest(): void
    {
        this.restService.getClassificationWithProductGroups().then((classifications => this.classifications = classifications));
    }

    onSelect(classification: Classification): void
    {
        if (this.selectedClassification != classification)
        {
            this.selectedClassification = classification;

            this.router.navigate(['classification', this.selectedClassification.id]);
        }
        else
        {
            this.selectedClassification = null;
            this.router.navigate(['/welcome']);
        }


    }

    menuToggleWhenSmallScreen(): void
    {
        if (this.toggle == false)
        {
            this.toggle = true;
        }
        else this.toggle = false;
    }

    onResize(event : any): void
    {

        if (event.target.innerWidth >= 768)
        {
            this.toggle = true;
        }
        else this.toggle = false;
    }
}
