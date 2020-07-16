type PlaceFields =
  'address' |
  'id' |
  'lat_lng' |
  'name' |
  'phone_number' |
  'price_level' |
  'rating' |
  'user_ratings_total' |
  'utc_offset_minutes' |
  'viewport' |
  'website_uri';

export interface PlaceCoordinates {
  latitude: number;
  longitude: number;
}

export interface PlaceViewport {
  southwest: PlaceCoordinates;
  northeast: PlaceCoordinates;
}

export interface PlaceResult {
  address?: string;
  id?: string;
  latLng?: PlaceCoordinates;
  name?: string;
  phoneNumber?: string;
  priceLevel?: number;
  rating?: number;
  userRatingsTotal?: number;
  utcOffsetMinutes?: number;
  viewport?: PlaceViewport;
  websiteUri?: string;
}

export interface ShowOptions {
  fields?: PlaceFields[];
  ios?: {
    appearance?: {
      primaryTextColor?: any;
      primaryTextHighlightColor?: any;
      secondaryTextColor?: any;
      tableCellBackgroundColor?: any;
      tableCellSeparatorColor?: any;
      tintColor?: any;
    };
  };
  locationBias?: {
    southwest: PlaceCoordinates,
    northeast: PlaceCoordinates
  };
}
