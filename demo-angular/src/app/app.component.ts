import { Component, OnInit } from '@angular/core';
import { Place } from 'nativescript-google-places-sdk';
import { isAndroid } from 'tns-core-modules/platform';
import { ANDROID_API_KEY, IOS_API_KEY } from './environment';

@Component({
    moduleId: module.id,
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        Place.initialize(isAndroid ? ANDROID_API_KEY : IOS_API_KEY);
    }
}
