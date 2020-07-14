import { PlaceResult, ShowOptions } from './autocomplete.common';

export * from './autocomplete.common';

export declare class PlaceAutocomplete {
  /**
   * Show Place Autocomplete UI
   *
   * @param options (optional)
   * @param options.fields (optional)
   * @param options.ios (optional)
   * @param options.ios.appearance (optional)
   * @param options.ios.appearance.primaryTextColor (optional)
   * @param options.ios.appearance.primaryTextHighlightColor (optional)
   * @param options.ios.appearance.secondaryTextColor (optional)
   * @param options.ios.appearance.tableCellBackgroundColor (optional)
   * @param options.ios.appearance.tableCellSeparatorColor (optional)
   * @param options.ios.appearance.tintColor (optional)
   * @param options.locationBias (optional)
   * @param options.locationBias.southwest
   * @param options.locationBias.northeast
   */
  static show(options?: ShowOptions): Promise<PlaceResult>;
}

export declare class Place {
  /**
   * Initialize Place SDK
   * @param apiKey Google Place API key
   */
  static initialize(apiKey: string): void;
}
