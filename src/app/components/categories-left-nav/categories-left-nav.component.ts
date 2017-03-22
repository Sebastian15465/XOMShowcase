import {Component, OnInit} from '@angular/core';                                        // Importe
import {RestService} from "../../rest.service";
import {Classification} from "../../Classification";
import {stringLanguageConstants} from "../../stringLanguageConstants";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs/Rx";

@Component({                                                                            // Component decorator - gibt an welche Teile die Komponente beinhaltet.
    moduleId: module.id,
    selector: 'categories-left-nav',                                                    // Definition des Tag-Namens => z.B. in einer anderen Komponente: <categories-left-nav></categories-left-nav>.
    styleUrls: ['categories-left-nav.component.css'],                                   // Pfade zu den CCS Files dieser Komponente.
    templateUrl: 'categories-left-nav.component.html'                                   // Pfad des HTML-Templates.
})

export class CategoriesLeftNavComponent implements OnInit                               // OnInit - Angular 2 lifecycle hook.
{
    private restService: RestService;                                                   // Property für den restService

    private selectedClassification: Classification;                                     // Property um die geklickte Klassifikation zu identifizieren. Sie wird dann aufgelappt.
    private router: Router;                                                             // Router zum ansteuern der anderen App-Adressen.
    private toggle: boolean = false;                                                    // Bool zum auf oder zuklappen des darunterliegenden DOM Elements. Wird für kleine Bildschirme(responsive
                                                                                        // Design) benötigt.
    private strings: stringLanguageConstants;                                           // Strings für Deutsch und Englisch.
    private languageSelected: string;                                                   // Property um die Sprache vom restService zugänglich zu haben. Dieser String subscribed an das languageTerms
                                                                                        // BehaviorSubject vom restService.
    private classificationsObs: Observable<Classification[]>;                           // Observable eines Classification-Arrays. Näheres im OnInit lifecycle hook.

    constructor(restService: RestService, router1: Router, stringConstants: stringLanguageConstants)        // Injizierung der benötigten Provider.
    {
        this.restService = restService;                                         // Zuweisung RestService
        this.router = router1;                                                  // Zuweisung Router
        this.strings = stringConstants;                                         // Zuweisung LanguageStrings
    }

    ngOnInit(): void
    {

        if (window.innerWidth >= 768)                                                // wenn die Bildschirmbreite unter 768px ist, dann setze toggle = true.
        {
            this.toggle = true;
        }

        this.restService.languageTerms.subscribe((value : string) => this.languageSelected = value);        // Subscribe an den restService.languageTerms. Wert wird benötigt, um schnell auf die
                                                                                                            // länderspezifischen Strings in stringLanguageConstants zuzugreifen. Ist entweder "de"
                                                                                                            // oder "en".


        this.classificationsObs = this.restService.languageTerms                                            // Subscribe an den restService.languageTerms, um die Rest API jedes mal nach den Klassifikationen
                                                                                                            // mit der aktuellen Sprache zu fragen.
            .debounceTime(300)                                                                              // warte 300ms wenn ein neuer Wert in die lanuageTerms geschoben wurde.                
            .distinctUntilChanged()                                                                         // berücksichtige nur String die sich von dem vorigen unterscheiden.
            .switchMap(term => term                                                                         // wechsel zu einem neuen Observable, wenn term sich ändert. Bricht die vorherige Anfrage ab.

                ? this.restService.getClassificationWithProductGroups()                                     // Wenn die languageTerms ein neuen String bekommen haben, dann führe die Funktion
                                                                                                            // getClassificationWithProductGroups() des restServices aus, die ein
                                                                                                            // Klassifikations-Array-Observable zurückgibt.
                                                                                                            // wenn es keine Terms gibt, dann geb ein leeres Klassifikation-Array-Observable zurück.
                : Observable.of<Classification[]>([]))
            .catch(error =>
            {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Classification[]>([]);
            });
    }

    onSelect(classification: Classification): void                                                  // Klappmechanismus
    {
        if (this.selectedClassification != classification)                                          // Wenn selectedClassification ungleich des Parameters ist, dann .... .
        {
            this.selectedClassification = classification;                                           // Zuweisen des Parameters in die Variable

            this.router.navigate(['classification', this.selectedClassification.id]);               // gehe zu URL: classification mit der ID der ausgewählten Klassifikation.
        }
        else                                                                                        // Wenn selectedClassification gleich Parameter, dann ... .
        {
            this.selectedClassification = null;                                                     // Setzen der Variable auf null.
            this.router.navigate(['/welcome']);                                                     // gehe zum welcome screen.
        }


    }

    menuToggleWhenSmallScreen(): void                                                           // Toggle für die Ansicht bei kleinen Bildschirmen
    {
        if (this.toggle == false)                                                               // Wenn toggle equals Unwahr, dann ... .
        {
            this.toggle = true;                                                                 // Setze toggle auf Wahr.
        }
        else this.toggle = false;                                                               // Setze toggle auf Falsch/Unwahr.
    }

    onResize(event: any): void                                                                  // wenn die Fenstergröße geändert wird.
    {

        if (event.target.innerWidth >= 768)                                                      // wenn Fenstergröße größer gleich 768px, dann setze toggle auf true.
        {
            this.toggle = true;
        }
        else this.toggle = false;
    }
}