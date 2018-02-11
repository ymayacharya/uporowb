import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventService } from '../../services/poro-event/event.service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        private _eventService: EventService
    ) {
        this._eventService.getEventDetails();
    }

}
