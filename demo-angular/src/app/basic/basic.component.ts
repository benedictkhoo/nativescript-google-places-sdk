import { Component } from '@angular/core';
import { PlaceAutocomplete, PlaceResult, ShowOptions } from 'nativescript-google-places-sdk';
import { from } from 'rxjs';
import { device, isIOS } from 'tns-core-modules/platform';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'Basic',
    moduleId: module.id,
    templateUrl: 'basic.component.html'
})
export class BasicComponent {
    place: PlaceResult;

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    search(): void {
        const options: ShowOptions = {
            fields: ['address', 'id', 'name']
        };

        if (isIOS) {
            options.ios = { appearance: {} };

            if (parseInt(device.osVersion, 10) >= 13) {
                if (UIScreen.mainScreen.traitCollection.userInterfaceStyle === UIUserInterfaceStyle.Dark) {
                    options.ios.appearance.primaryTextColor = UIColor.whiteColor;
                    options.ios.appearance.secondaryTextColor = UIColor.lightGrayColor;
                    options.ios.appearance.tableCellSeparatorColor = UIColor.lightGrayColor;
                    options.ios.appearance.tableCellBackgroundColor = UIColor.darkGrayColor;
                }
                else {
                    options.ios.appearance.primaryTextColor = UIColor.blackColor;
                    options.ios.appearance.secondaryTextColor = UIColor.lightGrayColor;
                    options.ios.appearance.tableCellSeparatorColor = UIColor.lightGrayColor;
                    options.ios.appearance.tableCellBackgroundColor = UIColor.whiteColor;
                }
            }
        }

        from(PlaceAutocomplete.show(options))
        .subscribe(
            (place) => {
                if (place) {
                    this.place = place;
                }
                else {
                    this.place = null;
                }
            },
            (err) => console.error(err)
        );
    }
}
