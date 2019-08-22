import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LocationBiasRoutingModule } from './location-bias-routing.module';
import { LocationBiasComponent } from './location-bias.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LocationBiasRoutingModule
    ],
    declarations: [
        LocationBiasComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LocationBiasModule { }
