/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../resttest.service";
import {Productgroup} from "../../../Productgroup"
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'categories-left-nav-sub-group',
    styleUrls : ['sub-group.component.css'],
    templateUrl: 'sub-group.component.html'
})
export class SubGroupComponent implements OnInit
{
    @Input()
    public productgroupId: string;

    private isDataAvailable: boolean = false;
    private restService: RestService;
    private productgroup: Productgroup;
    private isSelected: boolean = false;
    private router: Router;


    constructor(restService: RestService, router:Router)
    {
        this.restService = restService;
        this.router = router;

    }

    ngOnInit(): void
    {
        this.getNextProductgroup();
    }

    getNextProductgroup(): void
    {
        var me = this;
        this.restService.getProductGroupWithExtendedProductgroups(this.productgroupId).then((productgroup1 => me.productgroup = productgroup1)).then(() =>
            me.isDataAvailable = true).then(() => console.log("async"));

    }

    toggleSelect(): void
    {
        if (this.isSelected == false)
        {
            this.isSelected = true;
            this.router.navigate(['productgroup', this.productgroup.id]);
        }
        else
        {
            this.isSelected = false;
            this.router.navigate(['productgroup', this.productgroup.id]);
        }


    }


    /* openToggleList(): void {
     this.router.navigate(['/productgroup', this.selectedClassification.id]);
     }*/

}
