/**
 * Created by sebastian.seelig on 16.02.2017.
 */
import {externalIDsClass} from "./externalIDs";
import {Productgroup} from "./Productgroup";

export class Classification
{
    id: string;
    created: number;
    lastmodified: number;
    creator: string;
    modifier: string;
    type: string;
    name: string;
    externalIds: externalIDsClass;
    productgroups: Productgroup[];
    products: string[];
    profiles: string[];
    attributes: string[];
    values: string[];
}



