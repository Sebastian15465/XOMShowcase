/**
 * Created by sebastian.seelig on 17.02.2017.
 */
import {externalIDsClass} from "./externalIDs";
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
    externalIds:externalIDsClass = new externalIDsClass;
    parent:string[];
    productgroups: Productgroup[] = new Array<Productgroup>();
    products: Product[] = new Array<Product>();
    profiles:string[];
    attributes:string[];
    values:string[];
}


