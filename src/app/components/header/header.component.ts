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
export class HeaderComponent implements OnInit
{

private router : Router;
private restservice : RestService;
private languageSelected : string;

    constructor(router: Router, restsevice : RestService)
    {
        this.router = router;
        this.restservice = restsevice;
    }

    ngOnInit(): void
    {
        this.languageSelected = this.restservice.languageSelected;
    }

    setLanguage(language :string) : void
    {
        this.restservice.languageSelected = language;
        this.languageSelected = this.restservice.languageSelected;
    }

    goToSearch()
    {
        let link = ['/search'];
        this.router.navigate(link);
    }
    goToWelcome()
    {
        let link = ['/welcome'];
        this.router.navigate(link);
    }
}
