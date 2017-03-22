import {externalIDsClass} from "./externalIDs";
import {Values} from "./Values";
/**
 * Created by sebastian.seelig on 08.02.2017.
 */
export class Product
{
    id: string;
    created: number;
    lastmodified: number;
    creator: string;
    modifier: string;
    type: string;
    name: string;
    externalIds: externalIDsClass = new externalIDsClass();
    parents: string[];
    variants: string[];
    profiles: string[];
    attributes: string[];
    values: Values[] = new Array<Values>();
}
