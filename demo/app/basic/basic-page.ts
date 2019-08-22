import { PlaceAutocomplete } from 'nativescript-google-places-sdk';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';

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
    PlaceAutocomplete.show({ fields: ['address', 'id', 'name'] })
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
