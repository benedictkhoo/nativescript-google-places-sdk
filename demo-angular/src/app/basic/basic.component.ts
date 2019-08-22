import { Component } from '@angular/core';
import { PlaceAutocomplete, PlaceResult } from 'nativescript-google-places-sdk';
import { from } from 'rxjs';
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
