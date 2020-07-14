import { PlaceAutocomplete, ShowOptions } from 'nativescript-google-places-sdk';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';
import { device, isIOS } from 'tns-core-modules/platform';

const pageData = new Observable();

export function loaded(args): void {
    pageData.set('place', null);

    args.object.bindingContext = pageData;
}

export function openSideDrawer(): void {
    const drawerComponent = <RadSideDrawer>app.getRootView();

    drawerComponent.showDrawer();
}

export function search(): void {
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

    PlaceAutocomplete.show(options)
    .then(
        (place) => {
            if (!!place) {
                pageData.set('place', place);
            }
            else {
                pageData.set('place', null);
            }
        },
        (err) => console.error(err)
    );
}
