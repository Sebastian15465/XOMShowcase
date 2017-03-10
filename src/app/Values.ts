/**
 * Created by sebastian.seelig on 23.02.2017.
 */
import {externalIDsClass} from "./externalIDsClass";
import {Showvalue} from "./Showvalue";
/**
 * Created by sebastian.seelig on 08.02.2017.
 */
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
    value: JSON;
    showvalues: Showvalue[] = new Array<Showvalue>();
}
