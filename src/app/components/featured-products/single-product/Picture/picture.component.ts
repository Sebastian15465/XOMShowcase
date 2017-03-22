
import {Component, OnInit, Input} from '@angular/core';
import {RestService} from "../../../../rest.service";
import {Product} from "../../../../Product";
import {Router} from '@angular/router';
import 'rxjs/add/operator/mergeMap';
import {Values} from "../../../../Values";


@Component({
    moduleId: module.id,
    selector: 'picture-component',          // selector => <picture-component [assetValues]="Values1"></picture-component>
    templateUrl: 'picture.component.html'   // Pfad des Html-Templates.
})
export class PictureComponent implements OnInit
{
    @Input()
    public assetValues: Values[];       // Input - assetValues, siehe oben bei selector

    private restService: RestService;       // Property für den restService
    private router: Router;                 // Property für den Router
    private pictureUrls: string[];          // Property für die Url-Strings.


    constructor(restService: RestService, router1: Router)   // DI
    {
        this.restService = restService;                     // Zuweisung RestService
        this.router = router1;                              // Zuweisung Router


    }

    ngOnInit(): void
    {
        // Hole die Bilder Urls vom RestService.
        this.pictureUrls = this.restService.getShowcaseArtikelbildURLByValue(this.assetValues);



    }

    /**
     * Setze Url auf /detail mit id=product.id
     * @param product
     */
    redirectToDetail(product: Product): void
    {
        this.router.navigate(["/detail", product.id]);
    }


}
