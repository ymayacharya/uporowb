import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';
import { GET_EVENT_DETAILSURL } from './constants'

@Injectable()
export class EventService {

    constructor(private _http: Http) { }

    getEventDetails() {
        this._http.get(GET_EVENT_DETAILSURL).subscribe(respose => {
            console.log(respose);
        })
    }
}
