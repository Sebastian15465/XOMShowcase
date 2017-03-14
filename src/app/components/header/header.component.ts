/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit} from '@angular/core';
import {RestService} from "../../resttest.service";
import {Product} from "../../Product";
import {Router} from "@angular/router";


@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl: 'header.component.html'
})
export class HeaderComponent
{
private router : Router;

    constructor(router: Router)
    {
        this.router = router;
    }

    goToSearch()
    {
        let link = ['/search'];
        this.router.navigate(link);
    }
}
