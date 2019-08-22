import { enableLocationRequest, getCurrentLocation, isEnabled, Location } from 'nativescript-geolocation';
import { MapView } from 'nativescript-google-maps-sdk';
import { PlaceAutocomplete } from 'nativescript-google-places-sdk';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';
import { Observable } from 'tns-core-modules/data/observable';

const pageData = new Observable();
let mapView: MapView;

export function loaded(args): void {
    pageData.set('mapView', false);

    args.object.bindingContext = pageData;
}

export function openSideDrawer(): void {
    const drawerComponent = <RadSideDrawer>app.getRootView();

    drawerComponent.showDrawer();
}

export function onMapReady(args) {
    mapView = args.object;

    isEnabled()
        .then(enabled => {
            if (!enabled) {
                return enableLocationRequest();
            }

            return Promise.resolve();
        })
        .then(() => getCurrentLocation({ timeout: 15000 }))
        .then((location: Location) => {
            mapView.myLocationEnabled = true;
            mapView.settings.myLocationButtonEnabled = true;
            mapView.settings.zoomGesturesEnabled = false;

            mapView.latitude = location.latitude;
            mapView.longitude = location.longitude;
            mapView.zoom = 19;

            pageData.set('mapView', true);
        });
}

export function search(): void {
    PlaceAutocomplete.show({
        fields: ['lat_lng'],
        locationBias: {
            northeast: mapView.projection.visibleRegion.bounds.northeast,
            southwest: mapView.projection.visibleRegion.bounds.southwest
        }
    }).then(
        place => {
            if (!!place) {
                mapView.latitude = place.latLng.latitude;
                mapView.longitude = place.latLng.longitude;
            }
        },
        err => console.error(err)
    );
}
