import { Component } from '@angular/core';
import { PlaceAutocomplete, PlaceResult } from 'nativescript-google-places-sdk';
import { from } from 'rxjs';

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent {
    place: PlaceResult;

    search(): void {
        from(PlaceAutocomplete.show({ fields: ['address', 'id', 'name'] }))
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
