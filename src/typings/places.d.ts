declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export class Places {
              public static class: java.lang.Class<com.google.android.libraries.places.api.Places>;
              public static initialize(param0: android.content.Context, param1: string): void;
              public static a(param0: android.content.Context, param1: com.google.android.libraries.places.internal.dw): com.google.android.libraries.places.api.net.PlacesClient;
              public static createClient(param0: android.content.Context): com.google.android.libraries.places.api.net.PlacesClient;
              public static isInitialized(): boolean;
              public static initialize(param0: android.content.Context, param1: string, param2: java.util.Locale): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class AutocompletePredictionResult {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult>;
                      public fullText: string;
                      public placeId: string;
                      public structuredFormatting: com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.StructuredFormatting;
                      public types: java.util.List<string>;
                      public fullTextMatchedSubstrings: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.Substring>;
                    }
                    export module AutocompletePredictionResult {
                      export class StructuredFormatting {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.StructuredFormatting>;
                        public primaryText: string;
                        public primaryTextMatchedSubstrings: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.Substring>;
                        public secondaryText: string;
                        public secondaryTextMatchedSubstrings: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.Substring>;
                      }
                      export class Substring {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult.Substring>;
                        public offset: java.lang.Integer;
                        public length: java.lang.Integer;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class FetchPlacePabloResponse extends com.google.android.libraries.places.internal.aj<any,com.google.android.libraries.places.api.net.FetchPlaceResponse> {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.FetchPlacePabloResponse>;
                      public status: string;
                      public errorMessage: string;
                      public result: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult;
                      public htmlAttributions: java.util.List<string>;
                      public convert(): any;
                      public convert(): com.google.android.libraries.places.api.net.FetchPlaceResponse;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class FindAutocompletePredictionsPabloResponse extends com.google.android.libraries.places.internal.aj<any,com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse> {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.FindAutocompletePredictionsPabloResponse>;
                      public status: string;
                      public errorMessage: string;
                      public predictionResults: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.AutocompletePredictionResult>;
                      public convert(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse;
                      public convert(): any;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class FindCurrentPlacePabloResponse extends com.google.android.libraries.places.internal.aj<any,com.google.android.libraries.places.api.net.FindCurrentPlaceResponse> {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.FindCurrentPlacePabloResponse>;
                      public status: string;
                      public errorMessage: string;
                      public htmlAttributions: java.util.List<string>;
                      public placeLikelihoodResults: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceLikelihoodResult>;
                      public convert(): any;
                      public convert(): com.google.android.libraries.places.api.net.FindCurrentPlaceResponse;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class PlaceLikelihoodResult {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceLikelihoodResult>;
                      public likelihood: java.lang.Double;
                      public placeResult: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult;
                      public getPlaceResult(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult;
                      public getLikelihood(): java.lang.Double;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module internal {
              export module impl {
                export module net {
                  export module pablo {
                    export class PlaceResult {
                      public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult>;
                      public addressComponents: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.AddressComponent>;
                      public formattedAddress: string;
                      public geometry: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry;
                      public icon: string;
                      public internationalPhoneNumber: string;
                      public name: string;
                      public openingHours: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours;
                      public photos: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Photo>;
                      public placeId: string;
                      public plusCode: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.PlusCode;
                      public priceLevel: java.lang.Integer;
                      public rating: java.lang.Double;
                      public types: java.util.List<string>;
                      public userRatingsTotal: java.lang.Integer;
                      public website: string;
                      public getGeometry(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry;
                      public getName(): string;
                      public getInternationalPhoneNumber(): string;
                      public getOpeningHours(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours;
                      public getTypes(): java.util.List<string>;
                      public getAddressComponents(): java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.AddressComponent>;
                      public getPriceLevel(): java.lang.Integer;
                      public getUserRatingsTotal(): java.lang.Integer;
                      public getRating(): java.lang.Double;
                      public getWebsite(): string;
                      public getPhotos(): java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Photo>;
                      public getPlusCode(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.PlusCode;
                      public getFormattedAddress(): string;
                      public getPlaceId(): string;
                    }
                    export module PlaceResult {
                      export class AddressComponent {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.AddressComponent>;
                        public longName: string;
                        public shortName: string;
                        public types: java.util.List<string>;
                        public getShortName(): string;
                        public getLongName(): string;
                        public getTypes(): java.util.List<string>;
                      }
                      export class Geometry {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry>;
                        public location: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                        public viewport: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Viewport;
                        public getLocation(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                        public getViewport(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Viewport;
                      }
                      export module Geometry {
                        export class Location {
                          public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location>;
                          public lat: java.lang.Double;
                          public lng: java.lang.Double;
                          public getLat(): java.lang.Double;
                          public getLng(): java.lang.Double;
                        }
                        export class Viewport {
                          public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Viewport>;
                          public northeast: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                          public southwest: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                          public getNortheast(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                          public getSouthwest(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Geometry.Location;
                        }
                      }
                      export class OpeningHours {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours>;
                        public periods: java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.Period>;
                        public weekdayText: java.util.List<string>;
                        public getPeriods(): java.util.List<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.Period>;
                        public getWeekdayText(): java.util.List<string>;
                      }
                      export module OpeningHours {
                        export class Period {
                          public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.Period>;
                          public close: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.TimeOfWeek;
                          public open: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.TimeOfWeek;
                          public getOpen(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.TimeOfWeek;
                          public getClose(): com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.TimeOfWeek;
                        }
                        export class TimeOfWeek {
                          public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.OpeningHours.TimeOfWeek>;
                          public day: java.lang.Integer;
                          public time: string;
                          public getDay(): java.lang.Integer;
                          public getTime(): string;
                        }
                      }
                      export class Photo {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.Photo>;
                        public height: java.lang.Integer;
                        public width: java.lang.Integer;
                        public photoReference: string;
                        public htmlAttributions: java.util.List<string>;
                        public getWidth(): java.lang.Integer;
                        public getPhotoReference(): string;
                        public getHeight(): java.lang.Integer;
                        public getHtmlAttributions(): java.util.List<string>;
                      }
                      export class PlusCode {
                        public static class: java.lang.Class<com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult.PlusCode>;
                        public compoundCode: string;
                        public globalCode: string;
                        public getCompoundCode(): string;
                        public getGlobalCode(): string;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AddressComponent {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponent>;
                public getShortName(): string;
                public static builder(param0: string, param1: java.util.List<string>): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                public getName(): string;
                public getTypes(): java.util.List<string>;
                public constructor();
              }
              export module AddressComponent {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponent.Builder>;
                  public build(): com.google.android.libraries.places.api.model.AddressComponent;
                  public constructor();
                  public a(): com.google.android.libraries.places.api.model.AddressComponent;
                  public a(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                  public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                  public a(param0: java.util.List<string>): com.google.android.libraries.places.api.model.AddressComponent.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AddressComponents {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AddressComponents>;
                public asList(): java.util.List<com.google.android.libraries.places.api.model.AddressComponent>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.AddressComponent>): com.google.android.libraries.places.api.model.AddressComponents;
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AutocompletePrediction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction>;
                public a(): string;
                public f(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>;
                public static builder(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public constructor();
                public c(): string;
                public e(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>;
                public getFullText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
                public d(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>;
                public getPrimaryText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
                public b(): string;
                public getSecondaryText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
                public getPlaceId(): string;
              }
              export module AutocompletePrediction {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.Builder>;
                  public b(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public constructor();
                  public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public a(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public c(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public a(): com.google.android.libraries.places.api.model.AutocompletePrediction;
                  public build(): com.google.android.libraries.places.api.model.AutocompletePrediction;
                  public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                  public a(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
                }
                export abstract class a {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.a>;
                  public constructor();
                  public a(): number;
                  public b(): number;
                }
                export module a {
                  export abstract class a {
                    public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.a.a>;
                    public b(param0: number): com.google.android.libraries.places.api.model.AutocompletePrediction.a.a;
                    public a(param0: number): com.google.android.libraries.places.api.model.AutocompletePrediction.a.a;
                    public constructor();
                    public a(): com.google.android.libraries.places.api.model.AutocompletePrediction.a;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class AutocompleteSessionToken {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompleteSessionToken>;
                public toString(): string;
                public a(): android.os.ParcelUuid;
                public constructor();
                public static newInstance(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class DayOfWeek extends android.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.DayOfWeek>;
                public static SUNDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static MONDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static TUESDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static WEDNESDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static THURSDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static FRIDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static SATURDAY: com.google.android.libraries.places.api.model.DayOfWeek;
                public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.DayOfWeek>;
                public static valueOf(param0: string): com.google.android.libraries.places.api.model.DayOfWeek;
                public describeContents(): number;
                public static a(param0: android.os.Parcel): com.google.android.libraries.places.api.model.DayOfWeek;
                public writeToParcel(param0: android.os.Parcel, param1: number): void;
                public static values(): native.Array<com.google.android.libraries.places.api.model.DayOfWeek>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class LocalTime {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalTime>;
                public getHours(): number;
                public getMinutes(): number;
                public static newInstance(param0: number, param1: number): com.google.android.libraries.places.api.model.LocalTime;
                public constructor();
              }
              export module LocalTime {
                export abstract class a {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalTime.a>;
                  public constructor();
                  public a(): com.google.android.libraries.places.api.model.LocalTime;
                  public a(param0: number): com.google.android.libraries.places.api.model.LocalTime.a;
                  public b(param0: number): com.google.android.libraries.places.api.model.LocalTime.a;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class LocationBias {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocationBias>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.model.LocationBias interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class LocationRestriction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocationRestriction>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.model.LocationRestriction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class OpeningHours {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.OpeningHours>;
                public getWeekdayText(): java.util.List<string>;
                public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
                public static builder(): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                public constructor();
              }
              export module OpeningHours {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.OpeningHours.Builder>;
                  public constructor();
                  public build(): com.google.android.libraries.places.api.model.OpeningHours;
                  public setWeekdayText(param0: java.util.List<string>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                  public a(): com.google.android.libraries.places.api.model.OpeningHours;
                  public setPeriods(param0: java.util.List<com.google.android.libraries.places.api.model.Period>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class Period {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.Period>;
                public static builder(): com.google.android.libraries.places.api.model.Period.Builder;
                public constructor();
                public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
                public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
              export module Period {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Period.Builder>;
                  public constructor();
                  public setClose(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                  public build(): com.google.android.libraries.places.api.model.Period;
                  public setOpen(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PhotoMetadata {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public a(): string;
                public static builder(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                public getAttributions(): string;
                public constructor();
                public getHeight(): number;
                public getWidth(): number;
              }
              export module PhotoMetadata {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.PhotoMetadata.Builder>;
                  public constructor();
                  public a(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public build(): com.google.android.libraries.places.api.model.PhotoMetadata;
                  public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
                  public a(): com.google.android.libraries.places.api.model.PhotoMetadata;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class Place {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place>;
                public static PRICE_LEVEL_MIN_VALUE: number;
                public static PRICE_LEVEL_MAX_VALUE: number;
                public static RATING_MIN_VALUE: number;
                public static RATING_MAX_VALUE: number;
                public getPhoneNumber(): string;
                public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
                public getName(): string;
                public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
                public static builder(): com.google.android.libraries.places.api.model.Place.Builder;
                public constructor();
                public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
                public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
                public getRating(): java.lang.Double;
                public getPriceLevel(): java.lang.Integer;
                public getAddress(): string;
                public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
                public getWebsiteUri(): android.net.Uri;
                public getUserRatingsTotal(): java.lang.Integer;
                public getAttributions(): java.util.List<string>;
                public getLatLng(): com.google.android.gms.maps.model.LatLng;
                public getId(): string;
                public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
              }
              export module Place {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Builder>;
                  public setUserRatingsTotal(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public constructor();
                  public setPhotoMetadatas(param0: java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>): com.google.android.libraries.places.api.model.Place.Builder;
                  public a(): com.google.android.libraries.places.api.model.Place;
                  public setPriceLevel(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
                  public setViewport(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.Place.Builder;
                  public setAttributions(param0: java.util.List<string>): com.google.android.libraries.places.api.model.Place.Builder;
                  public setRating(param0: java.lang.Double): com.google.android.libraries.places.api.model.Place.Builder;
                  public setName(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setWebsiteUri(param0: android.net.Uri): com.google.android.libraries.places.api.model.Place.Builder;
                  public setOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
                  public setAddressComponents(param0: com.google.android.libraries.places.api.model.AddressComponents): com.google.android.libraries.places.api.model.Place.Builder;
                  public setPlusCode(param0: com.google.android.libraries.places.api.model.PlusCode): com.google.android.libraries.places.api.model.Place.Builder;
                  public setPhoneNumber(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.Place.Builder;
                  public setAddress(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setId(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
                  public setLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.Place.Builder;
                  public build(): com.google.android.libraries.places.api.model.Place;
                }
                export class Field extends android.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Field>;
                  public static ADDRESS: com.google.android.libraries.places.api.model.Place.Field;
                  public static ADDRESS_COMPONENTS: com.google.android.libraries.places.api.model.Place.Field;
                  public static ID: com.google.android.libraries.places.api.model.Place.Field;
                  public static LAT_LNG: com.google.android.libraries.places.api.model.Place.Field;
                  public static NAME: com.google.android.libraries.places.api.model.Place.Field;
                  public static OPENING_HOURS: com.google.android.libraries.places.api.model.Place.Field;
                  public static PHONE_NUMBER: com.google.android.libraries.places.api.model.Place.Field;
                  public static PHOTO_METADATAS: com.google.android.libraries.places.api.model.Place.Field;
                  public static PLUS_CODE: com.google.android.libraries.places.api.model.Place.Field;
                  public static PRICE_LEVEL: com.google.android.libraries.places.api.model.Place.Field;
                  public static RATING: com.google.android.libraries.places.api.model.Place.Field;
                  public static TYPES: com.google.android.libraries.places.api.model.Place.Field;
                  public static USER_RATINGS_TOTAL: com.google.android.libraries.places.api.model.Place.Field;
                  public static VIEWPORT: com.google.android.libraries.places.api.model.Place.Field;
                  public static WEBSITE_URI: com.google.android.libraries.places.api.model.Place.Field;
                  public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Field>;
                  public describeContents(): number;
                  public writeToParcel(param0: android.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.Field;
                  public static values(): native.Array<com.google.android.libraries.places.api.model.Place.Field>;
                }
                export class Type extends android.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.Place.Type>;
                  public static OTHER: com.google.android.libraries.places.api.model.Place.Type;
                  public static ACCOUNTING: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_1: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_2: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_3: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_4: com.google.android.libraries.places.api.model.Place.Type;
                  public static ADMINISTRATIVE_AREA_LEVEL_5: com.google.android.libraries.places.api.model.Place.Type;
                  public static AIRPORT: com.google.android.libraries.places.api.model.Place.Type;
                  public static AMUSEMENT_PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static AQUARIUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static ART_GALLERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static ATM: com.google.android.libraries.places.api.model.Place.Type;
                  public static BAKERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static BANK: com.google.android.libraries.places.api.model.Place.Type;
                  public static BAR: com.google.android.libraries.places.api.model.Place.Type;
                  public static BEAUTY_SALON: com.google.android.libraries.places.api.model.Place.Type;
                  public static BICYCLE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static BOOK_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static BOWLING_ALLEY: com.google.android.libraries.places.api.model.Place.Type;
                  public static BUS_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAFE: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAMPGROUND: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_DEALER: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_RENTAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_REPAIR: com.google.android.libraries.places.api.model.Place.Type;
                  public static CAR_WASH: com.google.android.libraries.places.api.model.Place.Type;
                  public static CASINO: com.google.android.libraries.places.api.model.Place.Type;
                  public static CEMETERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static CHURCH: com.google.android.libraries.places.api.model.Place.Type;
                  public static CITY_HALL: com.google.android.libraries.places.api.model.Place.Type;
                  public static CLOTHING_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static COLLOQUIAL_AREA: com.google.android.libraries.places.api.model.Place.Type;
                  public static CONVENIENCE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static COUNTRY: com.google.android.libraries.places.api.model.Place.Type;
                  public static COURTHOUSE: com.google.android.libraries.places.api.model.Place.Type;
                  public static DENTIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static DEPARTMENT_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static DOCTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static ELECTRICIAN: com.google.android.libraries.places.api.model.Place.Type;
                  public static ELECTRONICS_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static EMBASSY: com.google.android.libraries.places.api.model.Place.Type;
                  public static ESTABLISHMENT: com.google.android.libraries.places.api.model.Place.Type;
                  public static FINANCE: com.google.android.libraries.places.api.model.Place.Type;
                  public static FIRE_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static FLOOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static FLORIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static FOOD: com.google.android.libraries.places.api.model.Place.Type;
                  public static FUNERAL_HOME: com.google.android.libraries.places.api.model.Place.Type;
                  public static FURNITURE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static GAS_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static GENERAL_CONTRACTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static GEOCODE: com.google.android.libraries.places.api.model.Place.Type;
                  public static GROCERY_OR_SUPERMARKET: com.google.android.libraries.places.api.model.Place.Type;
                  public static GYM: com.google.android.libraries.places.api.model.Place.Type;
                  public static HAIR_CARE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HARDWARE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HEALTH: com.google.android.libraries.places.api.model.Place.Type;
                  public static HINDU_TEMPLE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HOME_GOODS_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static HOSPITAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static INSURANCE_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static INTERSECTION: com.google.android.libraries.places.api.model.Place.Type;
                  public static JEWELRY_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LAUNDRY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LAWYER: com.google.android.libraries.places.api.model.Place.Type;
                  public static LIBRARY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LIQUOR_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCAL_GOVERNMENT_OFFICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCALITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static LOCKSMITH: com.google.android.libraries.places.api.model.Place.Type;
                  public static LODGING: com.google.android.libraries.places.api.model.Place.Type;
                  public static MEAL_DELIVERY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MEAL_TAKEAWAY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOSQUE: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVIE_RENTAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVIE_THEATER: com.google.android.libraries.places.api.model.Place.Type;
                  public static MOVING_COMPANY: com.google.android.libraries.places.api.model.Place.Type;
                  public static MUSEUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static NATURAL_FEATURE: com.google.android.libraries.places.api.model.Place.Type;
                  public static NEIGHBORHOOD: com.google.android.libraries.places.api.model.Place.Type;
                  public static NIGHT_CLUB: com.google.android.libraries.places.api.model.Place.Type;
                  public static PAINTER: com.google.android.libraries.places.api.model.Place.Type;
                  public static PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static PARKING: com.google.android.libraries.places.api.model.Place.Type;
                  public static PET_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static PHARMACY: com.google.android.libraries.places.api.model.Place.Type;
                  public static PHYSIOTHERAPIST: com.google.android.libraries.places.api.model.Place.Type;
                  public static PLACE_OF_WORSHIP: com.google.android.libraries.places.api.model.Place.Type;
                  public static PLUMBER: com.google.android.libraries.places.api.model.Place.Type;
                  public static POINT_OF_INTEREST: com.google.android.libraries.places.api.model.Place.Type;
                  public static POLICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POLITICAL: com.google.android.libraries.places.api.model.Place.Type;
                  public static POST_BOX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POST_OFFICE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE_PREFIX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_CODE_SUFFIX: com.google.android.libraries.places.api.model.Place.Type;
                  public static POSTAL_TOWN: com.google.android.libraries.places.api.model.Place.Type;
                  public static PREMISE: com.google.android.libraries.places.api.model.Place.Type;
                  public static REAL_ESTATE_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static RESTAURANT: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROOFING_CONTRACTOR: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROOM: com.google.android.libraries.places.api.model.Place.Type;
                  public static ROUTE: com.google.android.libraries.places.api.model.Place.Type;
                  public static RV_PARK: com.google.android.libraries.places.api.model.Place.Type;
                  public static SCHOOL: com.google.android.libraries.places.api.model.Place.Type;
                  public static SHOE_STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static SHOPPING_MALL: com.google.android.libraries.places.api.model.Place.Type;
                  public static SPA: com.google.android.libraries.places.api.model.Place.Type;
                  public static STADIUM: com.google.android.libraries.places.api.model.Place.Type;
                  public static STREET_ADDRESS: com.google.android.libraries.places.api.model.Place.Type;
                  public static STORAGE: com.google.android.libraries.places.api.model.Place.Type;
                  public static STORE: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_1: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_2: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_3: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_4: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBLOCALITY_LEVEL_5: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBPREMISE: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUBWAY_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static SUPERMARKET: com.google.android.libraries.places.api.model.Place.Type;
                  public static SYNAGOGUE: com.google.android.libraries.places.api.model.Place.Type;
                  public static TAXI_STAND: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRAIN_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRANSIT_STATION: com.google.android.libraries.places.api.model.Place.Type;
                  public static TRAVEL_AGENCY: com.google.android.libraries.places.api.model.Place.Type;
                  public static UNIVERSITY: com.google.android.libraries.places.api.model.Place.Type;
                  public static VETERINARY_CARE: com.google.android.libraries.places.api.model.Place.Type;
                  public static ZOO: com.google.android.libraries.places.api.model.Place.Type;
                  public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Type>;
                  public describeContents(): number;
                  public writeToParcel(param0: android.os.Parcel, param1: number): void;
                  public static valueOf(param0: string): com.google.android.libraries.places.api.model.Place.Type;
                  public static values(): native.Array<com.google.android.libraries.places.api.model.Place.Type>;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PlaceLikelihood {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlaceLikelihood>;
                public static LIKELIHOOD_MIN_VALUE: number;
                public static LIKELIHOOD_MAX_VALUE: number;
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place, param1: number): com.google.android.libraries.places.api.model.PlaceLikelihood;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public constructor();
                public getLikelihood(): number;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class PlusCode {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlusCode>;
                public getGlobalCode(): string;
                public constructor();
                public static builder(): com.google.android.libraries.places.api.model.PlusCode.Builder;
                public getCompoundCode(): string;
              }
              export module PlusCode {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.PlusCode.Builder>;
                  public constructor();
                  public setCompoundCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                  public build(): com.google.android.libraries.places.api.model.PlusCode;
                  public setGlobalCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class RectangularBounds implements com.google.android.libraries.places.api.model.LocationBias, com.google.android.libraries.places.api.model.LocationRestriction {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.RectangularBounds>;
                public getSouthwest(): com.google.android.gms.maps.model.LatLng;
                public getNortheast(): com.google.android.gms.maps.model.LatLng;
                public constructor();
                public static newInstance(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.RectangularBounds;
                public static newInstance(param0: com.google.android.gms.maps.model.LatLng, param1: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.RectangularBounds;
              }
              export module RectangularBounds {
                export abstract class a {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.model.RectangularBounds.a>;
                  public constructor();
                  public a(): com.google.android.libraries.places.api.model.RectangularBounds;
                  public b(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.RectangularBounds.a;
                  public a(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.RectangularBounds.a;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export abstract class TimeOfWeek {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.TimeOfWeek>;
                public constructor();
                public getTime(): com.google.android.libraries.places.api.model.LocalTime;
                public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
                public static newInstance(param0: com.google.android.libraries.places.api.model.DayOfWeek, param1: com.google.android.libraries.places.api.model.LocalTime): com.google.android.libraries.places.api.model.TimeOfWeek;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module model {
              export class TypeFilter extends android.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.api.model.TypeFilter>;
                public static ADDRESS: com.google.android.libraries.places.api.model.TypeFilter;
                public static CITIES: com.google.android.libraries.places.api.model.TypeFilter;
                public static ESTABLISHMENT: com.google.android.libraries.places.api.model.TypeFilter;
                public static GEOCODE: com.google.android.libraries.places.api.model.TypeFilter;
                public static REGIONS: com.google.android.libraries.places.api.model.TypeFilter;
                public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.TypeFilter>;
                public static valueOf(param0: string): com.google.android.libraries.places.api.model.TypeFilter;
                public describeContents(): number;
                public static values(): native.Array<com.google.android.libraries.places.api.model.TypeFilter>;
                public writeToParcel(param0: android.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPhotoRequest extends com.google.android.libraries.places.internal.ay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoRequest>;
                public static builder(param0: com.google.android.libraries.places.api.model.PhotoMetadata): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                public getMaxWidth(): java.lang.Integer;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public static newInstance(param0: com.google.android.libraries.places.api.model.PhotoMetadata): com.google.android.libraries.places.api.net.FetchPhotoRequest;
                public constructor();
                public getMaxHeight(): java.lang.Integer;
                public getPhotoMetadata(): com.google.android.libraries.places.api.model.PhotoMetadata;
              }
              export module FetchPhotoRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder>;
                  public d(): com.google.android.libraries.places.api.net.FetchPhotoRequest;
                  public constructor();
                  public a(): java.lang.Integer;
                  public a(param0: com.google.android.libraries.places.api.model.PhotoMetadata): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public build(): com.google.android.libraries.places.api.net.FetchPhotoRequest;
                  public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public b(): java.lang.Integer;
                  public c(): com.google.android.libraries.places.api.model.PhotoMetadata;
                  public setMaxHeight(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPhotoResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                public getBitmap(): android.graphics.Bitmap;
                public constructor();
                public static newInstance(param0: android.graphics.Bitmap): com.google.android.libraries.places.api.net.FetchPhotoResponse;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPlaceRequest extends com.google.android.libraries.places.internal.ay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceRequest>;
                public static builder(param0: string, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                public static newInstance(param0: string, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FetchPlaceRequest;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public constructor();
                public getPlaceId(): string;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
              export module FetchPlaceRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder>;
                  public constructor();
                  public a(param0: string): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                  public a(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                  public build(): com.google.android.libraries.places.api.net.FetchPlaceRequest;
                  public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
                  public a(): com.google.android.libraries.places.api.net.FetchPlaceRequest;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FetchPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                public getPlace(): com.google.android.libraries.places.api.model.Place;
                public constructor();
                public static newInstance(param0: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.api.net.FetchPlaceResponse;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindAutocompletePredictionsRequest extends com.google.android.libraries.places.internal.ay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest>;
                public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
                public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public static newInstance(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
                public static builder(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
                public getCountry(): string;
                public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
                public constructor();
                public getQuery(): string;
              }
              export module FindAutocompletePredictionsRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder>;
                  public build(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
                  public constructor();
                  public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setCountry(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                  public setQuery(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindAutocompletePredictionsResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>): com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse;
                public constructor();
                public getAutocompletePredictions(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindCurrentPlaceRequest extends com.google.android.libraries.places.internal.ay {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceRequest>;
                public static builder(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
                public constructor();
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest;
                public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              }
              export module FindCurrentPlaceRequest {
                export abstract class Builder {
                  public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder>;
                  public build(): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest;
                  public constructor();
                  public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                  public a(): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest;
                  public a(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
                }
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export abstract class FindCurrentPlaceResponse {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
                public static newInstance(param0: java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>): com.google.android.libraries.places.api.net.FindCurrentPlaceResponse;
                public constructor();
                public getPlaceLikelihoods(): java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class PlacesClient {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.PlacesClient>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.api.net.PlacesClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                  fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                  fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                  findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
                });
                public constructor();
                public findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                public fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
                public fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                public findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module api {
            export module net {
              export class PlacesStatusCodes {
                public static class: java.lang.Class<com.google.android.libraries.places.api.net.PlacesStatusCodes>;
                public static OVER_QUERY_LIMIT: number;
                public static REQUEST_DENIED: number;
                public static INVALID_REQUEST: number;
                public static NOT_FOUND: number;
                public static isError(param0: number): boolean;
                public constructor();
                public static getStatusCodeString(param0: number): string;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.a>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                a(): number;
              });
              public constructor();
              public a(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class aa {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.aa>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ab {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ab>;
              public then(param0: any): com.google.android.gms.tasks.Task;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ac {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ac>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ad {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ad>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ae extends com.google.android.libraries.places.internal.r<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ae>;
              public e(): java.util.Map<string,string>;
              public constructor(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest, param1: string, param2: boolean, param3: com.google.android.libraries.places.internal.fg);
              public d(): string;
              public constructor(param0: any);
              public constructor(param0: any, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class af extends com.google.android.libraries.places.internal.aj<any,com.google.android.libraries.places.api.net.FetchPhotoResponse> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.af>;
              public constructor();
              public constructor(param0: android.graphics.Bitmap);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ag extends com.google.android.libraries.places.internal.r<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ag>;
              public e(): java.util.Map<string,string>;
              public constructor(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
              public d(): string;
              public constructor(param0: any);
              public constructor(param0: any, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ah extends com.google.android.libraries.places.internal.r<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ah>;
              public e(): java.util.Map<string,string>;
              public constructor(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
              public d(): string;
              public constructor(param0: any);
              public constructor(param0: any, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ai extends com.google.android.libraries.places.internal.r<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ai>;
              public e(): java.util.Map<string,string>;
              public constructor(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: android.location.Location, param2: com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.internal.fu>, param3: java.util.Locale, param4: string, param5: boolean, param6: com.google.android.libraries.places.internal.fg);
              public d(): string;
              public constructor(param0: any);
              public constructor(param0: any, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class aj<TypeT, ResponseT>  extends com.google.android.libraries.places.internal.s<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.aj<any,any>>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ak {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ak>;
              public static a: com.google.android.gms.tasks.Continuation;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class al {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.al>;
              public static a: com.google.android.gms.tasks.Continuation;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class am {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.am>;
              public static a: com.google.android.gms.tasks.Continuation;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class an {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.an>;
              public static a: com.google.android.gms.tasks.Continuation;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ao {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ao>;
              public static a(param0: com.google.android.libraries.places.api.internal.impl.net.pablo.PlaceResult, param1: java.util.List<string>): com.google.android.libraries.places.api.model.Place;
              public static a(param0: java.util.List<string>): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
              public static b(param0: java.util.List): java.util.List;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ap {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ap>;
              public static a(param0: com.google.android.libraries.places.api.model.LocationBias): string;
              public static b(param0: android.location.Location): string;
              public static a(param0: com.google.android.libraries.places.api.model.LocationRestriction): string;
              public static a(param0: string): string;
              public static a(param0: com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.internal.fu>): string;
              public static a(param0: android.location.Location): java.lang.Integer;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class aq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.aq>;
              public static b(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): string;
              public static a(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): java.util.List<string>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ar {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ar>;
              public static a(param0: com.google.android.libraries.places.api.model.TypeFilter): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class as {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.as>;
              public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: string);
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class at {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.at>;
              public then(param0: com.google.android.gms.tasks.Task): any;
              public constructor(param0: com.google.android.libraries.places.internal.fv, param1: com.google.android.gms.tasks.TaskCompletionSource);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class au {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.au>;
              public onComplete(param0: com.google.android.gms.tasks.Task): void;
              public constructor(param0: com.google.android.libraries.places.internal.fv, param1: com.google.android.gms.tasks.TaskCompletionSource);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class av extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.av>;
              public b(): any;
              public constructor(param0: com.google.android.libraries.places.internal.ny<android.content.Context>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class aw implements com.google.android.libraries.places.internal.ax, com.google.android.libraries.places.internal.dz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.aw>;
              public constructor();
              public a(param0: string, param1: java.util.Locale, param2: boolean): void;
              public d(): boolean;
              public b(): string;
              public c(): java.util.Locale;
              public a(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ax {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ax>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.ax interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                b(): string;
                c(): java.util.Locale;
                d(): boolean;
              });
              public constructor();
              public d(): boolean;
              public b(): string;
              public c(): java.util.Locale;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ay {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ay>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.ay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              });
              public constructor();
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class az {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.az>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.az interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
              });
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class b extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.b>;
              public constructor();
              public static a(): com.google.android.libraries.places.internal.a;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class ba extends com.google.android.libraries.places.api.model.AddressComponent {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ba>;
              public getTypes(): java.util.List<string>;
              public hashCode(): number;
              public getShortName(): string;
              public getName(): string;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bb extends com.google.android.libraries.places.api.model.AddressComponent.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bb>;
              public constructor();
              public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bc extends com.google.android.libraries.places.api.model.AddressComponents {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bc>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public asList(): java.util.List<com.google.android.libraries.places.api.model.AddressComponent>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bd extends com.google.android.libraries.places.api.model.AutocompletePrediction {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bd>;
              public hashCode(): number;
              public toString(): string;
              public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
              public equals(param0: any): boolean;
              public getPlaceId(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class be extends com.google.android.libraries.places.api.model.AutocompletePrediction.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.be>;
              public constructor();
              public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public a(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public c(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public b(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction.a>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public a(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
              public a(): com.google.android.libraries.places.api.model.AutocompletePrediction;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bf extends com.google.android.libraries.places.api.model.AutocompletePrediction.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bf>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bg extends com.google.android.libraries.places.api.model.AutocompletePrediction.a.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bg>;
              public constructor();
              public a(): com.google.android.libraries.places.api.model.AutocompletePrediction.a;
              public a(param0: number): com.google.android.libraries.places.api.model.AutocompletePrediction.a.a;
              public b(param0: number): com.google.android.libraries.places.api.model.AutocompletePrediction.a.a;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bh extends com.google.android.libraries.places.api.model.AutocompleteSessionToken {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bh>;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bi extends com.google.android.libraries.places.api.model.LocalTime {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bi>;
              public hashCode(): number;
              public getMinutes(): number;
              public getHours(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bj extends com.google.android.libraries.places.api.model.LocalTime.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bj>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bk extends com.google.android.libraries.places.api.model.OpeningHours {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bk>;
              public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
              public hashCode(): number;
              public toString(): string;
              public getWeekdayText(): java.util.List<string>;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bl extends com.google.android.libraries.places.api.model.OpeningHours.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bl>;
              public constructor();
              public setWeekdayText(param0: java.util.List<string>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
              public setPeriods(param0: java.util.List<com.google.android.libraries.places.api.model.Period>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bm extends com.google.android.libraries.places.api.model.Period {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bm>;
              public hashCode(): number;
              public toString(): string;
              public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
              public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bn extends com.google.android.libraries.places.api.model.Period.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bn>;
              public constructor();
              public setOpen(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
              public setClose(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
              public build(): com.google.android.libraries.places.api.model.Period;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bo extends com.google.android.libraries.places.api.model.PhotoMetadata {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bo>;
              public getHeight(): number;
              public getWidth(): number;
              public getAttributions(): string;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public a(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bp extends com.google.android.libraries.places.api.model.PhotoMetadata.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bp>;
              public constructor();
              public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
              public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
              public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bq extends com.google.android.libraries.places.api.model.Place {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bq>;
              public hashCode(): number;
              public getId(): string;
              public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
              public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
              public getPhoneNumber(): string;
              public toString(): string;
              public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
              public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
              public getAddress(): string;
              public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
              public getWebsiteUri(): android.net.Uri;
              public getName(): string;
              public getPriceLevel(): java.lang.Integer;
              public getUserRatingsTotal(): java.lang.Integer;
              public getLatLng(): com.google.android.gms.maps.model.LatLng;
              public equals(param0: any): boolean;
              public getAttributions(): java.util.List<string>;
              public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
              public getRating(): java.lang.Double;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class br extends com.google.android.libraries.places.api.model.Place.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.br>;
              public constructor();
              public setRating(param0: java.lang.Double): com.google.android.libraries.places.api.model.Place.Builder;
              public setWebsiteUri(param0: android.net.Uri): com.google.android.libraries.places.api.model.Place.Builder;
              public setPlusCode(param0: com.google.android.libraries.places.api.model.PlusCode): com.google.android.libraries.places.api.model.Place.Builder;
              public setAddressComponents(param0: com.google.android.libraries.places.api.model.AddressComponents): com.google.android.libraries.places.api.model.Place.Builder;
              public setId(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
              public setAttributions(param0: java.util.List<string>): com.google.android.libraries.places.api.model.Place.Builder;
              public setOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
              public setPhoneNumber(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
              public setUserRatingsTotal(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
              public setTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.Place.Builder;
              public setPhotoMetadatas(param0: java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>): com.google.android.libraries.places.api.model.Place.Builder;
              public setViewport(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.Place.Builder;
              public setName(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
              public setPriceLevel(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
              public setLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.Place.Builder;
              public setAddress(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bs extends com.google.android.libraries.places.api.model.PlaceLikelihood {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bs>;
              public getPlace(): com.google.android.libraries.places.api.model.Place;
              public hashCode(): number;
              public toString(): string;
              public getLikelihood(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bt extends com.google.android.libraries.places.api.model.PlusCode {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bt>;
              public getGlobalCode(): string;
              public getCompoundCode(): string;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bu extends com.google.android.libraries.places.api.model.PlusCode.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bu>;
              public constructor();
              public setGlobalCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
              public build(): com.google.android.libraries.places.api.model.PlusCode;
              public setCompoundCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bv extends com.google.android.libraries.places.api.model.RectangularBounds {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bv>;
              public getNortheast(): com.google.android.gms.maps.model.LatLng;
              public hashCode(): number;
              public toString(): string;
              public getSouthwest(): com.google.android.gms.maps.model.LatLng;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bw extends com.google.android.libraries.places.api.model.RectangularBounds.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bw>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class bx extends com.google.android.libraries.places.api.model.TimeOfWeek {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bx>;
              public hashCode(): number;
              public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
              public toString(): string;
              public equals(param0: any): boolean;
              public getTime(): com.google.android.libraries.places.api.model.LocalTime;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class by extends com.google.android.libraries.places.internal.ba {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.by>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.by>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class bz extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.by> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.bz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class c extends com.google.android.libraries.places.internal.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.c>;
              public constructor();
              public a(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ca extends com.google.android.libraries.places.internal.bc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ca>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ca>;
              public constructor();
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: java.util.List<com.google.android.libraries.places.api.model.AddressComponent>);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cb extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ca> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cb>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cc extends com.google.android.libraries.places.internal.bd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cc>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cc>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cd extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cc> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ce extends com.google.android.libraries.places.internal.bf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ce>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ce>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cf extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ce> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cf>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cg extends com.google.android.libraries.places.internal.bh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cg>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cg>;
              public constructor();
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: android.os.ParcelUuid);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ch extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cg> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ch>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ci extends com.google.android.libraries.places.internal.bi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ci>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ci>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cj extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ci> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cj>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ck extends com.google.android.libraries.places.internal.bk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ck>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ck>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cl extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ck> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cl>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cm extends com.google.android.libraries.places.internal.bm {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cm>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cm>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cn extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cm> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cn>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class co extends com.google.android.libraries.places.internal.bo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.co>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.co>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cp extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.co> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cq extends com.google.android.libraries.places.internal.bq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cq>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cq>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cr extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cq> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cs extends com.google.android.libraries.places.internal.bs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cs>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cs>;
              public constructor();
              public constructor(param0: com.google.android.libraries.places.api.model.Place, param1: number);
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ct extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cs> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ct>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cu extends com.google.android.libraries.places.internal.bt {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cu>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cu>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cv extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cu> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cv>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cw extends com.google.android.libraries.places.internal.bv {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cw>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cw>;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cx extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cw> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cx>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cy extends com.google.android.libraries.places.internal.bx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cy>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cy>;
              public constructor();
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: com.google.android.libraries.places.api.model.DayOfWeek, param1: com.google.android.libraries.places.api.model.LocalTime);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class cz extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.cy> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.cz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class d {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.d>;
              public static a: number;
              public static b: number;
              public static c: number;
              public d: com.google.android.gms.location.FusedLocationProviderClient;
              public e: com.google.android.libraries.places.internal.fv;
              public constructor(param0: com.google.android.gms.location.FusedLocationProviderClient, param1: com.google.android.libraries.places.internal.fv);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class da extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.DayOfWeek> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.da>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class db extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Field> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.db>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dc extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Type> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dc>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dd extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.TypeFilter> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dd>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class de extends com.google.android.libraries.places.api.net.FetchPhotoRequest {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.de>;
              public getMaxWidth(): java.lang.Integer;
              public getMaxHeight(): java.lang.Integer;
              public hashCode(): number;
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              public getPhotoMetadata(): com.google.android.libraries.places.api.model.PhotoMetadata;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class df extends com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.df>;
              public constructor();
              public setMaxHeight(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
              public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
              public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dg extends com.google.android.libraries.places.api.net.FetchPhotoResponse {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dg>;
              public constructor();
              public constructor(param0: android.graphics.Bitmap);
              public hashCode(): number;
              public toString(): string;
              public getBitmap(): android.graphics.Bitmap;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dh extends com.google.android.libraries.places.api.net.FetchPlaceRequest {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dh>;
              public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              public hashCode(): number;
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              public toString(): string;
              public equals(param0: any): boolean;
              public getPlaceId(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class di extends com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.di>;
              public constructor();
              public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
              public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dj extends com.google.android.libraries.places.api.net.FetchPlaceResponse {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dj>;
              public constructor();
              public getPlace(): com.google.android.libraries.places.api.model.Place;
              public hashCode(): number;
              public toString(): string;
              public constructor(param0: com.google.android.libraries.places.api.model.Place);
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dk extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dk>;
              public getQuery(): string;
              public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
              public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
              public hashCode(): number;
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              public toString(): string;
              public equals(param0: any): boolean;
              public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
              public getCountry(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dl extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dl>;
              public constructor();
              public setCountry(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setQuery(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
              public build(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dm extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dm>;
              public constructor();
              public constructor(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public getAutocompletePredictions(): java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dn extends com.google.android.libraries.places.api.net.FindCurrentPlaceRequest {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dn>;
              public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
              public hashCode(): number;
              public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dp extends com.google.android.libraries.places.api.net.FindCurrentPlaceResponse {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dp>;
              public constructor();
              public hashCode(): number;
              public constructor(param0: java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>);
              public toString(): string;
              public equals(param0: any): boolean;
              public getPlaceLikelihoods(): java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dq extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dq>;
              public a(param0: com.google.android.libraries.places.internal.r<any,any>, param1: com.google.android.libraries.places.internal.dv): com.google.android.gms.tasks.Task;
              public static a(param0: android.content.pm.PackageManager, param1: string): string;
              public a(param0: string, param1: java.util.Map, param2: com.google.android.libraries.places.internal.dv, param3: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task;
              public constructor(param0: com.bumptech.glide.RequestManager);
              public b(): any;
              public static a(param0: com.android.volley.RequestQueue, param1: com.google.android.libraries.places.internal.dr): com.google.android.libraries.places.internal.gg;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dr extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dr>;
              public constructor();
              public a(param0: string, param1: java.lang.Class): any;
              public static a(param0: com.bumptech.glide.RequestManager): com.google.android.libraries.places.internal.dq;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ds extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ds>;
              public c: com.google.android.libraries.places.internal.dz;
              public a(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>, param2: number, param3: number, param4: number): void;
              public a(): com.google.android.libraries.places.internal.jm.a;
              public a(param0: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>, param1: number, param2: number): void;
              public a(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest, param1: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>, param2: number, param3: number): void;
              public a(param0: com.google.android.gms.tasks.Task): com.google.android.libraries.places.internal.ik.c;
              public a(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest, param1: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>, param2: number, param3: number): void;
              public a(param0: com.google.android.libraries.places.internal.ik): void;
              public static a(param0: android.content.Context): com.google.android.gms.clearcut.ClearcutLogger;
              public b(): any;
              public constructor(param0: com.google.android.gms.clearcut.ClearcutLogger, param1: com.google.android.libraries.places.internal.dw, param2: com.google.android.libraries.places.internal.dz);
              public static a(param0: java.lang.Exception): com.google.android.gms.common.api.ApiException;
              public a(param0: com.google.android.libraries.places.internal.iy): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dt extends com.google.android.libraries.places.internal.dw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dt>;
              public hashCode(): number;
              public static a(param0: android.content.Context): com.google.android.libraries.places.internal.dw.a;
              public c(): com.google.android.libraries.places.internal.dw.b;
              public b(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public a(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class du extends com.google.android.libraries.places.internal.dw.a {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.du>;
              public a(param0: com.google.android.libraries.places.internal.dw.b): com.google.android.libraries.places.internal.dw.a;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dv extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dv>;
              public constructor();
              public static a(param0: com.google.android.libraries.places.internal.dw): com.google.android.libraries.places.internal.iy.a;
              public static a(param0: com.google.android.libraries.places.internal.iy): com.google.android.libraries.places.internal.ib;
              public a(param0: android.graphics.Bitmap): com.google.android.libraries.places.internal.dv;
              public static a(param0: com.google.android.libraries.places.internal.fw, param1: com.google.android.libraries.places.internal.d, param2: com.google.android.libraries.places.internal.j, param3: com.google.android.libraries.places.internal.ds, param4: com.google.android.libraries.places.internal.a): com.google.android.libraries.places.internal.u;
              public c(): com.google.android.libraries.places.internal.af;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class dw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dw>;
              public constructor();
              public static a(param0: android.content.Context): com.google.android.libraries.places.internal.dw.a;
              public c(): com.google.android.libraries.places.internal.dw.b;
              public b(): number;
              public a(): string;
            }
            export module dw {
              export abstract class a {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.dw.a>;
                public b(): com.google.android.libraries.places.internal.dw;
                public a(param0: com.google.android.libraries.places.internal.dw.b): com.google.android.libraries.places.internal.dw.a;
                public constructor();
              }
              export class b {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.dw.b>;
                public static a: com.google.android.libraries.places.internal.dw.b;
                public static b: com.google.android.libraries.places.internal.dw.b;
                public static values(): native.Array<com.google.android.libraries.places.internal.dw.b>;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dx>;
              public static a(param0: java.lang.Throwable): void;
              public static a(param0: android.content.Context): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dy extends java.util.LinkedHashMap<java.lang.Long,java.lang.Integer> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dy>;
              public removeEldestEntry(param0: java.util.Map.Entry<java.lang.Long,java.lang.Integer>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class dz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.dz>;
              /**
               * Constructs a new instance of the com.google.android.libraries.places.internal.dz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: {
                c(): java.util.Locale;
              });
              public constructor();
              public c(): java.util.Locale;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class e {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.e>;
              public then(param0: com.google.android.gms.tasks.Task): any;
              public constructor(param0: com.google.android.libraries.places.internal.d, param1: com.google.android.gms.tasks.CancellationToken);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ea {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ea>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.widget.AutocompleteFragment);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eb>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.widget.AutocompleteFragment);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ec {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ec>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.widget.AutocompleteSupportFragment);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ed {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ed>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.widget.AutocompleteSupportFragment);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ee extends android.os.Parcelable {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ee>;
              public static a: com.google.android.libraries.places.internal.ee;
              public static b: com.google.android.libraries.places.internal.ee;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ee>;
              public static valueOf(param0: string): com.google.android.libraries.places.internal.ee;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public describeContents(): number;
              public static values(): native.Array<com.google.android.libraries.places.internal.ee>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ef extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.ee> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ef>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eg extends com.google.android.libraries.places.internal.fh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eg>;
              public b(): com.google.android.libraries.places.api.model.LocationBias;
              public a(): com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.api.model.Place.Field>;
              public e(): com.google.android.libraries.places.api.model.TypeFilter;
              public hashCode(): number;
              public c(): com.google.android.libraries.places.api.model.LocationRestriction;
              public d(): string;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eh extends com.google.android.libraries.places.internal.fi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eh>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ei {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ei>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ej {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ej>;
              public static a: android.view.View.OnTouchListener;
              public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ek {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ek>;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
              public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class el {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.el>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class em {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.em>;
              public onEditorAction(param0: android.widget.TextView, param1: number, param2: android.view.KeyEvent): boolean;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class en {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.en>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eo>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ep {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ep>;
              public onClick(param0: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eq>;
              public constructor(param0: com.google.android.libraries.places.internal.fs, param1: com.google.android.libraries.places.internal.eu);
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class er {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.er>;
              public afterTextChanged(param0: android.text.Editable): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
              public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
              public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class es extends com.google.android.libraries.places.widget.listener.PlaceSelectionListener {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.es>;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
              public onError(param0: com.google.android.gms.common.api.Status): void;
              public onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class et {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.et>;
              public onScrollStateChanged(param0: global.androidx.core.widget.RecyclerView, param1: number): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class eu {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.eu>;
              public b: string;
              public c: string;
              public d: boolean;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.eu>;
              public constructor(param0: com.google.android.libraries.places.internal.eu.a, param1: string, param2: string, param3: boolean);
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public a(param0: string): void;
              public equals(param0: any): boolean;
              public a(): boolean;
            }
            export module eu {
              export class a extends android.os.Parcelable {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.eu.a>;
                public static a: com.google.android.libraries.places.internal.eu.a;
                public static b: com.google.android.libraries.places.internal.eu.a;
                public static c: com.google.android.libraries.places.internal.eu.a;
                public static d: com.google.android.libraries.places.internal.eu.a;
                public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.eu.a>;
                public describeContents(): number;
                public static valueOf(param0: string): com.google.android.libraries.places.internal.eu.a;
                public static values(): native.Array<com.google.android.libraries.places.internal.eu.a>;
                public writeToParcel(param0: android.os.Parcel, param1: number): void;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ev extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.eu> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ev>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ew extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.eu.a> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ew>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ex {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ex>;
              public b: com.google.android.libraries.places.internal.fh;
              public c: com.google.android.gms.tasks.CancellationTokenSource;
              public d: boolean;
              public e: com.google.android.libraries.places.internal.fe;
              public f: com.google.android.libraries.places.widget.listener.PlaceSelectionListener;
              public g: com.google.android.libraries.places.internal.fy;
              public h: com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
              public getItemId(param0: number): number;
              public getItemViewType(param0: number): number;
              public getView(param0: number, param1: android.view.View, param2: android.view.ViewGroup): android.view.View;
              public constructor(param0: android.content.Context, param1: com.google.android.libraries.places.api.net.PlacesClient, param2: com.google.android.libraries.places.internal.fh);
              public registerDataSetObserver(param0: android.database.DataSetObserver): void;
              public getCount(): number;
              public hasStableIds(): boolean;
              public getFilter(): android.widget.Filter;
              public isEnabled(param0: number): boolean;
              public onItemClick(param0: android.widget.AdapterView<any>, param1: android.view.View, param2: number, param3: number): void;
              public a(param0: com.google.android.libraries.places.internal.fe): void;
              public getViewTypeCount(): number;
              public a(param0: android.view.View, param1: number): void;
              public areAllItemsEnabled(): boolean;
              public a(param0: android.view.View): void;
              public isEmpty(): boolean;
              public a(param0: number, param1: com.google.android.libraries.places.api.model.AutocompletePrediction): void;
              public a(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ey {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ey>;
              public onSuccess(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ez {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ez>;
              public onFailure(param0: java.lang.Exception): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class f {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.f>;
              public then(param0: com.google.android.gms.tasks.Task): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fa {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fa>;
              public constructor(param0: com.google.android.libraries.places.internal.ex);
              public publishResults(param0: string, param1: android.widget.Filter.FilterResults): void;
              public convertResultToString(param0: any): string;
              public performFiltering(param0: string): android.widget.Filter.FilterResults;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fb>;
              public run(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fc>;
              public onSuccess(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fd {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fd>;
              public onFailure(param0: java.lang.Exception): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fe {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fe>;
              public b: com.google.android.gms.common.api.Status;
              public c: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>;
              public d: number;
              public e: com.google.android.libraries.places.api.model.Place;
              public static f: com.google.android.libraries.places.internal.fe;
              public static g: com.google.android.libraries.places.internal.fe;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.fe>;
              public static a(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>): com.google.android.libraries.places.internal.fe;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public static a(param0: com.google.android.libraries.places.internal.fe, param1: com.google.android.gms.common.api.Status): com.google.android.libraries.places.internal.fe;
              public static a(param0: android.os.Parcel): com.google.android.libraries.places.internal.fe;
              public equals(param0: any): boolean;
              public static a(param0: com.google.android.libraries.places.internal.fe, param1: com.google.android.libraries.places.api.model.Place): com.google.android.libraries.places.internal.fe;
              public a(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ff extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.fe> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ff>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fg extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fg>;
              public a(param0: android.content.Context): number;
              public d(): number;
              public c(): string;
              public b(): any;
              public constructor(param0: android.content.Context);
              public a(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class fh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fh>;
              public constructor();
              public b(): com.google.android.libraries.places.api.model.LocationBias;
              public a(): com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.api.model.Place.Field>;
              public e(): com.google.android.libraries.places.api.model.TypeFilter;
              public c(): com.google.android.libraries.places.api.model.LocationRestriction;
              public d(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class fi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fi>;
              public a(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.internal.fi;
              public a(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.internal.fi;
              public a(param0: string): com.google.android.libraries.places.internal.fi;
              public a(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.internal.fi;
              public a(): com.google.android.libraries.places.internal.fh;
              public a(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.internal.fi;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fj extends global.androidx.core.widget.RecyclerView.Adapter<global.androidx.core.widget.RecyclerView.ViewHolder> implements android.widget.Filterable  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fj>;
              public c: number;
              public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): global.androidx.core.widget.RecyclerView.ViewHolder;
              public registerAdapterDataObserver(param0: global.androidx.core.widget.RecyclerView.AdapterDataObserver): void;
              public getItemId(param0: number): number;
              public onBindViewHolder(param0: global.androidx.core.widget.RecyclerView.ViewHolder, param1: number): void;
              public getItemViewType(param0: number): number;
              public constructor(param0: com.google.android.libraries.places.internal.ex);
              public getItemCount(): number;
              public a(): com.google.android.libraries.places.internal.fa;
              public b(): com.google.android.libraries.places.internal.fe;
              public unregisterAdapterDataObserver(param0: global.androidx.core.widget.RecyclerView.AdapterDataObserver): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fk {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fk>;
              public onChanged(): void;
              public onInvalidated(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fl>;
              public onChanged(): void;
              public onInvalidated(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fm extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fm>;
              public constructor();
              public a(param0: string, param1: android.os.Parcelable): void;
              public a(param0: string, param1: string): void;
              public a(param0: android.content.Context, param1: java.lang.Class<any>): android.content.Intent;
              public b(): any;
              public a(param0: string, param1: java.io.Serializable): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fn {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fn>;
              public a: java.util.ArrayList<global.androidx.core.widget.RecyclerView.ViewHolder>;
              public isRunning(): boolean;
              public animateAdd(param0: global.androidx.core.widget.RecyclerView.ViewHolder): boolean;
              public endAnimation(param0: global.androidx.core.widget.RecyclerView.ViewHolder): void;
              public constructor(param0: android.content.res.Resources);
              public endAnimations(): void;
              public runPendingAnimations(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fo {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fo>;
              public onAnimationStart(param0: android.animation.Animator): void;
              public onAnimationCancel(param0: android.animation.Animator): void;
              public onAnimationEnd(param0: android.animation.Animator): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fp>;
              public constructor(param0: android.view.View);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fq>;
              public a: number;
              public b: boolean;
              public constructor(param0: android.view.View);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fr {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fr>;
              public onClick(param0: android.view.View): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fs extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fs>;
              public n: boolean;
              public o: com.google.android.libraries.places.internal.eu;
              public p: boolean;
              public q: boolean;
              public r: android.text.TextWatcher;
              public d(): void;
              public g(): void;
              public a(param0: com.google.android.libraries.places.internal.fe, param1: com.google.android.libraries.places.internal.eu): void;
              public a(): void;
              public b(param0: com.google.android.libraries.places.internal.fe, param1: com.google.android.libraries.places.internal.eu): void;
              public b(param0: com.google.android.libraries.places.internal.eu): void;
              public c(param0: com.google.android.libraries.places.internal.eu): void;
              public a(param0: com.google.android.libraries.places.internal.eu): void;
              public j(): void;
              public c(): void;
              public b(): any;
              public k(): void;
              public a(param0: android.os.Bundle): void;
              public l(): void;
              public a(param0: number, param1: com.google.android.libraries.places.api.model.Place, param2: com.google.android.gms.common.api.Status): void;
              public f(): void;
              public h(): void;
              public c(param0: com.google.android.libraries.places.internal.fe, param1: com.google.android.libraries.places.internal.eu): void;
              public constructor(param0: global.androidx.core.app.AppCompatActivity, param1: android.os.Bundle, param2: com.google.android.libraries.places.internal.fj, param3: com.google.android.libraries.places.internal.ge, param4: com.google.android.libraries.places.internal.a);
              public e(): void;
              public a(param0: com.google.android.libraries.places.api.model.Place): void;
              public m(): void;
              public i(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ft extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ft>;
              public constructor();
              public static a(param0: string, param1: string): string;
              public static b(param0: string): android.os.HandlerThread;
              public static a(param0: com.google.android.libraries.places.internal.ax, param1: com.google.android.libraries.places.internal.fg, param2: com.google.android.libraries.places.internal.gg, param3: com.google.android.libraries.places.internal.dq): com.google.android.libraries.places.internal.fw;
              public static a(param0: string): number;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fu extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fu>;
              public static a(param0: android.net.wifi.WifiInfo, param1: string): boolean;
              public static a(param0: string): com.google.android.libraries.places.internal.i;
              public g(): number;
              public constructor(param0: android.net.wifi.WifiInfo, param1: android.net.wifi.ScanResult);
              public static a(param0: com.google.android.gms.location.FusedLocationProviderClient, param1: com.google.android.libraries.places.internal.fv): com.google.android.libraries.places.internal.d;
              public static a(param0: android.graphics.drawable.Drawable, param1: number): void;
              public constructor(param0: string, param1: number, param2: com.google.android.libraries.places.internal.i, param3: boolean, param4: number);
              public c(): string;
              public b(): any;
              public static a(param0: android.app.Activity): global.androidx.core.widget.Toolbar;
              public e(): com.google.android.libraries.places.internal.i;
              public f(): boolean;
              public d(): number;
              public constructor(param0: android.net.wifi.WifiInfo, param1: string, param2: string, param3: number, param4: number);
              public static a(param0: android.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
              public static a(): com.google.android.libraries.places.internal.a;
              public static b(param0: android.content.Context): android.net.wifi.WifiManager;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fv extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fv>;
              public a(param0: com.google.android.gms.tasks.Task, param1: com.google.android.gms.tasks.CancellationToken, param2: number, param3: string): com.google.android.gms.tasks.Task;
              public static a(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: com.google.android.gms.tasks.Task): com.google.android.gms.tasks.Task;
              public a(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: number, param2: string): boolean;
              public a(param0: com.google.android.gms.tasks.TaskCompletionSource<any>): boolean;
              public static a(param0: number, param1: number, param2: number): number;
              public constructor(param0: com.google.android.libraries.places.internal.ft);
              public static a(param0: android.content.Context): com.google.android.gms.location.FusedLocationProviderClient;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fw extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fw>;
              public c: com.google.android.libraries.places.internal.gg;
              public d: com.google.android.libraries.places.internal.dq;
              public static a(param0: android.content.Context, param1: android.view.View): void;
              public constructor(param0: com.google.android.libraries.places.internal.ax, param1: com.google.android.libraries.places.internal.fg, param2: com.google.android.libraries.places.internal.gg, param3: com.google.android.libraries.places.internal.dq);
              public static a(param0: android.content.Context): com.android.volley.RequestQueue;
              public a(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
              public a(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
              public static a(param0: android.net.wifi.WifiManager, param1: com.google.android.libraries.places.internal.a): com.google.android.libraries.places.internal.j;
              public static b(param0: android.content.Context): com.bumptech.glide.RequestManager;
              public a(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: android.location.Location, param2: com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.internal.fu>): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
              public a(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fx extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fx>;
              public a(): com.google.android.libraries.places.api.net.PlacesClient;
              public constructor(param0: android.content.Context, param1: com.google.android.libraries.places.internal.aw, param2: com.google.android.libraries.places.internal.dw);
              public b(param0: android.content.Context): void;
              public j(): com.google.android.gms.location.FusedLocationProviderClient;
              public static a(param0: android.content.Context): com.bumptech.glide.RequestManager;
              public e(): com.android.volley.RequestQueue;
              public static k(): com.google.android.libraries.places.internal.fv;
              public l(): com.google.android.libraries.places.internal.d;
              public o(): com.google.android.gms.clearcut.ClearcutLogger;
              public static c(): com.google.android.libraries.places.internal.gb;
              public d(): com.google.android.libraries.places.internal.fg;
              public i(): com.google.android.libraries.places.internal.fw;
              public g(): com.bumptech.glide.RequestManager;
              public p(): com.google.android.libraries.places.internal.ds;
              public b(): any;
              public q(): com.google.android.libraries.places.internal.u;
              public f(): com.google.android.libraries.places.internal.gg;
              public h(): com.google.android.libraries.places.internal.dq;
              public m(): android.net.wifi.WifiManager;
              public n(): com.google.android.libraries.places.internal.j;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fy extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fy>;
              public a(param0: com.google.android.libraries.places.internal.fe): void;
              public constructor(param0: com.google.android.libraries.places.internal.fs);
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class fz extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.fz>;
              public a(): com.google.android.libraries.places.internal.fs;
              public b(): any;
              public static c(): com.google.android.libraries.places.internal.ga;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class g {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.g>;
              public onComplete(param0: com.google.android.gms.tasks.Task): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ga extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ga>;
              public a(): com.google.android.libraries.places.internal.fz;
              public b(param0: global.androidx.core.app.AppCompatActivity): com.google.android.libraries.places.internal.ga;
              public b(param0: android.os.Bundle): com.google.android.libraries.places.internal.ga;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gb extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gb>;
              public constructor();
              public static a(param0: android.content.Context): com.android.volley.RequestQueue;
              public b(param0: com.google.android.libraries.places.internal.dw): com.google.android.libraries.places.internal.gb;
              public b(param0: com.google.android.libraries.places.internal.aw): com.google.android.libraries.places.internal.gb;
              public c(param0: android.content.Context): com.google.android.libraries.places.internal.gb;
              public static a(param0: global.androidx.core.app.AppCompatActivity, param1: android.os.Bundle): com.google.android.libraries.places.internal.fz;
              public a(): com.google.android.libraries.places.internal.fx;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gc {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gc>;
              public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.internal.gc>;
              public b: com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
              public c: com.google.android.libraries.places.api.model.AutocompleteSessionToken;
              public d: boolean;
              public e: boolean;
              public f: boolean;
              public g: number;
              public h: number;
              public i: number;
              public j: number;
              public k: string;
              public l: number;
              public m: number;
              public n: boolean;
              public o: number;
              public p: number;
              public q: com.google.android.libraries.places.internal.a;
              public writeToParcel(param0: android.os.Parcel, param1: number): void;
              public hashCode(): number;
              public describeContents(): number;
              public constructor(param0: com.google.android.libraries.places.internal.ee, param1: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param2: string, param3: com.google.android.libraries.places.internal.a);
              public equals(param0: any): boolean;
              public a(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gd extends android.os.Parcelable.Creator<com.google.android.libraries.places.internal.gc> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gd>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ge {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ge>;
              public b: com.google.android.libraries.places.internal.dw;
              public a(param0: com.google.android.libraries.places.internal.gc): void;
              public constructor(param0: com.google.android.gms.clearcut.ClearcutLogger, param1: com.google.android.libraries.places.internal.dw);
              public a(param0: com.google.android.libraries.places.internal.iy): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gf extends android.os.Parcelable.Creator<com.google.android.libraries.places.widget.model.AutocompleteActivityMode> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gf>;
              public constructor();
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gg extends com.google.android.libraries.places.internal.ny<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gg>;
              public a(param0: com.google.android.libraries.places.internal.r<any,any>, param1: java.lang.Class): com.google.android.gms.tasks.Task;
              public constructor(param0: com.android.volley.RequestQueue, param1: com.google.android.libraries.places.internal.dr);
              public static a(param0: com.google.android.gms.clearcut.ClearcutLogger, param1: com.google.android.libraries.places.internal.dw, param2: com.google.android.libraries.places.internal.dz): com.google.android.libraries.places.internal.ds;
              public static a(param0: android.content.Context): android.content.Context;
              public a(param0: number, param1: string, param2: java.util.Map, param3: org.json.JSONObject, param4: java.lang.Class, param5: com.google.android.gms.tasks.CancellationToken): com.google.android.gms.tasks.Task;
              public b(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class gh<T>  extends java.util.Iterator<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gh<any>>;
              public a: com.google.android.libraries.places.internal.gi;
              public c: com.google.android.libraries.places.internal.gj;
              public d: boolean;
              public e: number;
              public f: number;
              public constructor();
              public constructor(param0: com.google.android.libraries.places.internal.gq, param1: string);
              public hasNext(): boolean;
              public remove(): void;
              public next(): any;
              public b(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gi {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gi>;
              public static a: com.google.android.libraries.places.internal.gi;
              public static b: com.google.android.libraries.places.internal.gi;
              public static c: com.google.android.libraries.places.internal.gi;
              public static d: com.google.android.libraries.places.internal.gi;
              public static values(): native.Array<com.google.android.libraries.places.internal.gi>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class gj extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gj>;
              public constructor();
              public a(param0: string): boolean;
              public a(param0: string, param1: number): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gk extends com.google.android.libraries.places.internal.gj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gk>;
              public constructor();
              public constructor(param0: string);
              public a(param0: string): boolean;
              public a(param0: string, param1: number): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class gl extends com.google.android.libraries.places.internal.gj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gl>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gm extends com.google.android.libraries.places.internal.gl {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gm>;
              public a(param0: string): boolean;
              public a(param0: string, param1: number): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gn extends com.google.android.libraries.places.internal.hj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gn>;
              public static a(param0: any, param1: any): boolean;
              public a(param0: java.lang.Appendable, param1: java.util.Iterator): java.lang.Appendable;
              public static a(param0: native.Array<any>): number;
              public a(param0: string): com.google.android.libraries.places.internal.jt;
              public constructor(param0: string);
              public constructor(param0: com.google.android.libraries.places.internal.hj, param1: com.google.android.libraries.places.internal.hj);
              public constructor(param0: com.google.android.libraries.places.internal.hj);
              public a(param0: java.lang.Iterable<any>): string;
              public a(param0: java.util.Iterator<any>): string;
              public a(param0: any): string;
              public a(param0: java.lang.StringBuilder, param1: java.util.Iterator<any>): java.lang.StringBuilder;
              public a(): com.google.android.libraries.places.internal.hj;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class go {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.go>;
              public static a(param0: string, param1: native.Array<any>): string;
              public static a(param0: java.util.List<any>, param1: any): boolean;
              public static a(param0: string): string;
              public static e(param0: java.util.List<any>, param1: any): number;
              public static a(param0: boolean, param1: any): void;
              public static b(param0: number, param1: number): number;
              public static c(param0: number, param1: number, param2: string): number;
              public static a(param0: boolean, param1: string, param2: any, param3: any, param4: any): void;
              public static a(param0: number, param1: number): number;
              public static a(param0: boolean, param1: string, param2: string): void;
              public static c(param0: number, param1: number): number;
              public static a(param0: java.util.Set<any>, param1: any): boolean;
              public static b(param0: boolean, param1: any): void;
              public static a(param0: java.util.Map<any,any>, param1: any): boolean;
              public static a(param0: any): any;
              public static c(param0: any): number;
              public static b(param0: boolean): void;
              public static a(param0: number, param1: number, param2: number): void;
              public static a(param0: any, param1: number): any;
              public static b(param0: number): number;
              public static b(param0: boolean, param1: string, param2: any): void;
              public static b(param0: boolean, param1: string, param2: any, param3: any, param4: any): void;
              public static a(param0: java.util.Iterator<any>, param1: java.util.Iterator<any>): boolean;
              public static b(param0: java.util.List<any>, param1: any): number;
              public static b(param0: any, param1: any): void;
              public static a(param0: number, param1: string): number;
              public static a(param0: boolean, param1: string, param2: any): void;
              public static a(param0: boolean, param1: string, param2: number): void;
              public static a(param0: boolean): void;
              public static d(param0: java.util.List<any>, param1: any): number;
              public static a(param0: native.Array<any>, param1: number): native.Array<any>;
              public static b(param0: native.Array<any>, param1: number): native.Array<any>;
              public static a(param0: java.util.Set<any>): number;
              public static a(param0: native.Array<any>): native.Array<any>;
              public static d(param0: any): com.google.android.libraries.places.internal.hu<any>;
              public static a(param0: any, param1: any): any;
              public static a(param0: number): java.lang.StringBuilder;
              public static c(param0: java.util.List<any>, param1: any): number;
              public static a(param0: java.util.Map<any,any>): string;
              public static a(param0: number, param1: number, param2: string): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gp {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gp>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gq {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gq>;
              public a: com.google.android.libraries.places.internal.gj;
              public b: boolean;
              public c: com.google.android.libraries.places.internal.gs;
              public d: number;
              public constructor(param0: com.google.android.libraries.places.internal.gs);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gr extends com.google.android.libraries.places.internal.gh<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gr>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gs {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gs>;
              public constructor(param0: com.google.android.libraries.places.internal.gj);
              public b(param0: com.google.android.libraries.places.internal.gq, param1: string): com.google.android.libraries.places.internal.gh<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gt<E>  extends com.google.android.libraries.places.internal.hv<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gt<any>>;
              public constructor();
              public a(param0: number): any;
              public previousIndex(): number;
              public constructor(param0: number, param1: number);
              public previous(): any;
              public nextIndex(): number;
              public hasNext(): boolean;
              public hasPrevious(): boolean;
              public next(): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class gu<C>  extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gu<any>>;
              public static serialVersionUID: number;
              public a(param0: com.google.android.libraries.places.internal.gu<C>): number;
              public hashCode(): number;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gv extends com.google.android.libraries.places.internal.gu<java.lang.Comparable<any>> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gv>;
              public static b: com.google.android.libraries.places.internal.gv;
              public static serialVersionUID: number;
              public a(param0: com.google.android.libraries.places.internal.gu<any>): number;
              public hashCode(): number;
              public toString(): string;
              public a(param0: com.google.android.libraries.places.internal.gu<java.lang.Comparable<any>>): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gw<C>  extends com.google.android.libraries.places.internal.gu<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gw<any>>;
              public static serialVersionUID: number;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gx extends com.google.android.libraries.places.internal.gu<java.lang.Comparable<any>> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gx>;
              public static b: com.google.android.libraries.places.internal.gx;
              public static serialVersionUID: number;
              public a(param0: com.google.android.libraries.places.internal.gu<any>): number;
              public hashCode(): number;
              public toString(): string;
              public a(param0: com.google.android.libraries.places.internal.gu<java.lang.Comparable<any>>): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class gy<C>  extends com.google.android.libraries.places.internal.gu<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gy<any>>;
              public static serialVersionUID: number;
              public hashCode(): number;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class gz<E>  extends java.util.AbstractCollection<any> implements java.io.Serializable  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.gz<any>>;
              public contains(param0: any): boolean;
              public add(param0: any): boolean;
              public remove(param0: any): boolean;
              public removeAll(param0: java.util.Collection<any>): boolean;
              public toArray(param0: native.Array<any>): native.Array<any>;
              public clear(): void;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public toArray(): native.Array<any>;
              public e(): com.google.android.libraries.places.internal.ha<any>;
              public addAll(param0: java.util.Collection<any>): boolean;
              public retainAll(param0: java.util.Collection<any>): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class h {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.h>;
              public onLocationResult(param0: com.google.android.gms.location.LocationResult): void;
              public onLocationAvailability(param0: com.google.android.gms.location.LocationAvailability): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class ha<E>  extends com.google.android.libraries.places.internal.gz<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ha<any>>;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.ha<any>;
              public contains(param0: any): boolean;
              public remove(param0: number): any;
              public lastIndexOf(param0: any): number;
              public hashCode(): number;
              public remove(param0: any): boolean;
              public indexOf(param0: any): number;
              public addAll(param0: java.util.Collection<any>): boolean;
              public static a(param0: any): com.google.android.libraries.places.internal.ha<any>;
              public addAll(param0: number, param1: java.util.Collection<any>): boolean;
              public static a(param0: java.util.Collection): com.google.android.libraries.places.internal.ha<any>;
              public set(param0: number, param1: any): any;
              public add(param0: any): boolean;
              public add(param0: number, param1: any): void;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public e(): com.google.android.libraries.places.internal.ha<any>;
              public static g(): com.google.android.libraries.places.internal.ha<any>;
              public equals(param0: any): boolean;
              public a(param0: number, param1: number): com.google.android.libraries.places.internal.ha<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hb {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hb>;
              public static serialVersionUID: number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hc extends com.google.android.libraries.places.internal.ha<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hc>;
              public static a(param0: any): com.google.android.libraries.places.internal.ha<any>;
              public static a(param0: java.util.Collection): com.google.android.libraries.places.internal.ha<any>;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.ha<any>;
              public size(): number;
              public get(param0: number): any;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public a(param0: number, param1: number): com.google.android.libraries.places.internal.ha<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class hd<K, V>  extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hd<any,any>>;
              public getOrDefault(param0: any, param1: V): V;
              public get(param0: any): V;
              public hashCode(): number;
              public containsKey(param0: any): boolean;
              public clear(): void;
              public put(param0: K, param1: V): V;
              public remove(param0: any): V;
              public toString(): string;
              public isEmpty(): boolean;
              public equals(param0: any): boolean;
              public containsValue(param0: any): boolean;
              public putAll(param0: java.util.Map<any,any>): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class he<K, V>  extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.he<any,any>>;
              public constructor();
              public a(): com.google.android.libraries.places.internal.hd<K,V>;
              public a(param0: K, param1: V): com.google.android.libraries.places.internal.he<K,V>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hf {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hf>;
              public static serialVersionUID: number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class hg<E>  extends com.google.android.libraries.places.internal.gz<any> implements java.util.Set<any>  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hg<any>>;
              public hashCode(): number;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.hg<any>;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public e(): com.google.android.libraries.places.internal.ha<any>;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hh {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hh>;
              public static serialVersionUID: number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hi extends com.google.android.libraries.places.internal.hu<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hi>;
              public constructor();
              public hasNext(): boolean;
              public next(): any;
              public constructor(param0: any);
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hj {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hj>;
              public static a(param0: any, param1: any): boolean;
              public a(param0: java.lang.Appendable, param1: java.util.Iterator): java.lang.Appendable;
              public static a(param0: native.Array<any>): number;
              public a(param0: string): com.google.android.libraries.places.internal.jt;
              public constructor(param0: string);
              public constructor(param0: com.google.android.libraries.places.internal.hj);
              public a(param0: java.lang.Iterable<any>): string;
              public a(param0: java.util.Iterator<any>): string;
              public a(param0: any): string;
              public a(param0: java.lang.StringBuilder, param1: java.util.Iterator<any>): java.lang.StringBuilder;
              public a(): com.google.android.libraries.places.internal.hj;
              public static b(param0: string): com.google.android.libraries.places.internal.hj;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hk<C>  extends com.google.android.libraries.places.internal.hl<any> implements java.io.Serializable  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hk<any>>;
              public static serialVersionUID: number;
              public hashCode(): number;
              public static a(param0: java.lang.Comparable, param1: java.lang.Comparable): com.google.android.libraries.places.internal.hk<any>;
              public toString(): string;
              public b(param0: any): boolean;
              public equals(param0: any): boolean;
              public static a(param0: java.lang.Comparable): com.google.android.libraries.places.internal.hk<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hl<C>  extends java.io.Serializable {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hl<any>>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hm<E>  extends com.google.android.libraries.places.internal.ha<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hm<any>>;
              public static a: com.google.android.libraries.places.internal.ha<any>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hn<K, V>  extends com.google.android.libraries.places.internal.hd<any,any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hn<any,any>>;
              public static serialVersionUID: number;
              public get(param0: any): any;
              public size(): number;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ho<K, V>  extends com.google.android.libraries.places.internal.hg<java.util.Map.Entry<any,any>> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ho<any,any>>;
              public b: number;
              public c: number;
              public a(): com.google.android.libraries.places.internal.hu<java.util.Map.Entry<any,any>>;
              public contains(param0: any): boolean;
              public size(): number;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.hg<any>;
              public a(): com.google.android.libraries.places.internal.hu<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hp extends com.google.android.libraries.places.internal.ha<java.util.Map.Entry<any,any>> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hp>;
              public size(): number;
              public f(): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hq<K>  extends com.google.android.libraries.places.internal.hg<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hq<any>>;
              public contains(param0: any): boolean;
              public size(): number;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.hg<any>;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public e(): com.google.android.libraries.places.internal.ha<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hr extends com.google.android.libraries.places.internal.ha<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hr>;
              public size(): number;
              public get(param0: number): any;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hs<E>  extends com.google.android.libraries.places.internal.hg<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hs<any>>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.hg<any>;
              public a(): com.google.android.libraries.places.internal.hu<any>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ht<E>  extends com.google.android.libraries.places.internal.hg<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ht<any>>;
              public contains(param0: any): boolean;
              public size(): number;
              public hashCode(): number;
              public static a(param0: native.Array<any>): com.google.android.libraries.places.internal.hg<any>;
              public a(): com.google.android.libraries.places.internal.hu<any>;
              public toString(): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class hu<E>  extends java.util.Iterator<any> {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hu<any>>;
              public constructor();
              public remove(): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class hv<E>  extends com.google.android.libraries.places.internal.hu<any> implements java.util.ListIterator<any>  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hv<any>>;
              public constructor();
              public set(param0: any): void;
              public add(param0: any): void;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export abstract class hw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hw>;
              public a(param0: native.Array<number>, param1: number, param2: number): string;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hx {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hx>;
              public a: native.Array<string>;
              public b: number;
              public c: number;
              public d: number;
              public e: number;
              public f: native.Array<number>;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hy extends com.google.android.libraries.places.internal.ia {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hy>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class hz extends com.google.android.libraries.places.internal.ia {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.hz>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class i {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.i>;
              public static a: com.google.android.libraries.places.internal.i;
              public static b: com.google.android.libraries.places.internal.i;
              public static c: com.google.android.libraries.places.internal.i;
              public static d: com.google.android.libraries.places.internal.i;
              public static values(): native.Array<com.google.android.libraries.places.internal.i>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ia extends com.google.android.libraries.places.internal.hw {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ia>;
              public b: com.google.android.libraries.places.internal.hx;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ib extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ib,com.google.android.libraries.places.internal.ib.a> implements com.google.android.libraries.places.internal.mc  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ib>;
              public b: number;
              public c: com.google.android.libraries.places.internal.iy;
              public static d: com.google.android.libraries.places.internal.ib;
              public k(): com.google.android.libraries.places.internal.ma;
              public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
              public b(): com.google.android.libraries.places.internal.kc;
              public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
              public h(): number;
              public i(): com.google.android.libraries.places.internal.mb;
              public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
              public g(): boolean;
              public a(param0: com.google.android.libraries.places.internal.kk): void;
              public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
              public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
            }
            export module ib {
              export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ib,com.google.android.libraries.places.internal.ib.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ib.a>;
                public a(): any;
                public d(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                public c(): com.google.android.libraries.places.internal.ma;
                public g(): boolean;
                public a(param0: any): any;
                public k(): com.google.android.libraries.places.internal.ma;
              }
              export class b extends com.google.android.libraries.places.internal.ky {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ib.b>;
                public a(): number;
                public static values(): native.Array<com.google.android.libraries.places.internal.ib.b>;
                public static b(): com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ic extends java.lang.Object {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ic>;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class id extends com.google.android.libraries.places.internal.kz {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.id>;
              public static a: com.google.android.libraries.places.internal.kz;
            }
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module libraries {
        export module places {
          export module internal {
            export class ie extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ie,com.google.android.libraries.places.internal.ie.a> implements com.google.android.libraries.places.internal.mc  {
              public static class: java.lang.Class<com.google.android.libraries.places.internal.ie>;
              public b: string;
              public c: number;
              public static d: com.google.android.libraries.places.internal.ie;
              public k(): com.google.android.libraries.places.internal.ma;
              public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
              public b(): com.google.android.libraries.places.internal.kc;
              public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
              public h(): number;
              public i(): com.google.android.libraries.places.internal.mb;
              public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
              public g(): boolean;
              public a(param0: com.google.android.libraries.places.internal.kk): void;
              public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
              public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
            }
            export module ie {
              export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ie,com.google.android.libraries.places.internal.ie.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ie.a>;
                public a(): any;
                public d(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                public c(): com.google.android.libraries.places.internal.ma;
                public g(): boolean;
                public a(param0: any): any;
                public k(): com.google.android.libraries.places.internal.ma;
              }
            }
          }
        }
      }
    }
  }
}

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ig extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ig,com.google.android.libraries.places.internal.ig.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ig>;
                public b: any;
                public c: any;
                public static d: com.google.android.libraries.places.internal.ig;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ig {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ig,com.google.android.libraries.places.internal.ig.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ig.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ih extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ih,com.google.android.libraries.places.internal.ih.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ih>;
                public b: number;
                public static c: com.google.android.libraries.places.internal.ih;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ih {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ih,com.google.android.libraries.places.internal.ih.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ih.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ii extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ii,com.google.android.libraries.places.internal.ii.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ii>;
                public b: number;
                public static c: com.google.android.libraries.places.internal.ii;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ii {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ii,com.google.android.libraries.places.internal.ii.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ii.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ij extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ij,com.google.android.libraries.places.internal.ij.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ij>;
                public b: number;
                public c: number;
                public static d: com.google.android.libraries.places.internal.ij;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ij {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ij,com.google.android.libraries.places.internal.ij.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ij.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ik extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ik,com.google.android.libraries.places.internal.ik.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ik>;
                public b: number;
                public c: number;
                public d: number;
                public e: com.google.android.libraries.places.internal.ij;
                public f: com.google.android.libraries.places.internal.ih;
                public static h: com.google.android.libraries.places.internal.ik;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
                public static a(): com.google.android.libraries.places.internal.ik.a;
              }
              export module ik {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ik,com.google.android.libraries.places.internal.ik.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ik.a>;
                  public a(): any;
                  public a(param0: com.google.android.libraries.places.internal.ik.b): com.google.android.libraries.places.internal.ik.a;
                  public a(param0: com.google.android.libraries.places.internal.ik.c): com.google.android.libraries.places.internal.ik.a;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public a(param0: any): any;
                  public g(): boolean;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public a(param0: number): com.google.android.libraries.places.internal.ik.a;
                }
                export class b extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ik.b>;
                  public static c: com.google.android.libraries.places.internal.ik.b;
                  public static d: com.google.android.libraries.places.internal.ik.b;
                  public e: number;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                  public static values(): native.Array<com.google.android.libraries.places.internal.ik.b>;
                }
                export class c extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ik.c>;
                  public static c: com.google.android.libraries.places.internal.ik.c;
                  public static d: com.google.android.libraries.places.internal.ik.c;
                  public e: number;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                  public static values(): native.Array<com.google.android.libraries.places.internal.ik.c>;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class il extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.il>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class im extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.im>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class io extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.io>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ip extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ip,com.google.android.libraries.places.internal.ip.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ip>;
                public b: com.google.android.libraries.places.internal.lc<string>;
                public static c: com.google.android.libraries.places.internal.ip;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ip {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ip,com.google.android.libraries.places.internal.ip.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ip.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iq extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.iq,com.google.android.libraries.places.internal.iq.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iq>;
                public b: com.google.android.libraries.places.internal.ig;
                public static c: com.google.android.libraries.places.internal.iq;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module iq {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.iq,com.google.android.libraries.places.internal.iq.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.iq.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ir extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ir,com.google.android.libraries.places.internal.ir.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ir>;
                public b: any;
                public static c: com.google.android.libraries.places.internal.ir;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ir {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ir,com.google.android.libraries.places.internal.ir.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ir.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class is extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.is,com.google.android.libraries.places.internal.is.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.is>;
                public b: com.google.android.libraries.places.internal.ig;
                public c: com.google.android.libraries.places.internal.ip;
                public static d: com.google.android.libraries.places.internal.is;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module is {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.is,com.google.android.libraries.places.internal.is.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.is.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class it extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.it,com.google.android.libraries.places.internal.it.b> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.it>;
                public b: number;
                public c: number;
                public d: boolean;
                public e: boolean;
                public f: boolean;
                public h: number;
                public i: number;
                public j: number;
                public l: number;
                public m: number;
                public n: boolean;
                public o: number;
                public static p: com.google.android.libraries.places.internal.it;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module it {
                export class a extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.it.a>;
                  public c: number;
                  public a(): number;
                  public static values(): native.Array<com.google.android.libraries.places.internal.it.a>;
                  public static b(): com.google.android.libraries.places.internal.kz;
                }
                export class b extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.it,com.google.android.libraries.places.internal.it.b> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.it.b>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public a(param0: com.google.android.libraries.places.internal.it.c): com.google.android.libraries.places.internal.it.b;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public a(param0: any): any;
                  public g(): boolean;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.it.a): com.google.android.libraries.places.internal.it.b;
                }
                export class c extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.it.c>;
                  public static c: com.google.android.libraries.places.internal.it.c;
                  public d: number;
                  public a(): number;
                  public static values(): native.Array<com.google.android.libraries.places.internal.it.c>;
                  public static b(): com.google.android.libraries.places.internal.kz;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iu extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iu>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iv extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iv>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iw extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iw>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ix extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ix>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iy extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.iy,com.google.android.libraries.places.internal.iy.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iy>;
                public b: number;
                public c: com.google.android.libraries.places.internal.ie;
                public d: any;
                public e: com.google.android.libraries.places.internal.jm;
                public f: com.google.android.libraries.places.internal.iq;
                public h: com.google.android.libraries.places.internal.jf;
                public i: com.google.android.libraries.places.internal.it;
                public j: com.google.android.libraries.places.internal.ik;
                public l: string;
                public m: string;
                public n: number;
                public static o: com.google.android.libraries.places.internal.iy;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module iy {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.iy,com.google.android.libraries.places.internal.iy.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.iy.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public a(param0: string): com.google.android.libraries.places.internal.iy.a;
                  public a(param0: com.google.android.libraries.places.internal.iy.b): com.google.android.libraries.places.internal.iy.a;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public a(param0: any): any;
                  public g(): boolean;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.jm): com.google.android.libraries.places.internal.iy.a;
                }
                export class b extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.iy.b>;
                  public static c: com.google.android.libraries.places.internal.iy.b;
                  public static d: com.google.android.libraries.places.internal.iy.b;
                  public static e: com.google.android.libraries.places.internal.iy.b;
                  public f: number;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                  public static values(): native.Array<com.google.android.libraries.places.internal.iy.b>;
                }
                export class c extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.iy.c>;
                  public static c: com.google.android.libraries.places.internal.iy.c;
                  public d: number;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                  public static values(): native.Array<com.google.android.libraries.places.internal.iy.c>;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class iz extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.iz>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class j {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.j>;
                public static a: number;
                public b: android.net.wifi.WifiManager;
                public c: com.google.android.libraries.places.internal.a;
                public constructor(param0: android.net.wifi.WifiManager, param1: com.google.android.libraries.places.internal.a);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ja extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ja>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jb extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jb>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jc extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jc>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jd extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.jd,com.google.android.libraries.places.internal.jd.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jd>;
                public b: com.google.android.libraries.places.internal.jl;
                public static c: com.google.android.libraries.places.internal.jd;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module jd {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.jd,com.google.android.libraries.places.internal.jd.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jd.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class je extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.je,com.google.android.libraries.places.internal.je.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.je>;
                public b: any;
                public static c: com.google.android.libraries.places.internal.je;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module je {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.je,com.google.android.libraries.places.internal.je.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.je.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jf extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.jf,com.google.android.libraries.places.internal.jf.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jf>;
                public b: number;
                public c: number;
                public d: com.google.android.libraries.places.internal.jl;
                public static e: com.google.android.libraries.places.internal.jf;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module jf {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.jf,com.google.android.libraries.places.internal.jf.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jf.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
                export class b extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jf.b>;
                  public c: number;
                  public a(): number;
                  public static values(): native.Array<com.google.android.libraries.places.internal.jf.b>;
                  public static b(): com.google.android.libraries.places.internal.kz;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jg extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jg>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jh extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jh>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ji extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.ji,com.google.android.libraries.places.internal.ji.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ji>;
                public b: number;
                public static c: com.google.android.libraries.places.internal.ji;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module ji {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.ji,com.google.android.libraries.places.internal.ji.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ji.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
                export class b extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.ji.b>;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                  public static values(): native.Array<com.google.android.libraries.places.internal.ji.b>;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jj extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jj>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jk extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jk>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jl extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.jl,com.google.android.libraries.places.internal.jl.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jl>;
                public static b: com.google.android.libraries.places.internal.jl;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
                public static a(): com.google.android.libraries.places.internal.jl.a;
              }
              export module jl {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.jl,com.google.android.libraries.places.internal.jl.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jl.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public a(param0: any): any;
                  public g(): boolean;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public a(param0: java.lang.Iterable<string>): com.google.android.libraries.places.internal.jl.a;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jm extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.jm,com.google.android.libraries.places.internal.jm.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jm>;
                public b: number;
                public c: string;
                public d: string;
                public e: com.google.android.libraries.places.internal.jp;
                public f: com.google.android.libraries.places.internal.je;
                public h: com.google.android.libraries.places.internal.jd;
                public i: com.google.android.libraries.places.internal.is;
                public static j: com.google.android.libraries.places.internal.jm;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module jm {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.jm,com.google.android.libraries.places.internal.jm.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jm.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public a(param0: any): any;
                  public g(): boolean;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.jm.b): com.google.android.libraries.places.internal.jm.a;
                }
                export class b extends com.google.android.libraries.places.internal.ky {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jm.b>;
                  public c: number;
                  public static values(): native.Array<com.google.android.libraries.places.internal.jm.b>;
                  public a(): number;
                  public static b(): com.google.android.libraries.places.internal.kz;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jn extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jn>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jo extends com.google.android.libraries.places.internal.kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jo>;
                public static a: com.google.android.libraries.places.internal.kz;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jp extends com.google.android.libraries.places.internal.kv<com.google.android.libraries.places.internal.jp,com.google.android.libraries.places.internal.jp.a> implements com.google.android.libraries.places.internal.mc  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jp>;
                public b: com.google.android.libraries.places.internal.ig;
                public static c: com.google.android.libraries.places.internal.jp;
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
              }
              export module jp {
                export class a extends com.google.android.libraries.places.internal.kv.a<com.google.android.libraries.places.internal.jp,com.google.android.libraries.places.internal.jp.a> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.jp.a>;
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jq {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jq>;
                public static a(param0: number, param1: number, param2: java.math.RoundingMode): number;
                public static a(param0: number, param1: java.math.RoundingMode): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jr {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jr>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class js {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.js>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jt {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jt>;
                public b: string;
                public a(param0: java.lang.Appendable, param1: java.util.Iterator): java.lang.Appendable;
                public constructor(param0: com.google.android.libraries.places.internal.hj, param1: string);
                public a(param0: java.lang.Iterable<any>): string;
                public a(param0: java.util.Iterator<any>): string;
                public a(param0: java.lang.StringBuilder, param1: java.util.Iterator<any>): java.lang.StringBuilder;
                public a(param0: java.util.Map<any,any>): string;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class ju<MessageType, BuilderType>  extends com.google.android.libraries.places.internal.ma {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ju<any,any>>;
                public q: number;
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public b(): com.google.android.libraries.places.internal.kc;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public g(): boolean;
                public c(): native.Array<number>;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class jv<MessageType, BuilderType>  extends com.google.android.libraries.places.internal.mb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jv<any,any>>;
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                public c(): com.google.android.libraries.places.internal.ma;
                public g(): boolean;
                public a(): any;
                public a(param0: any): any;
                public d(): com.google.android.libraries.places.internal.ma;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class jw extends com.google.android.libraries.places.internal.mf {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jw>;
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public b(): com.google.android.libraries.places.internal.kc;
                public a(): com.google.android.libraries.places.internal.mf;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jx<MessageType>  extends com.google.android.libraries.places.internal.mj<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jx<any>>;
                public a: any;
                public constructor();
                public constructor(param0: any);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class jy<E>  extends java.util.AbstractList<any> implements com.google.android.libraries.places.internal.lc<any>  {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jy<any>>;
                public remove(param0: number): any;
                public hashCode(): number;
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public remove(param0: any): boolean;
                public clear(): void;
                public c(): void;
                public addAll(param0: java.util.Collection<any>): boolean;
                public addAll(param0: number, param1: java.util.Collection<any>): boolean;
                public set(param0: number, param1: any): any;
                public add(param0: any): boolean;
                public removeAll(param0: java.util.Collection<any>): boolean;
                public add(param0: number, param1: any): void;
                public b(): void;
                public equals(param0: any): boolean;
                public a(): boolean;
                public retainAll(param0: java.util.Collection<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class jz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.jz>;
                public static a: java.lang.Class<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class k {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.k>;
                public static a(param0: com.android.volley.VolleyError): com.google.android.gms.common.api.ApiException;
                public static a(param0: com.google.android.libraries.places.internal.t): com.google.android.gms.common.api.ApiException;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ka extends com.google.android.libraries.places.internal.kt<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ka>;
                public constructor();
                public constructor(param0: number);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class kb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kb>;
                public constructor();
                public a(param0: native.Array<number>, param1: number, param2: number): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class kc extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kc>;
                public b(): native.Array<number>;
                public hashCode(): number;
                public static a(param0: string): com.google.android.libraries.places.internal.kc;
                public a(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
                public toString(): string;
                public d(): boolean;
                public c(): string;
                public a(param0: number): number;
                public a(): number;
                public a(param0: java.nio.charset.Charset): string;
                public a(param0: number, param1: number, param2: number): number;
                public a(param0: number, param1: number): com.google.android.libraries.places.internal.kc;
                public equals(param0: any): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kd extends com.google.android.libraries.places.internal.kf {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kd>;
                public a(): number;
                public hasNext(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ke extends java.util.Comparator<com.google.android.libraries.places.internal.kc> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ke>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class kf extends com.google.android.libraries.places.internal.ki {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kf>;
                public a(): number;
                public remove(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kg extends com.google.android.libraries.places.internal.kj {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kg>;
                public static serialVersionUID: number;
                public a(): number;
                public a(param0: java.nio.charset.Charset): string;
                public a(param0: number, param1: number, param2: number): number;
                public e(): number;
                public a(param0: number, param1: number): com.google.android.libraries.places.internal.kc;
                public a(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
                public static a(param0: string): com.google.android.libraries.places.internal.kc;
                public a(param0: number): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kh {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kh>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.kh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ki extends java.util.Iterator<java.lang.Byte> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ki>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ki interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(): number;
                });
                public constructor();
                public a(): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kj extends com.google.android.libraries.places.internal.kc {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kj>;
                public static serialVersionUID: number;
                public c: native.Array<number>;
                public a(): number;
                public a(param0: java.nio.charset.Charset): string;
                public a(param0: number, param1: number, param2: number): number;
                public e(): number;
                public a(param0: number, param1: number): com.google.android.libraries.places.internal.kc;
                public static a(param0: string): com.google.android.libraries.places.internal.kc;
                public a(param0: native.Array<number>, param1: number, param2: number, param3: number): void;
                public d(): boolean;
                public equals(param0: any): boolean;
                public a(param0: number): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class kk extends com.google.android.libraries.places.internal.kb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kk>;
                public static i(param0: number, param1: number): number;
                public static b(param0: native.Array<number>): number;
                public static a(): number;
                public static h(param0: number): number;
                public d(param0: number, param1: number): void;
                public a(param0: boolean): void;
                public static a(param0: com.google.android.libraries.places.internal.lj): number;
                public a(param0: native.Array<number>, param1: number, param2: number): void;
                public static c(param0: com.google.android.libraries.places.internal.ma): number;
                public static b(param0: number, param1: number): number;
                public static b(param0: com.google.android.libraries.places.internal.ma): number;
                public static j(param0: number): number;
                public h(): number;
                public b(param0: number, param1: number): void;
                public static c(param0: number, param1: com.google.android.libraries.places.internal.kc): number;
                public b(param0: number): void;
                public a(param0: com.google.android.libraries.places.internal.ma): void;
                public a(param0: number, param1: boolean): void;
                public a(param0: com.google.android.libraries.places.internal.kc): void;
                public a(param0: number, param1: com.google.android.libraries.places.internal.kc): void;
                public static f(): number;
                public static b(param0: string): number;
                public b(param0: number, param1: com.google.android.libraries.places.internal.kc): void;
                public static g(): number;
                public static a(param0: native.Array<number>): com.google.android.libraries.places.internal.kk;
                public c(param0: number): void;
                public static b(param0: number, param1: com.google.android.libraries.places.internal.lj): number;
                public static g(param0: number): number;
                public a(param0: number): void;
                public static e(): number;
                public a(param0: number, param1: string): void;
                public e(param0: number, param1: number): void;
                public a(param0: number, param1: number): void;
                public c(param0: number, param1: number): void;
                public static i(param0: number): number;
                public static b(): number;
                public static b(param0: com.google.android.libraries.places.internal.kc): number;
                public d(param0: number): void;
                public static d(param0: number, param1: com.google.android.libraries.places.internal.kc): number;
                public static c(): number;
                public static a(param0: number, param1: com.google.android.libraries.places.internal.lj): number;
                public static b(param0: number, param1: boolean): number;
                public static b(param0: number, param1: string): number;
                public static d(param0: number, param1: number): number;
                public static e(param0: number, param1: number): number;
                public a(param0: string): void;
                public a(param0: number, param1: com.google.android.libraries.places.internal.ma): void;
                public static f(param0: number, param1: number): number;
                public static g(param0: number, param1: number): number;
                public static d(param0: number): number;
                public static d(): number;
                public static h(param0: number, param1: number): number;
                public static f(param0: number): number;
                public static k(param0: number, param1: number): number;
                public static b(param0: number, param1: com.google.android.libraries.places.internal.ma): number;
                public static e(param0: number): number;
                public static j(param0: number, param1: number): number;
                public i(): void;
              }
              export module kk {
                export class a extends com.google.android.libraries.places.internal.kk {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kk.a>;
                  public static d(param0: number, param1: com.google.android.libraries.places.internal.kc): number;
                  public static a(): number;
                  public static h(param0: number): number;
                  public a(param0: number, param1: number): void;
                  public a(param0: boolean): void;
                  public b(param0: number, param1: number): void;
                  public e(param0: number, param1: number): void;
                  public static h(param0: number, param1: number): number;
                  public d(param0: number, param1: number): void;
                  public c(param0: number, param1: number): void;
                  public static e(param0: number, param1: number): number;
                  public c(param0: number): void;
                  public static c(param0: number, param1: com.google.android.libraries.places.internal.kc): number;
                  public static e(): number;
                  public a(param0: number): void;
                  public b(param0: number, param1: com.google.android.libraries.places.internal.kc): void;
                  public static b(param0: string): number;
                  public a(param0: number, param1: boolean): void;
                  public static d(param0: number, param1: number): number;
                  public static b(param0: com.google.android.libraries.places.internal.kc): number;
                  public b(param0: native.Array<number>, param1: number, param2: number): void;
                  public a(param0: native.Array<number>, param1: number, param2: number): void;
                  public static b(): number;
                  public static b(param0: number, param1: number): number;
                  public static a(param0: native.Array<number>): com.google.android.libraries.places.internal.kk;
                  public a(param0: com.google.android.libraries.places.internal.ma): void;
                  public a(param0: string): void;
                  public a(param0: number, param1: com.google.android.libraries.places.internal.ma): void;
                  public a(param0: number, param1: com.google.android.libraries.places.internal.kc): void;
                  public static b(param0: number, param1: com.google.android.libraries.places.internal.ma): number;
                  public static c(): number;
                  public static b(param0: number, param1: boolean): number;
                  public static b(param0: number, param1: com.google.android.libraries.places.internal.lj): number;
                  public a(param0: number, param1: string): void;
                  public d(param0: number): void;
                  public static a(param0: number, param1: com.google.android.libraries.places.internal.lj): number;
                  public b(param0: number): void;
                  public static b(param0: native.Array<number>): number;
                  public static e(param0: number): number;
                  public static b(param0: number, param1: string): number;
                  public static a(param0: com.google.android.libraries.places.internal.lj): number;
                  public static d(param0: number): number;
                  public h(): number;
                  public static b(param0: com.google.android.libraries.places.internal.ma): number;
                  public static c(param0: com.google.android.libraries.places.internal.ma): number;
                  public a(param0: com.google.android.libraries.places.internal.kc): void;
                  public static d(): number;
                }
                export class b {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kk.b>;
                  public static serialVersionUID: number;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kl {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kl>;
                public static a(): com.google.android.libraries.places.internal.km;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class km {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.km>;
                public static a(): com.google.android.libraries.places.internal.km;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kn<T>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kn<any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ko {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ko>;
                public static a: com.google.android.libraries.places.internal.kn<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kp<FieldDescriptorType>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kp<any>>;
                public static d: com.google.android.libraries.places.internal.kp<any>;
                public a(): void;
                public hashCode(): number;
                public c(): boolean;
                public a(param0: FieldDescriptorType): any;
                public static b(param0: com.google.android.libraries.places.internal.kq<any>, param1: any): number;
                public equals(param0: any): boolean;
                public a(param0: FieldDescriptorType, param1: any): void;
                public b(): java.util.Iterator<java.util.Map.Entry<FieldDescriptorType,any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kq<T>  extends java.lang.Comparable<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kq<any>>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.kq<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(): number;
                  b(): com.google.android.libraries.places.internal.nr;
                  c(): com.google.android.libraries.places.internal.ns;
                  d(): boolean;
                  e(): boolean;
                  f(): com.google.android.libraries.places.internal.mb;
                  g(): com.google.android.libraries.places.internal.mf;
                });
                public constructor();
                public f(): com.google.android.libraries.places.internal.mb;
                public g(): com.google.android.libraries.places.internal.mf;
                public a(): number;
                public b(): com.google.android.libraries.places.internal.nr;
                public d(): boolean;
                public c(): com.google.android.libraries.places.internal.ns;
                public e(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kr {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kr>;
                public static a: com.google.android.libraries.places.internal.kr;
                public static b: com.google.android.libraries.places.internal.kr;
                public static c: com.google.android.libraries.places.internal.kr;
                public static d: com.google.android.libraries.places.internal.kr;
                public static e: com.google.android.libraries.places.internal.kr;
                public static f: com.google.android.libraries.places.internal.kr;
                public static g: com.google.android.libraries.places.internal.kr;
                public h: number;
                public i: com.google.android.libraries.places.internal.ks;
                public static values(): native.Array<com.google.android.libraries.places.internal.kr>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ks {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ks>;
                public static a: com.google.android.libraries.places.internal.ks;
                public static b: com.google.android.libraries.places.internal.ks;
                public static c: com.google.android.libraries.places.internal.ks;
                public static d: com.google.android.libraries.places.internal.ks;
                public e: boolean;
                public static values(): native.Array<com.google.android.libraries.places.internal.ks>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kt<T>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kt<any>>;
                public constructor(param0: number);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ku extends com.google.android.libraries.places.internal.lz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ku>;
                public b(param0: java.lang.Class<any>): com.google.android.libraries.places.internal.ly;
                public a(param0: java.lang.Class<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class kv<MessageType, BuilderType>  extends com.google.android.libraries.places.internal.ju<any,any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kv<any,any>>;
                public r: com.google.android.libraries.places.internal.ng;
                public constructor();
                public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                public b(): com.google.android.libraries.places.internal.kc;
                public hashCode(): number;
                public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                public toString(): string;
                public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public g(): boolean;
                public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
                public equals(param0: any): boolean;
                public f(): com.google.android.libraries.places.internal.kv.a<any,any>;
                public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                public e(): void;
              }
              export module kv {
                export class a<MessageType, BuilderType>  extends com.google.android.libraries.places.internal.jv<any,any> {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kv.a<any,any>>;
                  public constructor(param0: any);
                  public a(): any;
                  public d(): com.google.android.libraries.places.internal.ma;
                  public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  public c(): com.google.android.libraries.places.internal.ma;
                  public g(): boolean;
                  public a(param0: any): any;
                  public constructor();
                  public b(): void;
                }
                export abstract class b<MessageType, BuilderType>  extends com.google.android.libraries.places.internal.kv<any,any> implements com.google.android.libraries.places.internal.mc  {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kv.b<any,any>>;
                  public a: com.google.android.libraries.places.internal.kp<com.google.android.libraries.places.internal.kv.c>;
                  public a(param0: com.google.android.libraries.places.internal.kk): void;
                  public b(): com.google.android.libraries.places.internal.kc;
                  public static a(param0: com.google.android.libraries.places.internal.lc<any>): com.google.android.libraries.places.internal.lc<any>;
                  public g(): boolean;
                  public a(param0: com.google.android.libraries.places.internal.kv.d, param1: any): any;
                  public k(): com.google.android.libraries.places.internal.ma;
                  public static a(param0: com.google.android.libraries.places.internal.ma, param1: string, param2: native.Array<any>): any;
                  public constructor();
                  public h(): number;
                  public static a(param0: com.google.android.libraries.places.internal.kv<any,any>, param1: boolean): boolean;
                  public static a(param0: java.lang.Class, param1: com.google.android.libraries.places.internal.kv<any,any>): void;
                  public i(): com.google.android.libraries.places.internal.mb;
                }
                export class c extends com.google.android.libraries.places.internal.kq<com.google.android.libraries.places.internal.kv.c> {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kv.c>;
                  public b(): com.google.android.libraries.places.internal.nr;
                  public d(): boolean;
                  public a(): number;
                  public c(): com.google.android.libraries.places.internal.ns;
                  public f(): com.google.android.libraries.places.internal.mb;
                  public g(): com.google.android.libraries.places.internal.mf;
                  public e(): boolean;
                }
                export class d {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.kv.d>;
                  public static a: com.google.android.libraries.places.internal.kv.d;
                  public static b: com.google.android.libraries.places.internal.kv.d;
                  public static c: com.google.android.libraries.places.internal.kv.d;
                  public static d: com.google.android.libraries.places.internal.kv.d;
                  public static e: com.google.android.libraries.places.internal.kv.d;
                  public static f: com.google.android.libraries.places.internal.kv.d;
                  public static g: com.google.android.libraries.places.internal.kv.d;
                  public static values(): native.Array<com.google.android.libraries.places.internal.kv.d>;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kw extends com.google.android.libraries.places.internal.jy<java.lang.Integer> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kw>;
                public addAll(param0: number, param1: java.util.Collection<any>): boolean;
                public remove(param0: number): any;
                public size(): number;
                public hashCode(): number;
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public remove(param0: any): boolean;
                public b(): void;
                public equals(param0: any): boolean;
                public removeRange(param0: number, param1: number): void;
                public a(): boolean;
                public a(param0: number): number;
                public addAll(param0: java.util.Collection<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kx {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kx>;
                public static b(param0: native.Array<number>): string;
                public static a(param0: number): number;
                public static a(param0: native.Array<number>): boolean;
                public static c(param0: native.Array<number>): number;
                public static a(param0: boolean): number;
                public static a(param0: any): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ky {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ky>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ky interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(): number;
                });
                public constructor();
                public a(): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class kz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.kz>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.kz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class l {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.l>;
                public onResponse(param0: any): void;
                public constructor(param0: com.google.android.libraries.places.internal.gg, param1: java.lang.Class, param2: com.google.android.gms.tasks.TaskCompletionSource);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class la extends com.google.android.libraries.places.internal.lc<java.lang.Integer> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.la>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.la interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  b(): void;
                  a(): boolean;
                  b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                });
                public constructor();
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public b(): void;
                public a(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lb extends com.google.android.libraries.places.internal.lc<java.lang.Long> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lb>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.lb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  b(): void;
                  a(): boolean;
                  b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                });
                public constructor();
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public b(): void;
                public a(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lc<E>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lc<any>>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.lc<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  b(): void;
                  a(): boolean;
                  b(param0: number): com.google.android.libraries.places.internal.lc<E>;
                });
                public constructor();
                public b(param0: number): com.google.android.libraries.places.internal.lc<E>;
                public b(): void;
                public a(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ld {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ld>;
                public static serialVersionUID: number;
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class le extends com.google.android.libraries.places.internal.ld {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.le>;
                public static serialVersionUID: number;
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lf {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lf>;
                public static a: com.google.android.libraries.places.internal.lf;
                public static b: com.google.android.libraries.places.internal.lf;
                public static c: com.google.android.libraries.places.internal.lf;
                public static d: com.google.android.libraries.places.internal.lf;
                public static e: com.google.android.libraries.places.internal.lf;
                public static f: com.google.android.libraries.places.internal.lf;
                public static g: com.google.android.libraries.places.internal.lf;
                public static h: com.google.android.libraries.places.internal.lf;
                public static i: com.google.android.libraries.places.internal.lf;
                public static j: com.google.android.libraries.places.internal.lf;
                public k: java.lang.Class<any>;
                public static values(): native.Array<com.google.android.libraries.places.internal.lf>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lg extends com.google.android.libraries.places.internal.lj {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lg>;
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.ma;
                public hashCode(): number;
                public toString(): string;
                public equals(param0: any): boolean;
                public static a(): com.google.android.libraries.places.internal.ma;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lh<K>  extends java.util.Map.Entry<any,any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lh<any>>;
                public a: java.util.Map.Entry<any,com.google.android.libraries.places.internal.lg>;
                public getValue(): any;
                public getKey(): any;
                public setValue(param0: any): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class li<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.li<any>>;
                public constructor(param0: java.util.Iterator<java.util.Map.Entry<any,any>>);
                public hasNext(): boolean;
                public remove(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lj {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lj>;
                public c: com.google.android.libraries.places.internal.kc;
                public constructor();
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.ma;
                public b(): com.google.android.libraries.places.internal.kc;
                public hashCode(): number;
                public equals(param0: any): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lk extends com.google.android.libraries.places.internal.jy<string> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lk>;
                public constructor();
                public a(param0: com.google.android.libraries.places.internal.kc): void;
                public a(param0: number): any;
                public size(): number;
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public clear(): void;
                public d(): java.util.List<any>;
                public constructor(param0: number);
                public e(): com.google.android.libraries.places.internal.ll;
                public addAll(param0: java.util.Collection<any>): boolean;
                public addAll(param0: number, param1: java.util.Collection<any>): boolean;
                public b(): void;
                public a(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ll {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ll>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ll interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(param0: number): any;
                  a(param0: com.google.android.libraries.places.internal.kc): void;
                  d(): java.util.List<any>;
                  e(): com.google.android.libraries.places.internal.ll;
                });
                public constructor();
                public a(param0: number): any;
                public a(param0: com.google.android.libraries.places.internal.kc): void;
                public d(): java.util.List<any>;
                public e(): com.google.android.libraries.places.internal.ll;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class lm {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lm>;
                public static a: com.google.android.libraries.places.internal.lm;
                public static b: com.google.android.libraries.places.internal.lm;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ln extends com.google.android.libraries.places.internal.lm {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ln>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lo extends com.google.android.libraries.places.internal.lm {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lo>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lp extends com.google.android.libraries.places.internal.jy<java.lang.Long> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lp>;
                public addAll(param0: number, param1: java.util.Collection<any>): boolean;
                public remove(param0: number): any;
                public size(): number;
                public hashCode(): number;
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public remove(param0: any): boolean;
                public b(): void;
                public equals(param0: any): boolean;
                public removeRange(param0: number, param1: number): void;
                public a(): boolean;
                public a(param0: number): number;
                public addAll(param0: java.util.Collection<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lq extends com.google.android.libraries.places.internal.mq {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lq>;
                public constructor();
                public a(param0: java.lang.Class): com.google.android.libraries.places.internal.mp<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lr extends com.google.android.libraries.places.internal.lz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lr>;
                public b(param0: java.lang.Class<any>): com.google.android.libraries.places.internal.ly;
                public a(param0: java.lang.Class<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ls extends com.google.android.libraries.places.internal.lz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ls>;
                public b(param0: java.lang.Class<any>): com.google.android.libraries.places.internal.ly;
                public a(param0: java.lang.Class<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lt<K, V>  extends com.google.android.libraries.places.internal.kh {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lt<any,any>>;
                public static a(param0: any, param1: java.lang.Class): void;
                public static a(param0: any, param1: string): any;
                public static b(param0: any): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lu<K, V>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lu<any,any>>;
                public c: com.google.android.libraries.places.internal.kk;
                public d: native.Array<number>;
                public a(): com.google.android.libraries.places.internal.kc;
                public b(): com.google.android.libraries.places.internal.kk;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lv<K, V>  extends java.util.LinkedHashMap<any,any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lv<any,any>>;
                public static b: com.google.android.libraries.places.internal.lv<any,any>;
                public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
                public hashCode(): number;
                public remove(param0: any): any;
                public clear(): void;
                public put(param0: any, param1: any): any;
                public equals(param0: any): boolean;
                public a(): com.google.android.libraries.places.internal.lv<any,any>;
                public putAll(param0: java.util.Map<any,any>): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lw {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lw>;
                public c(param0: any): com.google.android.libraries.places.internal.lu<any,any>;
                public a(param0: any, param1: any): any;
                public a(param0: any): java.util.Map<any,any>;
                public b(param0: any): any;
                public a(param0: number, param1: any, param2: any): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lx {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lx>;
                public static a: com.google.android.libraries.places.internal.lw;
                public static b: com.google.android.libraries.places.internal.lw;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ly {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ly>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ly interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(): com.google.android.libraries.places.internal.ml;
                  b(): boolean;
                  c(): com.google.android.libraries.places.internal.ma;
                });
                public constructor();
                public c(): com.google.android.libraries.places.internal.ma;
                public b(): boolean;
                public a(): com.google.android.libraries.places.internal.ml;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class lz {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.lz>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.lz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(param0: java.lang.Class<any>): boolean;
                  b(param0: java.lang.Class<any>): com.google.android.libraries.places.internal.ly;
                });
                public constructor();
                public b(param0: java.lang.Class<any>): com.google.android.libraries.places.internal.ly;
                public a(param0: java.lang.Class<any>): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class m {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.m>;
                public onErrorResponse(param0: com.android.volley.VolleyError): void;
                public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ma extends com.google.android.libraries.places.internal.mc {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ma>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ma interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(param0: com.google.android.libraries.places.internal.kk): void;
                  h(): number;
                  b(): com.google.android.libraries.places.internal.kc;
                  i(): com.google.android.libraries.places.internal.mb;
                  k(): com.google.android.libraries.places.internal.ma;
                  g(): boolean;
                });
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public b(): com.google.android.libraries.places.internal.kc;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mb extends com.google.android.libraries.places.internal.mc {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mb>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  d(): com.google.android.libraries.places.internal.ma;
                  c(): com.google.android.libraries.places.internal.ma;
                  a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                  k(): com.google.android.libraries.places.internal.ma;
                  g(): boolean;
                });
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public a(param0: com.google.android.libraries.places.internal.ma): com.google.android.libraries.places.internal.mb;
                public c(): com.google.android.libraries.places.internal.ma;
                public g(): boolean;
                public d(): com.google.android.libraries.places.internal.ma;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mc {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mc>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  k(): com.google.android.libraries.places.internal.ma;
                  g(): boolean;
                });
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public g(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class md<T>  extends com.google.android.libraries.places.internal.mp<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.md<any>>;
                public c(param0: any): void;
                public b(param0: any, param1: any): void;
                public a(param0: any, param1: any): boolean;
                public d(param0: any): boolean;
                public a(param0: any): number;
                public b(param0: any): number;
                public a(param0: any, param1: com.google.android.libraries.places.internal.nt): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class me<T>  extends com.google.android.libraries.places.internal.mp<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.me<any>>;
                public c(param0: any): void;
                public b(param0: any, param1: any): void;
                public a(param0: any, param1: any): boolean;
                public d(param0: any): boolean;
                public a(param0: any): number;
                public a(param0: any, param1: com.google.android.libraries.places.internal.nt): void;
                public b(param0: any): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mf extends com.google.android.libraries.places.internal.ma {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mf>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(): com.google.android.libraries.places.internal.mf;
                  a(param0: com.google.android.libraries.places.internal.kk): void;
                  h(): number;
                  b(): com.google.android.libraries.places.internal.kc;
                  i(): com.google.android.libraries.places.internal.mb;
                  k(): com.google.android.libraries.places.internal.ma;
                  g(): boolean;
                });
                public constructor();
                public k(): com.google.android.libraries.places.internal.ma;
                public b(): com.google.android.libraries.places.internal.kc;
                public a(): com.google.android.libraries.places.internal.mf;
                public h(): number;
                public i(): com.google.android.libraries.places.internal.mb;
                public g(): boolean;
                public a(param0: com.google.android.libraries.places.internal.kk): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mg {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mg>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mh {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mh>;
                public static a: com.google.android.libraries.places.internal.mg;
                public static b: com.google.android.libraries.places.internal.mg;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mi extends com.google.android.libraries.places.internal.kh {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mi>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mj<MessageType>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mj<any>>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mk {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mk>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                });
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ml {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ml>;
                public static a: com.google.android.libraries.places.internal.ml;
                public static b: com.google.android.libraries.places.internal.ml;
                public static values(): native.Array<com.google.android.libraries.places.internal.ml>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mm {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mm>;
                public a(param0: java.lang.Class): com.google.android.libraries.places.internal.mp<any>;
                public a(param0: any): com.google.android.libraries.places.internal.mp<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mn<E>  extends com.google.android.libraries.places.internal.jy<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mn<any>>;
                public static b: com.google.android.libraries.places.internal.mn<any>;
                public remove(param0: number): any;
                public set(param0: number, param1: any): any;
                public add(param0: any): boolean;
                public size(): number;
                public b(param0: number): com.google.android.libraries.places.internal.lc<any>;
                public remove(param0: any): boolean;
                public add(param0: number, param1: any): void;
                public get(param0: number): any;
                public b(): void;
                public a(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mo extends com.google.android.libraries.places.internal.ly {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mo>;
                public c(): com.google.android.libraries.places.internal.ma;
                public b(): boolean;
                public a(): com.google.android.libraries.places.internal.ml;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mp<T>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mp<any>>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mp<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(param0: T, param1: com.google.android.libraries.places.internal.nt): void;
                  c(param0: T): void;
                  d(param0: T): boolean;
                  a(param0: T, param1: T): boolean;
                  a(param0: T): number;
                  b(param0: T, param1: T): void;
                  b(param0: T): number;
                });
                public constructor();
                public d(param0: T): boolean;
                public a(param0: T, param1: T): boolean;
                public c(param0: T): void;
                public b(param0: T): number;
                public a(param0: T): number;
                public a(param0: T, param1: com.google.android.libraries.places.internal.nt): void;
                public b(param0: T, param1: T): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mq {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mq>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.mq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  a(param0: java.lang.Class): com.google.android.libraries.places.internal.mp<any>;
                });
                public constructor();
                public a(param0: java.lang.Class): com.google.android.libraries.places.internal.mp<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mr {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mr>;
                public static a(param0: java.lang.Class<any>): void;
                public static b(param0: number, param1: java.util.List<java.lang.Float>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static k(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static e(param0: number, param1: java.util.List<java.lang.Long>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static h(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static b(param0: number, param1: java.util.List<any>, param2: com.google.android.libraries.places.internal.nt, param3: com.google.android.libraries.places.internal.mp<any>): void;
                public static n(param0: number, param1: java.util.List<java.lang.Boolean>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static a(param0: number, param1: java.util.List<java.lang.Double>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static d(param0: number, param1: java.util.List<java.lang.Long>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static g(param0: number, param1: java.util.List<java.lang.Long>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static m(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static a(param0: number, param1: java.util.List<any>, param2: com.google.android.libraries.places.internal.nt, param3: com.google.android.libraries.places.internal.mp<any>): void;
                public static c(param0: number, param1: java.util.List<java.lang.Long>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static i(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static l(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static a(param0: number, param1: java.util.List<string>, param2: com.google.android.libraries.places.internal.nt): void;
                public static j(param0: number, param1: java.util.List<java.lang.Integer>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static f(param0: number, param1: java.util.List<java.lang.Long>, param2: com.google.android.libraries.places.internal.nt, param3: boolean): void;
                public static b(param0: number, param1: java.util.List<com.google.android.libraries.places.internal.kc>, param2: com.google.android.libraries.places.internal.nt): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ms<K, V>  extends java.util.AbstractMap<any,any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ms<any,any>>;
                public d: java.util.Map<any,any>;
                public get(param0: any): any;
                public size(): number;
                public a(): void;
                public a(param0: any, param1: any): any;
                public hashCode(): number;
                public remove(param0: any): any;
                public containsKey(param0: any): boolean;
                public b(param0: number): java.util.Map.Entry<any,any>;
                public clear(): void;
                public b(): number;
                public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
                public equals(param0: any): boolean;
                public c(): java.lang.Iterable<java.util.Map.Entry<any,any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mt extends com.google.android.libraries.places.internal.ms<any,any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mt>;
                public a(): void;
                public a(param0: any, param1: any): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mu extends java.util.Iterator<java.util.Map.Entry<any,any>> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mu>;
                public hasNext(): boolean;
                public remove(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mv extends com.google.android.libraries.places.internal.nb {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mv>;
                public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mw {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mw>;
                public static a: java.util.Iterator<any>;
                public static b: java.lang.Iterable<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mx extends java.util.Iterator<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mx>;
                public hasNext(): boolean;
                public remove(): void;
                public next(): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class my extends java.lang.Iterable<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.my>;
                public iterator(): java.util.Iterator<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class mz extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.mz>;
                public getValue(): any;
                public hashCode(): number;
                public toString(): string;
                public setValue(param0: any): any;
                public equals(param0: any): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class n {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.n>;
                public onCanceled(): void;
                public constructor(param0: com.android.volley.toolbox.JsonObjectRequest);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class na extends java.util.Iterator<java.util.Map.Entry<any,any>> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.na>;
                public hasNext(): boolean;
                public remove(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nb extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nb>;
                public contains(param0: any): boolean;
                public size(): number;
                public remove(param0: any): boolean;
                public clear(): void;
                public iterator(): java.util.Iterator<java.util.Map.Entry<any,any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nc extends com.google.android.libraries.places.internal.ly {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nc>;
                public e: number;
                public f: number;
                public g: number;
                public h: number;
                public c(): com.google.android.libraries.places.internal.ma;
                public static a(param0: native.Array<number>, param1: number, param2: number): com.google.android.libraries.places.internal.nc;
                public d(): number;
                public static a(param0: native.Array<number>): com.google.android.libraries.places.internal.nc;
                public b(): boolean;
                public a(): com.google.android.libraries.places.internal.ml;
                public a(param0: number): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nd {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nd>;
                public a(): number;
                public a(param0: number): number;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ne {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ne>;
                public static serialVersionUID: number;
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nf<T, B>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nf<any,any>>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ng {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ng>;
                public b: number;
                public c: native.Array<number>;
                public d: native.Array<any>;
                public e: number;
                public f: boolean;
                public a(): number;
                public hashCode(): number;
                public a(param0: com.google.android.libraries.places.internal.nt): void;
                public equals(param0: any): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nh extends java.util.AbstractList<string> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nh>;
                public listIterator(param0: number): java.util.ListIterator<string>;
                public a(param0: number): any;
                public a(param0: com.google.android.libraries.places.internal.kc): void;
                public iterator(): java.util.Iterator<string>;
                public size(): number;
                public constructor(param0: com.google.android.libraries.places.internal.ll);
                public d(): java.util.List<any>;
                public e(): com.google.android.libraries.places.internal.ll;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ni extends java.util.ListIterator<string> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ni>;
                public previousIndex(): number;
                public nextIndex(): number;
                public hasNext(): boolean;
                public remove(): void;
                public hasPrevious(): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nj extends java.util.Iterator<string> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nj>;
                public hasNext(): boolean;
                public remove(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nk {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nk>;
                public static a: com.google.android.libraries.places.internal.nk.d;
                public static b: boolean;
                public static c: boolean;
                public static d: boolean;
              }
              export module nk {
                export class a extends com.google.android.libraries.places.internal.nk.d {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.nk.a>;
                  public d(param0: any, param1: number): number;
                  public c(param0: any, param1: number): number;
                  public a(param0: any, param1: number, param2: number): void;
                  public a(param0: any, param1: number, param2: boolean): void;
                  public b(param0: any, param1: number): boolean;
                  public a(param0: java.lang.reflect.Field): number;
                  public a(param0: any, param1: number): number;
                }
                export class b extends com.google.android.libraries.places.internal.nk.d {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.nk.b>;
                  public d(param0: any, param1: number): number;
                  public c(param0: any, param1: number): number;
                  public a(param0: any, param1: number, param2: number): void;
                  public a(param0: any, param1: number, param2: boolean): void;
                  public b(param0: any, param1: number): boolean;
                  public a(param0: java.lang.reflect.Field): number;
                  public a(param0: any, param1: number): number;
                }
                export class c extends com.google.android.libraries.places.internal.nk.d {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.nk.c>;
                  public d(param0: any, param1: number): number;
                  public c(param0: any, param1: number): number;
                  public a(param0: any, param1: number, param2: number): void;
                  public a(param0: any, param1: number, param2: boolean): void;
                  public b(param0: any, param1: number): boolean;
                  public a(param0: java.lang.reflect.Field): number;
                  public a(param0: any, param1: number): number;
                }
                export abstract class d {
                  public static class: java.lang.Class<com.google.android.libraries.places.internal.nk.d>;
                  public f(param0: any, param1: number): number;
                  public d(param0: any, param1: number): number;
                  public c(param0: any, param1: number): number;
                  public a(param0: any, param1: number, param2: number): void;
                  public e(param0: any, param1: number): number;
                  public a(param0: any, param1: number, param2: boolean): void;
                  public b(param0: any, param1: number): boolean;
                  public a(param0: java.lang.reflect.Field): number;
                  public a(param0: any, param1: number): number;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nl extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nl>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nm {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nm>;
                public static a(param0: native.Array<number>, param1: number, param2: number): boolean;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class nn {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nn>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class no extends com.google.android.libraries.places.internal.nn {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.no>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class np {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.np>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nq extends com.google.android.libraries.places.internal.nn {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nq>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nr {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nr>;
                public static a: com.google.android.libraries.places.internal.nr;
                public static b: com.google.android.libraries.places.internal.nr;
                public static c: com.google.android.libraries.places.internal.nr;
                public static d: com.google.android.libraries.places.internal.nr;
                public static e: com.google.android.libraries.places.internal.nr;
                public static f: com.google.android.libraries.places.internal.nr;
                public static g: com.google.android.libraries.places.internal.nr;
                public static h: com.google.android.libraries.places.internal.nr;
                public static i: com.google.android.libraries.places.internal.nr;
                public static j: com.google.android.libraries.places.internal.nr;
                public static k: com.google.android.libraries.places.internal.nr;
                public static l: com.google.android.libraries.places.internal.nr;
                public static m: com.google.android.libraries.places.internal.nr;
                public static n: com.google.android.libraries.places.internal.nr;
                public static o: com.google.android.libraries.places.internal.nr;
                public static p: com.google.android.libraries.places.internal.nr;
                public static q: com.google.android.libraries.places.internal.nr;
                public static r: com.google.android.libraries.places.internal.nr;
                public s: com.google.android.libraries.places.internal.ns;
                public t: number;
                public static values(): native.Array<com.google.android.libraries.places.internal.nr>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ns {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ns>;
                public static a: com.google.android.libraries.places.internal.ns;
                public static b: com.google.android.libraries.places.internal.ns;
                public static c: com.google.android.libraries.places.internal.ns;
                public static d: com.google.android.libraries.places.internal.ns;
                public static e: com.google.android.libraries.places.internal.ns;
                public static f: com.google.android.libraries.places.internal.ns;
                public static g: com.google.android.libraries.places.internal.ns;
                public static h: com.google.android.libraries.places.internal.ns;
                public static i: com.google.android.libraries.places.internal.ns;
                public static values(): native.Array<com.google.android.libraries.places.internal.ns>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nt {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nt>;
                public a(param0: number): void;
                public b(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public f(param0: number, param1: number): void;
                public a(param0: number, param1: java.util.List<any>, param2: com.google.android.libraries.places.internal.mp<any>): void;
                public d(param0: number, param1: number): void;
                public a(param0: number, param1: string): void;
                public e(param0: number, param1: number): void;
                public a(param0: number, param1: number): void;
                public c(param0: number, param1: number): void;
                public a(): com.google.android.libraries.places.internal.nu;
                public b(param0: number, param1: number): void;
                public b(param0: number, param1: java.util.List<com.google.android.libraries.places.internal.kc>): void;
                public j(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public b(param0: number): void;
                public h(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public a(param0: number, param1: boolean): void;
                public a(param0: number, param1: com.google.android.libraries.places.internal.kc): void;
                public a(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public static a(param0: com.google.android.libraries.places.internal.kk): com.google.android.libraries.places.internal.nt;
                public b(param0: number, param1: any, param2: com.google.android.libraries.places.internal.mp<any>): void;
                public b(param0: number, param1: java.util.List<any>, param2: com.google.android.libraries.places.internal.mp<any>): void;
                public f(param0: number, param1: java.util.List<java.lang.Float>, param2: boolean): void;
                public l(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
                public a(param0: number, param1: java.util.List<string>): void;
                public g(param0: number, param1: java.util.List<java.lang.Double>, param2: boolean): void;
                public n(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
                public a(param0: number, param1: any): void;
                public a(param0: number, param1: com.google.android.libraries.places.internal.lu<any,any>, param2: java.util.Map): void;
                public i(param0: number, param1: java.util.List<java.lang.Boolean>, param2: boolean): void;
                public a(param0: number, param1: any, param2: com.google.android.libraries.places.internal.mp<any>): void;
                public c(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
                public m(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public e(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
                public k(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
                public d(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nu {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nu>;
                public static a: com.google.android.libraries.places.internal.nu;
                public static b: com.google.android.libraries.places.internal.nu;
                public static values(): native.Array<com.google.android.libraries.places.internal.nu>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nv<T>  extends com.google.android.libraries.places.internal.ny<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nv<any>>;
                public b(): any;
                public static a(param0: com.google.android.libraries.places.internal.ny<any>): com.google.android.libraries.places.internal.ny<any>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nw<T>  extends com.google.android.libraries.places.internal.ny<any> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nw<any>>;
                public constructor(param0: any);
                public b(): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class nx {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.nx>;
                public constructor();
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class ny<T>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.ny<any>>;
                /**
                 * Constructs a new instance of the com.google.android.libraries.places.internal.ny<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: {
                  b(): T;
                });
                public constructor();
                public b(): T;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class o {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.o>;
                public constructor(param0: number, param1: string, param2: org.json.JSONObject, param3: com.android.volley.Response.Listener, param4: com.android.volley.Response.ErrorListener, param5: java.util.Map);
                public getHeaders(): java.util.Map<string,string>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class p {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.p>;
                public constructor(param0: com.bumptech.glide.request.FutureTarget);
                public onCanceled(): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class q extends com.bumptech.glide.request.RequestListener<android.graphics.Bitmap> {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.q>;
                public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<android.graphics.Bitmap>, param3: boolean): boolean;
                public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource, param1: com.google.android.libraries.places.internal.dv);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class r<TypeT, RequestT>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.r<any,any>>;
                public static a(param0: java.util.Locale): string;
                public e(): java.util.Map<string,string>;
                public b(): java.util.Map<string,string>;
                public a(): com.google.android.gms.tasks.CancellationToken;
                public d(): string;
                public c(): string;
                public static a(param0: java.util.Map<string,string>, param1: string, param2: any, param3: any): void;
                public constructor(param0: RequestT);
                public constructor(param0: RequestT, param1: java.util.Locale, param2: string, param3: boolean, param4: com.google.android.libraries.places.internal.fg);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export abstract class s<TypeT, ResponseT>  extends java.lang.Object {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.s<any,any>>;
                public constructor();
                public convert(): ResponseT;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class t {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.t>;
                public constructor(param0: string);
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class u extends com.google.android.libraries.places.api.net.PlacesClient {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.u>;
                public a: com.google.android.libraries.places.internal.fw;
                public b: com.google.android.libraries.places.internal.j;
                public c: com.google.android.libraries.places.internal.ds;
                public d: com.google.android.libraries.places.internal.a;
                public findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
                public findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
                public fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
                public constructor(param0: com.google.android.libraries.places.internal.fw, param1: com.google.android.libraries.places.internal.d, param2: com.google.android.libraries.places.internal.j, param3: com.google.android.libraries.places.internal.ds, param4: com.google.android.libraries.places.internal.a);
                public fetchPlace(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class v {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.v>;
                public then(param0: com.google.android.gms.tasks.Task): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class w {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.w>;
                public then(param0: com.google.android.gms.tasks.Task): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class x {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.x>;
                public then(param0: com.google.android.gms.tasks.Task): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class y {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.y>;
                public then(param0: com.google.android.gms.tasks.Task): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module internal {
              export class z {
                public static class: java.lang.Class<com.google.android.libraries.places.internal.z>;
                public then(param0: com.google.android.gms.tasks.Task): any;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export class Autocomplete {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.Autocomplete>;
                public static getStatusFromIntent(param0: android.content.Intent): com.google.android.gms.common.api.Status;
                public static getPlaceFromIntent(param0: android.content.Intent): com.google.android.libraries.places.api.model.Place;
              }
              export module Autocomplete {
                export class IntentBuilder extends com.google.android.libraries.places.internal.fm {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.Autocomplete.IntentBuilder>;
                  public constructor(param0: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>);
                  public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                  public build(param0: android.content.Context): android.content.Intent;
                  public constructor();
                  public a(param0: string, param1: android.os.Parcelable): void;
                  public a(param0: com.google.android.libraries.places.internal.ee): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                  public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                  public setCountry(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                  public b(): any;
                  public a(param0: string, param1: java.io.Serializable): void;
                  public a(param0: string, param1: string): void;
                  public setInitialQuery(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                  public a(param0: android.content.Context, param1: java.lang.Class<any>): android.content.Intent;
                  public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export class AutocompleteActivity {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteActivity>;
                public static RESULT_ERROR: number;
                public constructor();
                public onStop(): void;
                public onPause(): void;
                public onCreate(param0: android.os.Bundle): void;
                public onStart(): void;
                public onDestroy(): void;
                public onBackPressed(): void;
                public onResume(): void;
                public onSaveInstanceState(param0: android.os.Bundle): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export class AutocompleteFragment {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteFragment>;
                public a: android.widget.EditText;
                public b: com.google.android.libraries.places.api.model.LocationBias;
                public c: com.google.android.libraries.places.api.model.LocationRestriction;
                public d: string;
                public e: com.google.android.libraries.places.api.model.TypeFilter;
                public f: com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.api.model.Place.Field>;
                public constructor();
                public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): void;
                public onDestroyView(): void;
                public setHint(param0: string): void;
                public setCountry(param0: string): void;
                public setPlaceFields(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): void;
                public setOnPlaceSelectedListener(param0: com.google.android.libraries.places.widget.listener.PlaceSelectionListener): void;
                public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): void;
                public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
                public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
                public setText(param0: string): void;
                public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export class AutocompleteSupportFragment {
                public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteSupportFragment>;
                public a: android.widget.EditText;
                public b: com.google.android.libraries.places.api.model.LocationBias;
                public c: com.google.android.libraries.places.api.model.LocationRestriction;
                public d: string;
                public e: com.google.android.libraries.places.api.model.TypeFilter;
                public f: com.google.android.libraries.places.internal.ha<com.google.android.libraries.places.api.model.Place.Field>;
                public constructor();
                public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): void;
                public onDestroyView(): void;
                public setHint(param0: string): void;
                public setCountry(param0: string): void;
                public setPlaceFields(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): void;
                public setOnPlaceSelectedListener(param0: com.google.android.libraries.places.widget.listener.PlaceSelectionListener): void;
                public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): void;
                public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
                public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
                public setText(param0: string): void;
                public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): void;
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export module listener {
                export class PlaceSelectionListener {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.listener.PlaceSelectionListener>;
                  /**
                   * Constructs a new instance of the com.google.android.libraries.places.widget.listener.PlaceSelectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                   */
                  public constructor(implementation: {
                    onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void;
                    onError(param0: com.google.android.gms.common.api.Status): void;
                  });
                  public constructor();
                  public onPlaceSelected(param0: com.google.android.libraries.places.api.model.Place): void;
                  public onError(param0: com.google.android.gms.common.api.Status): void;
                }
              }
            }
          }
        }
      }
    }
  }

  declare module com {
    export module google {
      export module android {
        export module libraries {
          export module places {
            export module widget {
              export module model {
                export class AutocompleteActivityMode extends android.os.Parcelable {
                  public static class: java.lang.Class<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
                  public static FULLSCREEN: com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                  public static OVERLAY: com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                  public static CREATOR: android.os.Parcelable.Creator<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
                  public static valueOf(param0: string): com.google.android.libraries.places.widget.model.AutocompleteActivityMode;
                  public describeContents(): number;
                  public static values(): native.Array<com.google.android.libraries.places.widget.model.AutocompleteActivityMode>;
                  public writeToParcel(param0: android.os.Parcel, param1: number): void;
                }
              }
            }
          }
        }
      }
    }
  }

//Generics information:
//com.google.android.libraries.places.internal.aj:2
//com.google.android.libraries.places.internal.gh:1
//com.google.android.libraries.places.internal.gt:1
//com.google.android.libraries.places.internal.gu:1
//com.google.android.libraries.places.internal.gw:1
//com.google.android.libraries.places.internal.gy:1
//com.google.android.libraries.places.internal.gz:1
//com.google.android.libraries.places.internal.ha:1
//com.google.android.libraries.places.internal.hd:2
//com.google.android.libraries.places.internal.he:2
//com.google.android.libraries.places.internal.hg:1
//com.google.android.libraries.places.internal.hk:1
//com.google.android.libraries.places.internal.hl:1
//com.google.android.libraries.places.internal.hm:1
//com.google.android.libraries.places.internal.hn:2
//com.google.android.libraries.places.internal.ho:2
//com.google.android.libraries.places.internal.hq:1
//com.google.android.libraries.places.internal.hs:1
//com.google.android.libraries.places.internal.ht:1
//com.google.android.libraries.places.internal.hu:1
//com.google.android.libraries.places.internal.hv:1
//com.google.android.libraries.places.internal.ju:2
//com.google.android.libraries.places.internal.jv:2
//com.google.android.libraries.places.internal.jx:1
//com.google.android.libraries.places.internal.jy:1
//com.google.android.libraries.places.internal.kn:1
//com.google.android.libraries.places.internal.kp:1
//com.google.android.libraries.places.internal.kq:1
//com.google.android.libraries.places.internal.kt:1
//com.google.android.libraries.places.internal.kv:2
//com.google.android.libraries.places.internal.kv.a:2
//com.google.android.libraries.places.internal.kv.b:2
//com.google.android.libraries.places.internal.lc:1
//com.google.android.libraries.places.internal.lh:1
//com.google.android.libraries.places.internal.li:1
//com.google.android.libraries.places.internal.lt:2
//com.google.android.libraries.places.internal.lu:2
//com.google.android.libraries.places.internal.lv:2
//com.google.android.libraries.places.internal.md:1
//com.google.android.libraries.places.internal.me:1
//com.google.android.libraries.places.internal.mj:1
//com.google.android.libraries.places.internal.mn:1
//com.google.android.libraries.places.internal.mp:1
//com.google.android.libraries.places.internal.ms:2
//com.google.android.libraries.places.internal.nf:2
//com.google.android.libraries.places.internal.nv:1
//com.google.android.libraries.places.internal.nw:1
//com.google.android.libraries.places.internal.ny:1
//com.google.android.libraries.places.internal.r:2
//com.google.android.libraries.places.internal.s:2

