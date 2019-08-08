import { ad } from 'tns-core-modules/utils/utils';
import Places = com.google.android.libraries.places.api.Places;

export * from './autocomplete.common';
export * from './autocomplete.android';

export class Place {
  static initialize(apiKey: string): void {
    if (!Places.isInitialized()) {
      Places.initialize(ad.getApplicationContext(), apiKey);
    }
  }
}
