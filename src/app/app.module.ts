import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SetEventDetailsPage } from '../pages/set-event-details/set-event-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { EventModule } from '../services/poro-event/event.module'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SetEventDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EventModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SetEventDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
