import { ios } from 'tns-core-modules/application';
import { PlaceCoordinates, PlaceResult, PlaceViewport, ShowOptions } from './autocomplete.common';

class AutocompleteViewControllerDelegateImpl extends NSObject implements GMSAutocompleteViewControllerDelegate {
  static ObjCProtocols = [GMSAutocompleteViewControllerDelegate];

  resolve: (value?: PlaceResult) => void;
  reject: (reason?: any) => void;

  private boundsToViewport(bounds: GMSCoordinateBounds): PlaceViewport {
    if (!bounds) {
      return null;
    }

    return {
      southwest: bounds.southWest,
      northeast: bounds.northEast
    };
  }

  private locationCoordinateToPlaceCoordinates(coordinate: CLLocationCoordinate2D): PlaceCoordinates {
    if (!coordinate) {
      return null;
    }

    return {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude
    };
  }

  didRequestAutocompletePredictions(viewController: GMSAutocompleteViewController): void {
    UIApplication.sharedApplication.networkActivityIndicatorVisible = true;
  }

  didUpdateAutocompletePredictions(viewController: GMSAutocompleteViewController): void {
    UIApplication.sharedApplication.networkActivityIndicatorVisible = false;
  }

  viewControllerDidAutocompleteWithPlace(viewController: GMSAutocompleteViewController, place: GMSPlace): void {
    viewController.dismissViewControllerAnimatedCompletion(true, null);
    this.resolve({
      address: place.formattedAddress,
      id: place.placeID,
      latLng: this.locationCoordinateToPlaceCoordinates(place.coordinate),
      name: place.name,
      phoneNumber: place.phoneNumber,
      priceLevel: place.priceLevel,
      rating: place.rating,
      userRatingsTotal: place.userRatingsTotal,
      utcOffsetMinutes: place.UTCOffsetMinutes,
      viewport: this.boundsToViewport(place.viewport),
      websiteUri: place.website ? place.website.absoluteString : null
    });
  }

  viewControllerDidFailAutocompleteWithError(viewController: GMSAutocompleteViewController, error: NSError): void {
    this.reject(error.localizedDescription);
  }

  viewControllerDidSelectPrediction(viewController: GMSAutocompleteViewController, prediction: GMSAutocompletePrediction): boolean {
    return true;
  }

  wasCancelled(viewController: GMSAutocompleteViewController): void {
    viewController.dismissViewControllerAnimatedCompletion(true, null);
    this.resolve(null);
  }
}

export class PlaceAutocomplete {
  private static autocompleteControllerDelegate: AutocompleteViewControllerDelegateImpl;

  static show(options?: ShowOptions): Promise<PlaceResult> {
    return new Promise((resolve, reject) => {
      const autocompleteController = GMSAutocompleteViewController.new();
      let placeFields: GMSPlaceField = GMSPlaceField.All;

      this.autocompleteControllerDelegate = <AutocompleteViewControllerDelegateImpl>AutocompleteViewControllerDelegateImpl.new();
      this.autocompleteControllerDelegate.resolve = resolve;
      this.autocompleteControllerDelegate.reject = reject;
      autocompleteController.delegate = this.autocompleteControllerDelegate;

      if (options) {
        if (options.ios && options.ios.appearance) {
          const appearance = options.ios.appearance;

          if (appearance.primaryTextColor && appearance.primaryTextColor instanceof UIColor) {
            autocompleteController.primaryTextColor = appearance.primaryTextColor;
          }

          if (appearance.primaryTextHighlightColor && appearance.primaryTextHighlightColor instanceof UIColor) {
            autocompleteController.primaryTextHighlightColor = appearance.primaryTextHighlightColor;
          }

          if (appearance.secondaryTextColor && appearance.secondaryTextColor instanceof UIColor) {
            autocompleteController.secondaryTextColor = appearance.secondaryTextColor;
          }

          if (appearance.tableCellBackgroundColor && appearance.tableCellBackgroundColor instanceof UIColor) {
            autocompleteController.tableCellBackgroundColor = appearance.tableCellBackgroundColor;
          }

          if (appearance.tableCellSeparatorColor && appearance.tableCellSeparatorColor instanceof UIColor) {
            autocompleteController.tableCellSeparatorColor = appearance.tableCellSeparatorColor;
          }

          if (appearance.tintColor && appearance.tintColor instanceof UIColor) {
            autocompleteController.tintColor = appearance.tintColor;
          }
        }

        if (options.fields && options.fields.length > 0) {
          const { fields } = options;
          let selectedFields: GMSPlaceField = null;

          if (fields.indexOf('address') > -1) {
            selectedFields |= GMSPlaceField.FormattedAddress;
          }

          if (fields.indexOf('id') > -1) {
            selectedFields |= GMSPlaceField.PlaceID;
          }

          if (fields.indexOf('lat_lng') > -1) {
            selectedFields |= GMSPlaceField.Coordinate;
          }

          if (fields.indexOf('name') > -1) {
            selectedFields |= GMSPlaceField.Name;
          }

          if (fields.indexOf('phone_number') > -1) {
            selectedFields |= GMSPlaceField.PhoneNumber;
          }

          if (fields.indexOf('price_level') > -1) {
            selectedFields |= GMSPlaceField.PriceLevel;
          }

          if (fields.indexOf('rating') > -1) {
            selectedFields |= GMSPlaceField.Rating;
          }

          if (fields.indexOf('user_ratings_total') > -1) {
            selectedFields |= GMSPlaceField.UserRatingsTotal;
          }

          if (fields.indexOf('utc_offset_minutes') > -1) {
            selectedFields |= GMSPlaceField.UTCOffsetMinutes;
          }

          if (fields.indexOf('viewport') > -1) {
            selectedFields |= GMSPlaceField.Viewport;
          }

          if (fields.indexOf('website_uri') > -1) {
            selectedFields |= GMSPlaceField.Website;
          }

          placeFields = selectedFields;
        }

        if (options.locationBias) {
          const { locationBias } = options;

          autocompleteController.autocompleteBounds = GMSCoordinateBounds.alloc().initWithCoordinateCoordinate(
            {
              latitude: locationBias.southwest.latitude,
              longitude: locationBias.southwest.longitude
            },
            {
              latitude: locationBias.northeast.latitude,
              longitude: locationBias.northeast.longitude
            }
          );
        }
      }

      autocompleteController.placeFields = placeFields;

      ios.rootController.presentViewControllerAnimatedCompletion(autocompleteController, true, null);
    });
  }
}
