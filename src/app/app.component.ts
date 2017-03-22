import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',                       // Definiert das Custom HTML Element mit dem diese Komponente in andere HTML Dateien eingebaut werden kann.
                                            // Aus index.html: <my-app>Loading AppComponent content here ...</my-app>
  templateUrl: './app.component.html'       // Pfad des HTML Templates
})

export class AppComponent
{}