import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-set-event-details',
    templateUrl: 'set-event-details.html',
})
export class SetEventDetailsPage {

    eventDetailsForm: FormGroup = null;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder
    ) {
        this.eventDetailsForm = this.formBuilder.group({
            eventName: ['', Validators.compose([Validators.required])],
            eventDescription: ['', Validators.compose([Validators.required])],
            contactPerson: ['', Validators.compose([Validators.required])],
            contactPesronNo: ['', Validators.compose([Validators.required])],
            addressType: ['', Validators.compose([Validators.required])],
            firstPrize: ['', Validators.compose([Validators.required])],
            secondPrize: ['', Validators.compose([Validators.required])],
            thirdPrize: ['', Validators.compose([Validators.required])],
            eventStartDate: ['', Validators.compose([Validators.required])],
            eventEndDate: ['', Validators.compose([Validators.required])],
            regStartDate: ['', Validators.compose([Validators.required])],
            regEndDate: ['', Validators.compose([Validators.required])],
            addressLine1: ['', Validators.compose([Validators.required])],
            addressLine2: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            pincode: ['', Validators.required]
        });

        // this.eventDetailsForm.setValue({
        //     eventName: '',
        //     eventDescription: '',
        //     contactPerson: '',
        //     contactPesronNo: '',
        //     addressType: '',
        //     firstPrize: '',
        //     secondPrize: '',
        //     thirdPrize: '',
        //     eventStartDate: '',
        //     eventEndDate: '',
        //     regStartDate: '',
        //     regEndDate: '',
        //     addressLine1: '',
        //     addressLine2: '',
        //     city: '',
        //     state: '',
        //     pincode: ''
        // });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SetEventDetailsPage');
    }

    saveEventDetails(eventDetails) {
        console.log(eventDetails);
    }

    get eventName() {
        return this.eventDetailsForm.get('eventName')
    }

}
