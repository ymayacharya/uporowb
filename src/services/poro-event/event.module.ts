import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from './event.service';
import { Http } from '@angular/http';

export function eventServiceFactory(http: Http) {
    return new EventService(http);
}

@NgModule({
    imports: [
        CommonModule
    ]
})
export class EventModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EventModule,
            providers: [{
                provide: EventService, useFactory: eventServiceFactory,
                deps: [
                    Http
                ]
            }]
        };
    }
};

