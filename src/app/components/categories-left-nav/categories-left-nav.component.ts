/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../resttest.service";
import {Classification} from "../../Classification";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'categories-left-nav',

    templateUrl: 'categories-left-nav.component.html'
})
export class CategoriesLeftNavComponent implements OnInit
{

    private restService: RestService;
    private classifications: Classification[];
    private selectedClassification: Classification;
    private router: Router;

    constructor(restService: RestService, router1: Router)
    {
        this.restService = restService;
        this.router = router1;
    }

    ngOnInit(): void
    {
        this.getClassificationsFromRest();


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
            console.log("Klassifikation ausgewählt.");
            this.router.navigate(['classification',this.selectedClassification.id] );
        }
        else
        {
            this.selectedClassification = null;
            this.router.navigate(['/welcome']);
        }


    }



}
