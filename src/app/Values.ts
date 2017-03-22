import {Showvalue} from "./Showvalue";

export class Values
{
    id: string;
    created:number;
    lastmodified:number;
    creator:string;
    modifier:string;
    type:string;
    name:string;
    valuetype: string;
    value: JSON;                                        // Hier JSON, weil es keine genormte value Klasse gibt.
                                                        // Werte auf https://wiki.myview.de/display/DOCmyXOM/Darstellung+von+Werten#DarstellungvonWerten-Allgemeines
    showvalues: Showvalue[] = new Array<Showvalue>();
}