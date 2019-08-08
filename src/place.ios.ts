export * from './autocomplete.common';
export * from './autocomplete.ios';

export class Place {
  static initialize(apiKey: string): void {
    GMSPlacesClient.provideAPIKey(apiKey);
  }
}
