import { Component } from '@angular/core';
import { enableLocationRequest, getCurrentLocation, isEnabled } from 'nativescript-geolocation';
import { MapView } from 'nativescript-google-maps-sdk';
import { PlaceAutocomplete, PlaceResult } from 'nativescript-google-places-sdk';
import { from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    moduleId: module.id,
    selector: 'LocationBias',
    templateUrl: 'location-bias.component.html'
})
export class LocationBiasComponent {
    mapView: MapView;
    place: PlaceResult;

    constructor(private page: Page) {
        this.page.actionBarHidden = true;
    }

    onMapReady(args): void {
        this.mapView = args.object;

        from(isEnabled())
            .pipe(
                switchMap(enabled => {
                    if (!enabled) {
                        return from(enableLocationRequest());
                    }

                    return of(true);
                }),
                switchMap(() => from(getCurrentLocation({ timeout: 15000 })))
            )
            .subscribe(location => {
                this.mapView.myLocationEnabled = true;
                this.mapView.settings.myLocationButtonEnabled = true;
                this.mapView.settings.zoomGesturesEnabled = true;

                this.mapView.latitude = location.latitude;
                this.mapView.longitude = location.longitude;
                this.mapView.zoom = 19;
            });
    }

    search(): void {
        from(
            PlaceAutocomplete.show({
                fields: ['lat_lng'],
                locationBias: {
                    northeast: this.mapView.projection.visibleRegion.bounds.northeast,
                    southwest: this.mapView.projection.visibleRegion.bounds.southwest
                }
            })
        ).subscribe(
            place => {
                if (place) {
                    this.mapView.latitude = place.latLng.latitude;
                    this.mapView.longitude = place.latLng.longitude;
                }
            },
            err => console.error(err)
        );
    }
}
