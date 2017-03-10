/**
 * Created by sebastian.seelig on 17.02.2017.
 */
import {externalIDsClass} from "./externalIDsClass";
import {Product} from "./Product";

export class Productgroup
{
    id: string;
    created:number;
    lastmodified:number;
    creator:string;
    modifier:string;
    type:string;
    name:string;
    externalIds:externalIDsClass;
    parent:string[];
    productgroups: Productgroup[];
    products: Product[];
    profiles:string[];
    attributes:string[];
    values:string[];
}


