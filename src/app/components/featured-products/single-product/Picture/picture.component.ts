/**
 * Created by sebastian.seelig on 02.03.2017.
 */
/**
 * Created by sebastian.seelig on 15.02.2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../resttest.service";
import {Product} from "../../../../Product";
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {Values} from "../../../../Values";


@Component({
    moduleId: module.id,
    selector: 'picture-component',
    templateUrl: 'picture.component.html'
})
export class PictureComponent implements OnInit
{
    @Input()
    public assetValues: Values[];

    private restService: RestService;
    private router: Router;
    private pictureUrls: string[];


    constructor(restService: RestService, router1: Router)
    {
        this.restService = restService;
        this.router = router1;


    }

    ngOnInit(): void
    {


        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValueId(this.assetValues);



    }


    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }


}
