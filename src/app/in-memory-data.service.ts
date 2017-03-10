/**
 * Created by sebastian.seelig on 09.02.2017.
 */
import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        let products =
            [{
            "id": "8fec9297-0dd1-4bc8-9fe0-b336dd21f179",
            "created": 1485950500.000000000,
            "lastmodified": 1485950500.000000000,
            "creator": "",
            "modifier": "",
            "type": "PRODUCT",
            "name": "AMS 100 C:68 Race 29 In memory",
            "externalIds": [{
                "id": "afd133ff-119d-43ec-a6bf-b4a565911641",
                "created": 1485950500.000000000,
                "lastmodified": 1485950500.000000000,
                "creator": "",
                "modifier": "",
                "type": "EXTERNAL_ID",
                "externalId": "prod2884133844966",
                "system": "SP"
            }],
            "parents": [""],
            "variants": [""],
            "profiles": [""],
            "attributes": [""],
            "values": [""]
        }, {
            "id": "edb3cb3c-ccce-466f-85a1-7f6478b343f4",
            "created": 1485950500.000000000,
            "lastmodified": 1485950500.000000000,
            "creator": "",
            "modifier": "",
            "type": "PRODUCT",
            "name": "AMS 100 C:68 SL",
            "externalIds": [{
                "id": "b633655c-9783-404f-8653-6b6e263bdc23",
                "created": 1485950500.000000000,
                "lastmodified": 1485950500.000000000,
                "creator": "",
                "modifier": "",
                "type": "EXTERNAL_ID",
                "externalId": "prod2884666340222",
                "system": "SP"
            }],
            "parents": [],
            "variants": [],
            "profiles": [],
            "attributes": [],
            "values": []
        }, {
            "id": "2a327fda-47a3-42c2-9a04-bd816bcc85ea",
            "created": 1485950500.000000000,
            "lastmodified": 1485950500.000000000,
            "creator": "",
            "modifier": "",
            "type": "PRODUCT",
            "name": "AMS 100 C:68 SLT 29",
            "externalIds": [{
                "id": "6dca9789-9243-4705-8ce5-4b04ad392aa0",
                "created": 1485950500.000000000,
                "lastmodified": 1485950500.000000000,
                "creator": "",
                "modifier": "",
                "type": "EXTERNAL_ID",
                "externalId": "prod2884707281763",
                "system": "SP"
            }],
            "parents": [],
            "variants": [],
            "profiles": [],
            "attributes": [],
            "values": []
        }];
        return {products};
    }
}
