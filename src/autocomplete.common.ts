type PlaceFields =
  'address' |
  'id' |
  'lat_lng' |
  'name' |
  'phone_number' |
  'price_level' |
  'rating' |
  'user_ratings_total' |
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
  viewport?: PlaceViewport;
  websiteUri?: string;
}

export interface ShowOptions {
  fields?: PlaceFields[];
  locationBias?: {
    southwest: PlaceCoordinates,
    northeast: PlaceCoordinates
  };
}
