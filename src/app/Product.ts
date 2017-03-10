import {externalIDsClass} from "./externalIDsClass";
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

/*
{
    "id"
:
    "9ef74769-7128-4ca4-9d75-cf053552054c", "created"
:
    1488271708.000000000, "lastmodified"
:
    1488271708.000000000, "creator"
:
    "", "modifier"
:
    "", "type"
:
    "PRODUCT", "name"
:
    "AMS 100 C:68 Race 29", "externalIds"
:
    [{
        "id": "778d34ed-0e49-43b4-99c6-697af235d2a5",
        "created": 1488271708.000000000,
        "lastmodified": 1488271708.000000000,
        "creator": "",
        "modifier": "",
        "type": "EXTERNAL_ID",
        "externalId": "prod2884133844966",
        "system": "SP"
    }], "parents"
:
    [], "variants"
:
    [], "profiles"
:
    [], "attributes"
:
    [], "values"
:
    [{
        "id": "6840c37a-517d-4406-a1a9-1273b8c8760c",
        "created": 1488271708.000000000,
        "lastmodified": 1488271708.000000000,
        "creator": "",
        "modifier": "",
        "type": "VALUE",
        "name": "Artikel-Listenpreis",
        "valuetype": "DOUBLE",
        "value": {"value": 3999, "unit": "EUR"},
        "showvalues": [{
            "id": "614dee5f-59ed-47e8-b8b7-aca1b9f0310e",
            "created": 1488271705.000000000,
            "lastmodified": 1488271705.000000000,
            "creator": "",
            "modifier": "",
            "type": "SHOWVALUE",
            "name": "salesphere",
            "showvalue": "salesphere"
        }, {
            "id": "da5f1484-6cde-45ff-8108-9e0a57f41b0a",
            "created": 1488271706.000000000,
            "lastmodified": 1488271706.000000000,
            "creator": "",
            "modifier": "",
            "type": "SHOWVALUE",
            "name": "showcase_artikellistenpreis",
            "showvalue": "showcase_artikellistenpreis"
        }]
    }]
}
*/


