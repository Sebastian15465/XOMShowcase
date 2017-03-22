import {Component, OnInit, Input} from '@angular/core';                 // Importe
import {RestService} from "../../../rest.service";
import {Productgroup} from "../../../Productgroup"
import {Router} from "@angular/router";


@Component({                                                                // Component decorator - gibt an welche Teile die Komponente beinhaltet.
    moduleId: module.id,
    selector: 'categories-left-nav-sub-group',                              // Definition des HTML-Tags
                                                                            // => <categories-left-nav-sub-group [productgroupId]="productgroupItem.id"></categories-left-nav-sub-group>
    styleUrls : ['sub-group.component.css'],                                // Pfade der CSS files.
    templateUrl: 'sub-group.component.html'                                 // Pfad zum HTML-Template.
})
export class SubGroupComponent implements OnInit                                // OnInit - lifecycle hook
{
    @Input()                                                                // Input decorator - Sagt das die nächste Property ein Input ist. Siehe oben => selector Beispiel.
    public productgroupId: string;                                          // Der Input String.

    private isDataAvailable: boolean = false;                               // Deklaration und Initialisierung eines Boolean Propertys.
    private restService: RestService;                                       // Deklaration eines RestService Propertys.
    private productgroup: Productgroup;                                     // Deklaration eines Productgroup Propertys.
    private isSelected: boolean = false;                                    // Deklaration und Initialisierung eines Boolean Propertys.
    private router: Router;                                                 // Deklaration eines Router Propertys.
    private languageSelected: string;                                                   // Property um die Sprache vom restService zugänglich zu haben. Dieser String subscribed an das languageTerms
                                                                                        // BehaviorSubject vom restService.


    constructor(restService: RestService, router:Router)            // Injizierung des RestServices und des Routers
    {
        this.restService = restService;                             // Zuweisen des Restservices.
        this.router = router;                                       // Zuweisen des Routers.

    }

    ngOnInit(): void                                        // Angular 2 lifecycle hook
    {
        this.getNextProductgroup();                         // führe die Funktion getNextProductgroup() aus.

        this.restService.languageTerms.subscribe((value : string) => this.languageSelected = value);        // Subscribe an den restService.languageTerms.
    }

    /**
     * Funktion getNextProductgroup() -> returnt nichts.
     */
    getNextProductgroup(): void
    {
        var me = this;                                      // me kann als this benutz werden.

        this.restService.getProductGroupWithExtendedProductgroups(me.productgroupId)    // Führe die Funktion getProductGroupWithExtendedProductgroups() des restServices aus. Benutze
                                                                                        // me.productgroupId als Parameter. Die Funktion getProductGroupWithExtendedProductgroups() ist
                                                                                        // asynchron.
            .then((productgroup1 => me.productgroup = productgroup1)).then(() =>        // Die Callback-Methode wird mit .then(Lambda-Ausdruck) angehängt. D.h. wenn die Daten da sind,
                                                                                        // dann weise der Property productgroup die empfangenen Daten zu.
            me.isDataAvailable = true)                                                  // Wenn die erste Callback-Methode abgeschlossen ist, dann setze isDataAvailable auf true.

    }

    /**
     * Toggle zum aufklappen.
     */
    toggleSelect(): void
    {
        if (this.isSelected == false)                                               // Wenn isSelected gleich Unwahr, dann ...
        {
            this.isSelected = true;                                                 // setze isSelected auf true.

        }
        else                                                                        // wenn die If-Bedingung nicht Wahr war, dann ...
        {
            this.isSelected = false;                                                // setze isSelected auf Unwahr.

        }
        this.router.navigate(['productgroup', this.productgroup.id]);               // setze die URL in der Adressleiste des Browsers auf /productgroup/ID der ausgewählten Produktgruppe.
    }

}