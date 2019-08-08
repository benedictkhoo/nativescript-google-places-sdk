import { PlaceAutocomplete } from 'nativescript-google-places-sdk';
import { Observable } from 'tns-core-modules/data/observable';

const pageData = new Observable();

export function loaded(args): void {
    pageData.set('place', null);

    args.object.bindingContext = pageData;
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
