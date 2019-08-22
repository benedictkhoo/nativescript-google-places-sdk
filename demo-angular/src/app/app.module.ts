import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement, isKnownView } from 'nativescript-angular/element-registry';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular';
import { isIOS } from 'tns-core-modules/platform/platform';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IOS_API_KEY } from './environment';

declare var GMSServices: any;

if (isIOS) {
    GMSServices.provideAPIKey(IOS_API_KEY);
}

if (!isKnownView('MapView')) {
    registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
