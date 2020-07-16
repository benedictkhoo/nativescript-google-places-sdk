declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module api {
						export class Places {
							public static class: java.lang.Class<com.google.android.libraries.places.api.Places>;
							public static initialize(param0: android.content.Context, param1: string): void;
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
									public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
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
								public getSecondaryText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
								public static builder(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
								public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
								public constructor();
								public getFullText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
								public getPrimaryText(param0: android.text.style.CharacterStyle): android.text.SpannableString;
								public getPlaceId(): string;
							}
							export module AutocompletePrediction {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.Builder>;
									public constructor();
									public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
									public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
									public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
									public build(): com.google.android.libraries.places.api.model.AutocompletePrediction;
									public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
								}
								export abstract class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.api.model.AutocompletePrediction.zza>;
									public constructor();
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
							export abstract class LocalTime extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalTime>;
								public getHours(): number;
								public getMinutes(): number;
								public compareTo(param0: com.google.android.libraries.places.api.model.LocalTime): number;
								public static newInstance(param0: number, param1: number): com.google.android.libraries.places.api.model.LocalTime;
								public constructor();
							}
							export module LocalTime {
								export abstract class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.api.model.LocalTime.zza>;
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
									public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
									public build(): com.google.android.libraries.places.api.model.PhotoMetadata;
									public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
									public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
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
								public isOpen(param0: number): java.lang.Boolean;
								public getRating(): java.lang.Double;
								public getPriceLevel(): java.lang.Integer;
								public getAddress(): string;
								public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
								public getWebsiteUri(): android.net.Uri;
								public getUtcOffsetMinutes(): java.lang.Integer;
								public getUserRatingsTotal(): java.lang.Integer;
								public isOpen(): java.lang.Boolean;
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
									public setUtcOffsetMinutes(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
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
									public static UTC_OFFSET: com.google.android.libraries.places.api.model.Place.Field;
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
								export abstract class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.api.model.RectangularBounds.zza>;
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
						export module model {
							export abstract class zza extends com.google.android.libraries.places.api.model.AddressComponent {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zza>;
								public toString(): string;
								public getShortName(): string;
								public getName(): string;
								public getTypes(): java.util.List<string>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export class zzaa extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzab>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaa>;
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
							export class zzab extends com.google.android.libraries.places.api.model.zzb {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzab>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzab>*/;
								public describeContents(): number;
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
						export module model {
							export class zzac extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzad>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzac>;
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
							export class zzad extends com.google.android.libraries.places.api.model.zze {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzad>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzad>*/;
								public describeContents(): number;
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
						export module model {
							export class zzae extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaf>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzae>;
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
							export class zzaf extends com.google.android.libraries.places.api.model.zzg {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaf>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaf>*/;
								public describeContents(): number;
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
						export module model {
							export class zzag extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzah>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzag>;
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
							export class zzah extends com.google.android.libraries.places.api.model.zzi {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzah>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzah>*/;
								public describeContents(): number;
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
						export module model {
							export class zzai extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaj>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzai>;
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
							export class zzaj extends com.google.android.libraries.places.api.model.zzh {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaj>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaj>*/;
								public describeContents(): number;
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
						export module model {
							export class zzak extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzal>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzak>;
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
							export class zzal extends com.google.android.libraries.places.api.model.zzj {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzal>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzal>*/;
								public describeContents(): number;
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
						export module model {
							export class zzam extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzan>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzam>;
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
							export class zzan extends com.google.android.libraries.places.api.model.zzl {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzan>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzan>*/;
								public describeContents(): number;
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
						export module model {
							export class zzao extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzap>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzao>;
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
							export class zzap extends com.google.android.libraries.places.api.model.zzn {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzap>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzap>*/;
								public describeContents(): number;
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
						export module model {
							export class zzaq extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzar>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaq>;
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
							export class zzar extends com.google.android.libraries.places.api.model.zzp {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzar>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzar>*/;
								public describeContents(): number;
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
						export module model {
							export class zzas extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzat>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzas>;
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
							export class zzat extends com.google.android.libraries.places.api.model.zzr {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzat>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzat>*/;
								public describeContents(): number;
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
						export module model {
							export class zzau extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzav>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzau>;
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
							export class zzav extends com.google.android.libraries.places.api.model.zzu {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzav>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzav>*/;
								public describeContents(): number;
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
						export module model {
							export class zzaw extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzax>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaw>;
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
							export class zzax extends com.google.android.libraries.places.api.model.zzw {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzax>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzax>*/;
								public describeContents(): number;
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
						export module model {
							export class zzay extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaz>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzay>;
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
							export class zzaz extends com.google.android.libraries.places.api.model.zzx {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzaz>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzaz>*/;
								public describeContents(): number;
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
						export module model {
							export abstract class zzb extends com.google.android.libraries.places.api.model.AddressComponents {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzb>;
								public toString(): string;
								public asList(): java.util.List<com.google.android.libraries.places.api.model.AddressComponent>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export abstract class zzba {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzba>;
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
							export class zzbb extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.DayOfWeek> {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbb>;
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
							export class zzbc {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbc>;
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
							export class zzbd extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Field> {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbd>;
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
							export class zzbe extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.Place.Type> {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbe>;
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
							export class zzbf extends android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.TypeFilter> {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzbf>;
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
							export class zzc extends com.google.android.libraries.places.api.model.AddressComponent.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzc>;
								public setShortName(param0: string): com.google.android.libraries.places.api.model.AddressComponent.Builder;
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
							export class zzd extends com.google.android.libraries.places.api.model.AutocompletePrediction.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzd>;
								public setPrimaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
								public setFullText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
								public setPlaceTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
								public setSecondaryText(param0: string): com.google.android.libraries.places.api.model.AutocompletePrediction.Builder;
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
							export abstract class zze extends com.google.android.libraries.places.api.model.AutocompletePrediction {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zze>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getPlaceTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
								public hashCode(): number;
								public getPlaceId(): string;
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
							export class zzf extends com.google.android.libraries.places.api.model.zzba {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzf>;
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
							export abstract class zzg extends com.google.android.libraries.places.api.model.AutocompletePrediction.zza {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzg>;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export abstract class zzh extends com.google.android.libraries.places.api.model.LocalTime {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzh>;
								public getHours(): number;
								public getMinutes(): number;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export abstract class zzi extends com.google.android.libraries.places.api.model.AutocompleteSessionToken {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzi>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export abstract class zzj extends com.google.android.libraries.places.api.model.OpeningHours {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzj>;
								public toString(): string;
								public getWeekdayText(): java.util.List<string>;
								public getPeriods(): java.util.List<com.google.android.libraries.places.api.model.Period>;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export class zzk extends com.google.android.libraries.places.api.model.LocalTime.zza {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzk>;
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
							export abstract class zzl extends com.google.android.libraries.places.api.model.Period {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzl>;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getOpen(): com.google.android.libraries.places.api.model.TimeOfWeek;
								public getClose(): com.google.android.libraries.places.api.model.TimeOfWeek;
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
							export class zzm extends com.google.android.libraries.places.api.model.OpeningHours.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzm>;
								public setWeekdayText(param0: java.util.List<string>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
								public setPeriods(param0: java.util.List<com.google.android.libraries.places.api.model.Period>): com.google.android.libraries.places.api.model.OpeningHours.Builder;
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
							export abstract class zzn extends com.google.android.libraries.places.api.model.PhotoMetadata {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzn>;
								public toString(): string;
								public getAttributions(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getHeight(): number;
								public getWidth(): number;
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
							export class zzo extends com.google.android.libraries.places.api.model.Period.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzo>;
								public build(): com.google.android.libraries.places.api.model.Period;
								public setClose(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
								public setOpen(param0: com.google.android.libraries.places.api.model.TimeOfWeek): com.google.android.libraries.places.api.model.Period.Builder;
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
							export abstract class zzp extends com.google.android.libraries.places.api.model.Place {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzp>;
								public toString(): string;
								public getPhoneNumber(): string;
								public getTypes(): java.util.List<com.google.android.libraries.places.api.model.Place.Type>;
								public getName(): string;
								public getAddressComponents(): com.google.android.libraries.places.api.model.AddressComponents;
								public equals(param0: any): boolean;
								public getPhotoMetadatas(): java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>;
								public getViewport(): com.google.android.gms.maps.model.LatLngBounds;
								public getRating(): java.lang.Double;
								public getPriceLevel(): java.lang.Integer;
								public getAddress(): string;
								public getPlusCode(): com.google.android.libraries.places.api.model.PlusCode;
								public getWebsiteUri(): android.net.Uri;
								public getUtcOffsetMinutes(): java.lang.Integer;
								public getUserRatingsTotal(): java.lang.Integer;
								public getAttributions(): java.util.List<string>;
								public getLatLng(): com.google.android.gms.maps.model.LatLng;
								public getId(): string;
								public hashCode(): number;
								public getOpeningHours(): com.google.android.libraries.places.api.model.OpeningHours;
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
							export class zzq extends com.google.android.libraries.places.api.model.PhotoMetadata.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzq>;
								public setWidth(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
								public setAttributions(param0: string): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
								public setHeight(param0: number): com.google.android.libraries.places.api.model.PhotoMetadata.Builder;
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
							export abstract class zzr extends com.google.android.libraries.places.api.model.PlaceLikelihood {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzr>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getPlace(): com.google.android.libraries.places.api.model.Place;
								public getLikelihood(): number;
								public hashCode(): number;
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
							export class zzs extends com.google.android.libraries.places.api.model.Place.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzs>;
								public setPhoneNumber(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
								public setWebsiteUri(param0: android.net.Uri): com.google.android.libraries.places.api.model.Place.Builder;
								public setPlusCode(param0: com.google.android.libraries.places.api.model.PlusCode): com.google.android.libraries.places.api.model.Place.Builder;
								public setPriceLevel(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
								public setAddressComponents(param0: com.google.android.libraries.places.api.model.AddressComponents): com.google.android.libraries.places.api.model.Place.Builder;
								public setAttributions(param0: java.util.List<string>): com.google.android.libraries.places.api.model.Place.Builder;
								public setUtcOffsetMinutes(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
								public setOpeningHours(param0: com.google.android.libraries.places.api.model.OpeningHours): com.google.android.libraries.places.api.model.Place.Builder;
								public setName(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
								public setUserRatingsTotal(param0: java.lang.Integer): com.google.android.libraries.places.api.model.Place.Builder;
								public setLatLng(param0: com.google.android.gms.maps.model.LatLng): com.google.android.libraries.places.api.model.Place.Builder;
								public setViewport(param0: com.google.android.gms.maps.model.LatLngBounds): com.google.android.libraries.places.api.model.Place.Builder;
								public setId(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
								public setTypes(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Type>): com.google.android.libraries.places.api.model.Place.Builder;
								public setAddress(param0: string): com.google.android.libraries.places.api.model.Place.Builder;
								public setRating(param0: java.lang.Double): com.google.android.libraries.places.api.model.Place.Builder;
								public setPhotoMetadatas(param0: java.util.List<com.google.android.libraries.places.api.model.PhotoMetadata>): com.google.android.libraries.places.api.model.Place.Builder;
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
							export class zzt extends com.google.android.libraries.places.api.model.PlusCode.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzt>;
								public setCompoundCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
								public setGlobalCode(param0: string): com.google.android.libraries.places.api.model.PlusCode.Builder;
								public build(): com.google.android.libraries.places.api.model.PlusCode;
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
							export abstract class zzu extends com.google.android.libraries.places.api.model.PlusCode {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzu>;
								public getGlobalCode(): string;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getCompoundCode(): string;
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
							export class zzv extends com.google.android.libraries.places.api.model.RectangularBounds.zza {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzv>;
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
							export abstract class zzw extends com.google.android.libraries.places.api.model.RectangularBounds {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzw>;
								public toString(): string;
								public getSouthwest(): com.google.android.gms.maps.model.LatLng;
								public getNortheast(): com.google.android.gms.maps.model.LatLng;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export abstract class zzx extends com.google.android.libraries.places.api.model.TimeOfWeek {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzx>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getTime(): com.google.android.libraries.places.api.model.LocalTime;
								public getDay(): com.google.android.libraries.places.api.model.DayOfWeek;
								public hashCode(): number;
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
							export class zzy extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzz>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzy>;
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
							export class zzz extends com.google.android.libraries.places.api.model.zza {
								public static class: java.lang.Class<com.google.android.libraries.places.api.model.zzz>;
								public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.api.model.zzz>*/;
								public describeContents(): number;
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
							export abstract class FetchPhotoRequest extends com.google.android.libraries.places.internal.zzdc {
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
									public constructor();
									public build(): com.google.android.libraries.places.api.net.FetchPhotoRequest;
									public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
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
							export abstract class FetchPlaceRequest extends com.google.android.libraries.places.internal.zzdc {
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
									public build(): com.google.android.libraries.places.api.net.FetchPlaceRequest;
									public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
									public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
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
							export abstract class FindAutocompletePredictionsRequest extends com.google.android.libraries.places.internal.zzdc {
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
							export abstract class FindCurrentPlaceRequest extends com.google.android.libraries.places.internal.zzdc {
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
					export module api {
						export module net {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zza>;
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
							export class zzb extends com.google.android.libraries.places.api.net.FetchPhotoRequest {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzb>;
								public toString(): string;
								public getMaxWidth(): java.lang.Integer;
								public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
								public equals(param0: any): boolean;
								public getMaxHeight(): java.lang.Integer;
								public hashCode(): number;
								public getPhotoMetadata(): com.google.android.libraries.places.api.model.PhotoMetadata;
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
							export class zzc extends com.google.android.libraries.places.api.net.FetchPhotoResponse {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzc>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getBitmap(): android.graphics.Bitmap;
								public hashCode(): number;
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
							export class zzd extends com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzd>;
								public setMaxWidth(param0: java.lang.Integer): com.google.android.libraries.places.api.net.FetchPhotoRequest.Builder;
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

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module api {
						export module net {
							export class zze {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zze>;
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
							export class zzf extends com.google.android.libraries.places.api.net.FetchPlaceRequest {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzf>;
								public toString(): string;
								public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
								public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getPlaceId(): string;
								public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
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
							export class zzg extends com.google.android.libraries.places.api.net.FetchPlaceResponse {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzg>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getPlace(): com.google.android.libraries.places.api.model.Place;
								public hashCode(): number;
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
							export class zzh extends com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzh>;
								public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
								public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FetchPlaceRequest.Builder;
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
							export class zzi {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzi>;
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
							export class zzj extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzj>;
								public toString(): string;
								public getLocationBias(): com.google.android.libraries.places.api.model.LocationBias;
								public getSessionToken(): com.google.android.libraries.places.api.model.AutocompleteSessionToken;
								public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
								public equals(param0: any): boolean;
								public getLocationRestriction(): com.google.android.libraries.places.api.model.LocationRestriction;
								public getCountry(): string;
								public getTypeFilter(): com.google.android.libraries.places.api.model.TypeFilter;
								public getQuery(): string;
								public hashCode(): number;
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
							export class zzk extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzk>;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export class zzl extends com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzl>;
								public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public setSessionToken(param0: com.google.android.libraries.places.api.model.AutocompleteSessionToken): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public build(): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest;
								public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public setCountry(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
								public setQuery(param0: string): com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest.Builder;
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
							export class zzm {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzm>;
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
							export class zzn extends com.google.android.libraries.places.api.net.FindCurrentPlaceRequest {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzn>;
								public toString(): string;
								public getCancellationToken(): com.google.android.gms.tasks.CancellationToken;
								public equals(param0: any): boolean;
								public hashCode(): number;
								public getPlaceFields(): java.util.List<com.google.android.libraries.places.api.model.Place.Field>;
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
							export class zzo extends com.google.android.libraries.places.api.net.FindCurrentPlaceResponse {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzo>;
								public toString(): string;
								public equals(param0: any): boolean;
								public getPlaceLikelihoods(): java.util.List<com.google.android.libraries.places.api.model.PlaceLikelihood>;
								public hashCode(): number;
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
							export class zzp extends com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder {
								public static class: java.lang.Class<com.google.android.libraries.places.api.net.zzp>;
								public setCancellationToken(param0: com.google.android.gms.tasks.CancellationToken): com.google.android.libraries.places.api.net.FindCurrentPlaceRequest.Builder;
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
						export class zza extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zza>;
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
						export class zzaa {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaa>;
							public onResponse(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzab {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzab>;
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
						export class zzac {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzac>;
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
						export class zzad {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzad>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzae extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzae>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzaf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaf>;
							public onErrorResponse(param0: com.android.volley.VolleyError): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzag {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzag>;
							public onResponse(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzah {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzah>;
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
						export class zzai {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzai>;
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
						export abstract class zzaj<TypeT, RequestT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaj<any,any>>;
							public constructor(param0: RequestT);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzak extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzak>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzal {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzal>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: string, param1: java.lang.Class): any;
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
						export class zzam<TypeT, ResponseT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzam<any,any>>;
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
						export class zzan<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzan<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzan<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: android.graphics.Bitmap): any /* com.google.android.libraries.places.internal.zzan<T>*/;
								zza(): T;
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
						export class zzao {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzao>;
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
						export class zzap {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzap>;
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
						export class zzaq extends com.google.android.libraries.places.api.net.PlacesClient {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaq>;
							public findCurrentPlace(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
							public findAutocompletePredictions(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
							public fetchPhoto(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
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
						export class zzar {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzar>;
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
						export class zzas {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzas>;
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
						export class zzat {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzat>;
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
						export class zzau {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzau>;
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
						export class zzav {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzav>;
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
						export class zzaw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaw>;
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
						export class zzax {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzax>;
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
						export class zzay {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzay>;
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
						export class zzaz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaz>;
						}
						export module zzaz {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaz.zza>;
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzaz.zzb>;
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzb>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzb interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
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
						export class zzba extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzba>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbb extends com.google.android.libraries.places.internal.zzbw<any,com.google.android.libraries.places.api.net.FetchPhotoResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbc extends com.google.android.libraries.places.internal.zzbt<any,com.google.android.libraries.places.api.net.FetchPhotoRequest> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbd extends java.lang.Object /* com.google.android.libraries.places.internal.zzan<com.google.android.libraries.places.internal.zzbb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbd>;
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
						export class zzbe {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbf extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbf>;
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
						export class zzbg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbh extends com.google.android.libraries.places.internal.zzbw<any,com.google.android.libraries.places.api.net.FetchPlaceResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbi extends com.google.android.libraries.places.internal.zzbt<any,com.google.android.libraries.places.api.net.FetchPlaceRequest> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbk extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbl extends com.google.android.libraries.places.internal.zzbw<any,com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbm extends com.google.android.libraries.places.internal.zzbt<any,com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbn>;
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
						export class zzbo extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbp extends com.google.android.libraries.places.internal.zzbw<any,com.google.android.libraries.places.api.net.FindCurrentPlaceResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbq extends com.google.android.libraries.places.internal.zzbt<any,com.google.android.libraries.places.api.net.FindCurrentPlaceRequest> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbr extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbs extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzbt<TypeT, RequestT>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzaj<any,any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbt<any,any>>;
							public constructor(param0: any, param1: java.util.Locale, param2: string, param3: boolean, param4: any /* com.google.android.libraries.places.internal.zzdp*/);
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
						export class zzbu extends com.google.android.libraries.places.internal.zzal {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbu>;
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
						export class zzbv extends com.google.android.libraries.places.internal.zzy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzbw<TypeT, ResponseT>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzam<any,any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbw<any,any>>;
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
						export class zzbx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbx>;
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
						export class zzby {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzby>;
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
						export class zzbz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzbz>;
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
						export class zzc extends com.google.android.libraries.places.internal.zze {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzca {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzca>;
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
						export class zzcb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcb>;
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
						export class zzcc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcc>;
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
						export class zzcd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcd>;
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
						export class zzce {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzce>;
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
						export class zzcf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzch extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzch>;
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
						export class zzci {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzci>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj>;
						}
						export module zzcj {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zza>;
							}
							export module zza {
								export class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zza.zza>;
								}
								export class zzb {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zza.zzb>;
								}
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zzb>;
							}
							export class zzc {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zzc>;
							}
							export module zzc {
								export class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zzc.zza>;
								}
								export class zzb {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zzc.zzb>;
								}
							}
							export class zzd {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zzd>;
							}
							export class zze {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcj.zze>;
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
						export class zzck {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzck>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcm {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzco {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzco>;
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
						export class zzcp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcq>;
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
						export class zzcr {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcr>;
							public constructor(param0: any /* com.google.android.libraries.places.internal.zzco*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcs {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcs>;
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
						export class zzct {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzct>;
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
						export class zzcu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcv extends com.google.android.libraries.places.internal.zzcw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcw>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzcw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.libraries.places.api.net.PlacesClient;
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
						export class zzcx extends com.google.android.libraries.places.internal.zzcz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzcy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcy>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzcy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): void;
								zza(param0: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>, param1: number, param2: number): void;
								zza(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): void;
								zzb(param0: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>, param1: number, param2: number): void;
								zza(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>, param2: number, param3: number): void;
								zzc(param0: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>, param1: number, param2: number): void;
								zza(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): void;
								zzd(param0: com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>, param1: number, param2: number): void;
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
						export class zzcz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzcz>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzcz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: android.content.Context): any /* com.google.android.libraries.places.internal.zzcz*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzdb*/): any /* com.google.android.libraries.places.internal.zzcz*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzdl*/): any /* com.google.android.libraries.places.internal.zzcz*/;
								zza(): any /* com.google.android.libraries.places.internal.zzcw*/;
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
						export class zzd extends com.google.android.libraries.places.internal.zzb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzd>;
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
						export class zzda {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzda>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzda interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): string;
								zzb(): java.util.Locale;
								zzc(): boolean;
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
						export class zzdb implements com.google.android.libraries.places.internal.zzda, com.google.android.libraries.places.internal.zzdn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdb>;
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
						export class zzdc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdc>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzdc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzdd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdd>;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzde {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzde>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdf extends com.google.android.libraries.places.internal.zzdl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdf>;
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
						export class zzdg extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdh extends com.google.android.libraries.places.internal.zzdl.zza {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzdl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdl>;
							public constructor();
						}
						export module zzdl {
							export abstract class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdl.zza>;
								public constructor();
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdl.zzb>;
								public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzdl.zzb>*/;
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
						export class zzdm {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdn>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzdn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): java.util.Locale;
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
						export class zzdo extends java.util.LinkedHashMap<java.lang.Long,java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdo>;
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
						export class zzdp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdp>;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzdq extends com.google.android.libraries.places.internal.zzdz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdq>;
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
						export class zzdr extends com.google.android.libraries.places.internal.zzdz.zza {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzds {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzds>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdt extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzdu>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdu extends com.google.android.libraries.places.internal.zzdq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdu>;
							public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzdu>*/;
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
						export class zzdv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdw extends com.google.android.libraries.places.internal.zzeb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdw>;
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
						export class zzdx extends android.os.Parcelable {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdx>;
							public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzdx>*/;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public describeContents(): number;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzdx>*/;
							public static valueOf(param0: string): any /* com.google.android.libraries.places.internal.zzdx*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzdy extends com.google.android.libraries.places.internal.zzed {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzdz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdz>;
							public constructor();
						}
						export module zzdz {
							export abstract class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzdz.zza>;
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
					export module internal {
						export class zze {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zze>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zze interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any /* com.google.android.libraries.places.internal.zzg*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzg*/, param1: any /* com.google.android.libraries.places.internal.zzh*/): void;
								zza(param0: any /* com.google.android.libraries.places.internal.zzh*/): void;
								zzb(param0: any /* com.google.android.libraries.places.internal.zzh*/): void;
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
						export class zzea extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzdx>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzea>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzeb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeb>;
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
						export class zzec {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzec>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzec>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzed {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzed>;
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
						export class zzee {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzee>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzef {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzef>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzeg extends com.google.android.libraries.places.internal.zzep {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeg>;
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
						export class zzeh extends com.google.android.libraries.places.internal.zzem {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeh>;
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
						export class zzei extends com.google.android.libraries.places.internal.zzej {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzei>;
							public constructor(param0: com.google.android.libraries.places.api.net.PlacesClient, param1: any /* com.google.android.libraries.places.internal.zzdz*/, param2: com.google.android.libraries.places.api.model.AutocompleteSessionToken);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzej {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzej>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzej interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: string): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
								zza(param0: com.google.android.libraries.places.api.model.AutocompletePrediction): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
								zza(): void;
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
						export class zzek {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzek>;
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
						export class zzel {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzel>;
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
						export abstract class zzem extends com.google.android.libraries.places.internal.zzeo<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzem>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzen {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzen>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzeo<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeo<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzep extends com.google.android.libraries.places.internal.zzeo<com.google.android.libraries.places.api.net.FetchPlaceResponse> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzep>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzeq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeq>;
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
						export class zzer {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzer>;
							public onCleared(): void;
						}
						export module zzer {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzer.zza>;
								public constructor(param0: any /* com.google.android.libraries.places.internal.zzej*/, param1: any /* com.google.android.libraries.places.internal.zzeu*/, param2: any /* com.google.android.libraries.places.internal.zzex*/);
								public create(param0: java.lang.Class): androidx.lifecycle.ViewModel;
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
						export class zzes {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzes>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzet {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzet>;
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
						export class zzeu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzeu>;
							public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzeu>*/;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: any /* com.google.android.libraries.places.internal.zzdx*/, param1: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param2: string, param3: any /* com.google.android.libraries.places.internal.zzb*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzev extends com.google.android.libraries.places.internal.zzex {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzev>;
							public constructor(param0: com.google.android.gms.clearcut.ClearcutLogger, param1: any /* com.google.android.libraries.places.internal.zzdl*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzew extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.libraries.places.internal.zzeu>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzew>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzex {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzex>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzex interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.libraries.places.internal.zzeu*/): void;
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
						export abstract class zzey<T>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzey<any>>;
							public constructor();
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
						export class zzez extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzez>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfa {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzfb extends com.google.android.libraries.places.internal.zzfc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzfc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfc>;
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
						export abstract class zzfd extends com.google.android.libraries.places.internal.zzfb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfd>;
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
						export class zzfe extends com.google.android.libraries.places.internal.zzfb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfe>;
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
						export class zzff {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzff>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfg extends com.google.android.libraries.places.internal.zzfd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfh extends com.google.android.libraries.places.internal.zzfi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfk extends com.google.android.libraries.places.internal.zzfi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfl>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzfl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzfm extends com.google.android.libraries.places.internal.zzff {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfo {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfo>;
						}
						export module zzfo {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfo.zza>;
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
						export class zzfp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfq extends com.google.android.libraries.places.internal.zzfv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfr {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzfs extends java.lang.Object /* com.google.android.libraries.places.internal.zzey<string>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfs>;
							public constructor();
							public constructor(param0: any /* com.google.android.libraries.places.internal.zzfr*/, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzft extends com.google.android.libraries.places.internal.zzfs {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzft>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzfv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfv>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzfv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.libraries.places.internal.zzfr*/, param1: string): java.util.Iterator<string>;
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
						export class zzfw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzfx<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgw<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfx<any>>;
							public constructor();
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
						export abstract class zzfy<C>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfy<any>>;
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
						export class zzfz<T>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgn<any>*/ implements java.io.Serializable  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzfz<any>>;
							public compare(param0: any, param1: any): number;
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
						export class zzg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzga<C>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzfy<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzga<any>>;
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
						export class zzgb extends com.google.android.libraries.places.internal.zzfy<java.lang.Comparable<any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgb>;
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
						export class zzgc<C>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzfy<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgc<any>>;
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
						export class zzgd extends com.google.android.libraries.places.internal.zzfy<java.lang.Comparable<any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgd>;
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
						export abstract class zzge<E>  extends java.util.AbstractCollection<any> implements java.io.Serializable  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzge<any>>;
							public contains(param0: any): boolean;
							public add(param0: any): boolean;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public toArray(param0: native.Array<any>): native.Array<any>;
							public clear(): void;
							public toArray(): native.Array<any>;
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
						export class zzgf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzgg<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzfx<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgg<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzgh<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzge<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgh<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public contains(param0: any): boolean;
							public set(param0: number, param1: any): any;
							public remove(param0: number): any;
							public add(param0: any): boolean;
							public lastIndexOf(param0: any): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public add(param0: number, param1: any): void;
							public indexOf(param0: any): number;
							public equals(param0: any): boolean;
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
						export abstract class zzgi<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgi<any,any>>;
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
						export class zzgj extends java.lang.Object /* com.google.android.libraries.places.internal.zzgh<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgj>;
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
						export abstract class zzgk<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzge<any>*/ implements java.util.Set<any>  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgk<any>>;
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
						export class zzgl<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgl<any,any>>;
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
						export class zzgm<C>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgp<any>*/ implements java.io.Serializable  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgm<any>>;
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
						export abstract class zzgn<T>  extends java.util.Comparator<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgn<any>>;
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
						export class zzgo<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgh<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgo<any>>;
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
						export class zzgp<C>  extends java.io.Serializable {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgp<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzgq<K, V>  extends com.google.android.libraries.places.internal.zzgk<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgq<any,any>>;
							public contains(param0: any): boolean;
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
						export class zzgr<K, V>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgi<any,any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgr<any,any>>;
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
						export class zzgs<K>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgk<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgs<any>>;
							public contains(param0: any): boolean;
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
						export class zzgt extends com.google.android.libraries.places.internal.zzgh<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgt>;
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
						export class zzgu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzgv extends java.lang.Object /* com.google.android.libraries.places.internal.zzgh<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgv>;
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
						export abstract class zzgw<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzgx<any>*/ implements java.util.ListIterator<any>  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgw<any>>;
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
						export abstract class zzgx<E>  extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgx<any>>;
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
						export class zzgy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgy>;
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
						export abstract class zzgz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzgz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzh>;
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
						export class zzha extends com.google.android.libraries.places.internal.zzhd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzha>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhb extends com.google.android.libraries.places.internal.zzhd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhc>;
						}
						export module zzhc {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhc.zza,com.google.android.libraries.places.internal.zzhc.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhc.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhc.zza.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhc.zza.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhc.zza,com.google.android.libraries.places.internal.zzhc.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhc.zza.zzb>;
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
					export module internal {
						export class zzhd extends com.google.android.libraries.places.internal.zzgz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhd>;
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
						export class zzhe {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhf extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhc.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi>;
						}
						export module zzhi {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhi.zza,com.google.android.libraries.places.internal.zzhi.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhi.zza,com.google.android.libraries.places.internal.zzhi.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi.zza.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi.zza.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhi.zza.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi.zza.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhi.zza.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhi.zza.zzd>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhi.zza.zzd>*/;
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
					export module internal {
						export class zzhj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhi.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhk extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhl extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhm extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhi.zza.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhi.zza.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzho {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho>;
						}
						export module zzho {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zza,com.google.android.libraries.places.internal.zzho.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zza,com.google.android.libraries.places.internal.zzho.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzb,com.google.android.libraries.places.internal.zzho.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzb,com.google.android.libraries.places.internal.zzho.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzc,com.google.android.libraries.places.internal.zzho.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzc,com.google.android.libraries.places.internal.zzho.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzc.zza>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzd,com.google.android.libraries.places.internal.zzho.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzd,com.google.android.libraries.places.internal.zzho.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzd.zza>;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zze,com.google.android.libraries.places.internal.zzho.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zze,com.google.android.libraries.places.internal.zzho.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zze.zza>;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzf,com.google.android.libraries.places.internal.zzho.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzf,com.google.android.libraries.places.internal.zzho.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzf.zza>;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzg,com.google.android.libraries.places.internal.zzho.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzg>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzg,com.google.android.libraries.places.internal.zzho.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzg.zza>;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzho.zzh,com.google.android.libraries.places.internal.zzho.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzh>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzho.zzh,com.google.android.libraries.places.internal.zzho.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzho.zzh.zza>;
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
					export module internal {
						export class zzhp extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhr {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr>;
						}
						export module zzhr {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zza,com.google.android.libraries.places.internal.zzhr.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zza,com.google.android.libraries.places.internal.zzhr.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zzb,com.google.android.libraries.places.internal.zzhr.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzb.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhr.zzb.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zzb,com.google.android.libraries.places.internal.zzhr.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzb.zzb>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zzc,com.google.android.libraries.places.internal.zzhr.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zzc,com.google.android.libraries.places.internal.zzhr.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzc.zza>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zzd,com.google.android.libraries.places.internal.zzhr.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zzd,com.google.android.libraries.places.internal.zzhr.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzd.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzd.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhr.zzd.zzb>*/;
									public toString(): string;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zze,com.google.android.libraries.places.internal.zzhr.zze.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zze.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzhr.zze.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zze,com.google.android.libraries.places.internal.zzhr.zze.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zze.zzb>;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzhr.zzf,com.google.android.libraries.places.internal.zzhr.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzhr.zzf,com.google.android.libraries.places.internal.zzhr.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhr.zzf.zza>;
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
					export module internal {
						export class zzhs {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzht extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzht>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhu extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhr.zzb.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhv extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhr.zzd.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhw extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhx extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhy extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzhr.zze.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzhz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzhz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzi extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzia {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzia>;
						}
						export module zzia {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzia.zza,com.google.android.libraries.places.internal.zzia.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzia.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzia.zza,com.google.android.libraries.places.internal.zzia.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzia.zza.zza>;
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
					export module internal {
						export class zzib {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzib>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzic {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic>;
						}
						export module zzic {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzic.zza,com.google.android.libraries.places.internal.zzic.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzic.zza,com.google.android.libraries.places.internal.zzic.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzic.zza.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzic.zza.zzc,com.google.android.libraries.places.internal.zzic.zza.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza.zzc>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zzc {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza.zzc.zza>;
										public toString(): string;
										public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzic.zza.zzc.zza>*/;
									}
									export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzic.zza.zzc,com.google.android.libraries.places.internal.zzic.zza.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzic.zza.zzc.zzb>;
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
					export module internal {
						export class zzid extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzic.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzid>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzie extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzie>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzif extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzif>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzig extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzic.zza.zzc.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzig>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzih {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzih>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzii {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii>;
						}
						export module zzii {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzii.zza,com.google.android.libraries.places.internal.zzii.zza.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zza.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzii.zza.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zza.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzii.zza.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzii.zza,com.google.android.libraries.places.internal.zzii.zza.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zza.zzc>;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zza.zzd>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzii.zza.zzd>*/;
									public toString(): string;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzii.zzb,com.google.android.libraries.places.internal.zzii.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zzb.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzii.zzb.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzii.zzb,com.google.android.libraries.places.internal.zzii.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzii.zzb.zzb>;
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
					export module internal {
						export class zzij extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzij>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzik extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzii.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzik>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzil extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzil>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzim extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzii.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzim>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzin extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzii.zza.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzin>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzio extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzio>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzip extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzip>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zziq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzii.zzb.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzir {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzir>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzis {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis>;
						}
						export module zzis {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzis.zza,com.google.android.libraries.places.internal.zzis.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzis.zza,com.google.android.libraries.places.internal.zzis.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zza.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zza.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzis.zza.zzb>*/;
									public toString(): string;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzis.zzb,com.google.android.libraries.places.internal.zzis.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzis.zzb,com.google.android.libraries.places.internal.zzis.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzis.zzc,com.google.android.libraries.places.internal.zzis.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzis.zzc,com.google.android.libraries.places.internal.zzis.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzis.zzc.zza>;
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
					export module internal {
						export class zzit extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzis.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzit>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zziu extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zziv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv>;
						}
						export module zziv {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zziv.zza,com.google.android.libraries.places.internal.zziv.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zziv.zza,com.google.android.libraries.places.internal.zziv.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zziv.zzb,com.google.android.libraries.places.internal.zziv.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zziv.zzb,com.google.android.libraries.places.internal.zziv.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zziv.zzc,com.google.android.libraries.places.internal.zziv.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zziv.zzc,com.google.android.libraries.places.internal.zziv.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zziv.zzc.zza>;
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
					export module internal {
						export class zziw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzix {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix>;
						}
						export module zzix {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzix.zza,com.google.android.libraries.places.internal.zzix.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzix.zza,com.google.android.libraries.places.internal.zzix.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzix.zzb,com.google.android.libraries.places.internal.zzix.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zzb.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzix.zzb.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzix.zzb,com.google.android.libraries.places.internal.zzix.zzb.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zzb.zzb>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzix.zzc,com.google.android.libraries.places.internal.zzix.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzix.zzc,com.google.android.libraries.places.internal.zzix.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzix.zzc.zza>;
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
					export module internal {
						export class zziy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zziz extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zziz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzj>;
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
						export class zzja extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzix.zzb.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzja>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc>;
						}
						export module zzjc {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjc.zza,com.google.android.libraries.places.internal.zzjc.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjc.zza,com.google.android.libraries.places.internal.zzjc.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjc.zzb,com.google.android.libraries.places.internal.zzjc.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjc.zzb,com.google.android.libraries.places.internal.zzjc.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjc.zzc,com.google.android.libraries.places.internal.zzjc.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjc.zzc,com.google.android.libraries.places.internal.zzjc.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzc.zza>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjc.zzd,com.google.android.libraries.places.internal.zzjc.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjc.zzd,com.google.android.libraries.places.internal.zzjc.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjc.zzd.zza>;
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
					export module internal {
						export class zzjd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzje {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje>;
						}
						export module zzje {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzje.zza,com.google.android.libraries.places.internal.zzje.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzje.zza,com.google.android.libraries.places.internal.zzje.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzje.zzb,com.google.android.libraries.places.internal.zzje.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzje.zzb,com.google.android.libraries.places.internal.zzje.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzje.zzb.zza>;
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
					export module internal {
						export class zzjf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg>;
						}
						export module zzjg {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zza,com.google.android.libraries.places.internal.zzjg.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zza,com.google.android.libraries.places.internal.zzjg.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzb,com.google.android.libraries.places.internal.zzjg.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzb,com.google.android.libraries.places.internal.zzjg.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzc,com.google.android.libraries.places.internal.zzjg.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzc,com.google.android.libraries.places.internal.zzjg.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzc.zza>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzd,com.google.android.libraries.places.internal.zzjg.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzd,com.google.android.libraries.places.internal.zzjg.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzd.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzd.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjg.zzd.zzb>*/;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zze,com.google.android.libraries.places.internal.zzjg.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zze,com.google.android.libraries.places.internal.zzjg.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zze.zza>;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzf,com.google.android.libraries.places.internal.zzjg.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzf,com.google.android.libraries.places.internal.zzjg.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzf.zza>;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzg,com.google.android.libraries.places.internal.zzjg.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzg>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzg,com.google.android.libraries.places.internal.zzjg.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzg.zza>;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzh,com.google.android.libraries.places.internal.zzjg.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzh>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzh,com.google.android.libraries.places.internal.zzjg.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzh.zza>;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzi,com.google.android.libraries.places.internal.zzjg.zzi.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzi>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzi.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjg.zzi.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzi,com.google.android.libraries.places.internal.zzjg.zzi.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzi.zzb>;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzj,com.google.android.libraries.places.internal.zzjg.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzj>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzj,com.google.android.libraries.places.internal.zzjg.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzj.zza>;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzk,com.google.android.libraries.places.internal.zzjg.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzk>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzk,com.google.android.libraries.places.internal.zzjg.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzk.zza>;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjg.zzl,com.google.android.libraries.places.internal.zzjg.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzl>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjg.zzl,com.google.android.libraries.places.internal.zzjg.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjg.zzl.zza>;
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
					export module internal {
						export class zzjh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjg.zzd.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzji extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzji>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjj extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjg.zzi.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjm {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm>;
						}
						export module zzjm {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zza,com.google.android.libraries.places.internal.zzjm.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zza,com.google.android.libraries.places.internal.zzjm.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzb,com.google.android.libraries.places.internal.zzjm.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzb,com.google.android.libraries.places.internal.zzjm.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzb.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzb.zzb,com.google.android.libraries.places.internal.zzjm.zzb.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzb.zzb>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzb.zzb,com.google.android.libraries.places.internal.zzjm.zzb.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzb.zzb.zza>;
									}
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzc,com.google.android.libraries.places.internal.zzjm.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzc,com.google.android.libraries.places.internal.zzjm.zzc.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzc.zza>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzd,com.google.android.libraries.places.internal.zzjm.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzd,com.google.android.libraries.places.internal.zzjm.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzd.zza>;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zze,com.google.android.libraries.places.internal.zzjm.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zze,com.google.android.libraries.places.internal.zzjm.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zze.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zze.zzb,com.google.android.libraries.places.internal.zzjm.zze.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zze.zzb>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zze.zzb,com.google.android.libraries.places.internal.zzjm.zze.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zze.zzb.zza>;
									}
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzf,com.google.android.libraries.places.internal.zzjm.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzf,com.google.android.libraries.places.internal.zzjm.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzf.zza>;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzg,com.google.android.libraries.places.internal.zzjm.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzg>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzg,com.google.android.libraries.places.internal.zzjm.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzg.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzg.zzb,com.google.android.libraries.places.internal.zzjm.zzg.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzg.zzb>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzg.zzb,com.google.android.libraries.places.internal.zzjm.zzg.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzg.zzb.zza>;
									}
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzh,com.google.android.libraries.places.internal.zzjm.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzh>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzh,com.google.android.libraries.places.internal.zzjm.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzh.zza>;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzi,com.google.android.libraries.places.internal.zzjm.zzi.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzi>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzi,com.google.android.libraries.places.internal.zzjm.zzi.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzi.zza>;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzj,com.google.android.libraries.places.internal.zzjm.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzj>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzj,com.google.android.libraries.places.internal.zzjm.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzj.zza>;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzk,com.google.android.libraries.places.internal.zzjm.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzk>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzk,com.google.android.libraries.places.internal.zzjm.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzk.zza>;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzl,com.google.android.libraries.places.internal.zzjm.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzl>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzl,com.google.android.libraries.places.internal.zzjm.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzl.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzl.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjm.zzl.zzb>*/;
									public toString(): string;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjm.zzm,com.google.android.libraries.places.internal.zzjm.zzm.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzm>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjm.zzm,com.google.android.libraries.places.internal.zzjm.zzm.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjm.zzm.zza>;
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
					export module internal {
						export class zzjn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjo>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjo extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjo>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjo>*/;
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
						export class zzjp extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjq>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjq>*/;
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
						export class zzjr extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjs extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjq>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjm.zzl.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzju extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzju>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjv>;
						}
						export module zzjv {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzjv.zza,com.google.android.libraries.places.internal.zzjv.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjv.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjv.zza.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzjv.zza.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzjv.zza,com.google.android.libraries.places.internal.zzjv.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjv.zza.zzb>;
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
					export module internal {
						export class zzjw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjx extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjy extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzjv.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzjz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzjz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzka {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzka>;
						}
						export module zzka {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzka.zza,com.google.android.libraries.places.internal.zzka.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzka.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzka.zza,com.google.android.libraries.places.internal.zzka.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzka.zza.zza>;
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
					export module internal {
						export class zzkb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc>;
						}
						export module zzkc {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zza,com.google.android.libraries.places.internal.zzkc.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zza,com.google.android.libraries.places.internal.zzkc.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zza.zza>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzb,com.google.android.libraries.places.internal.zzkc.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzb,com.google.android.libraries.places.internal.zzkc.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzb.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzb.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzb.zzb>*/;
									public toString(): string;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzc,com.google.android.libraries.places.internal.zzkc.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzc.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzc.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzc,com.google.android.libraries.places.internal.zzkc.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzc.zzb>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzd,com.google.android.libraries.places.internal.zzkc.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzd,com.google.android.libraries.places.internal.zzkc.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzd.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzd.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzd.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzd.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzd.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzd.zzd>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzd.zzd>*/;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zze,com.google.android.libraries.places.internal.zzkc.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zze,com.google.android.libraries.places.internal.zzkc.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zze.zza>;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzf,com.google.android.libraries.places.internal.zzkc.zzf.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzf.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzf.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzf,com.google.android.libraries.places.internal.zzkc.zzf.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzf.zzb>;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzg,com.google.android.libraries.places.internal.zzkc.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzg>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzg,com.google.android.libraries.places.internal.zzkc.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzg.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzg.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzg.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzg.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzg.zzc>*/;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzh,com.google.android.libraries.places.internal.zzkc.zzh.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzh.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzh,com.google.android.libraries.places.internal.zzkc.zzh.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zzb>;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zzc>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzh.zzc>*/;
									public toString(): string;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zzd>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzh.zzd>*/;
								}
								export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zze>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzh.zze>*/;
								}
								export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzh.zzf>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzh.zzf>*/;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzi,com.google.android.libraries.places.internal.zzkc.zzi.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzi>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzi,com.google.android.libraries.places.internal.zzkc.zzi.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzi.zza>;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzj,com.google.android.libraries.places.internal.zzkc.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzj>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzj,com.google.android.libraries.places.internal.zzkc.zzj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzj.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzj.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzj.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzj.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzj.zzc>*/;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzk,com.google.android.libraries.places.internal.zzkc.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzk>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzk,com.google.android.libraries.places.internal.zzkc.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzk.zza>;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzl,com.google.android.libraries.places.internal.zzkc.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzl>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzl,com.google.android.libraries.places.internal.zzkc.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzl.zza>;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzm,com.google.android.libraries.places.internal.zzkc.zzm.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzm>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzm,com.google.android.libraries.places.internal.zzkc.zzm.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzm.zza>;
								}
							}
							export class zzn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzn,com.google.android.libraries.places.internal.zzkc.zzn.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzn>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzn {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzn,com.google.android.libraries.places.internal.zzkc.zzn.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzn.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzn.zzb,com.google.android.libraries.places.internal.zzkc.zzn.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzn.zzb>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zzb {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzn.zzb,com.google.android.libraries.places.internal.zzkc.zzn.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzn.zzb.zza>;
									}
								}
							}
							export class zzo extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzo,com.google.android.libraries.places.internal.zzkc.zzo.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzo>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzo {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzo,com.google.android.libraries.places.internal.zzkc.zzo.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzo.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzo.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzo.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzo.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzo.zzc>*/;
								}
							}
							export class zzp extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzp,com.google.android.libraries.places.internal.zzkc.zzp.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzp>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzp {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzp,com.google.android.libraries.places.internal.zzkc.zzp.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzp.zza>;
								}
							}
							export class zzq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzq,com.google.android.libraries.places.internal.zzkc.zzq.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzq>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzq {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzq,com.google.android.libraries.places.internal.zzkc.zzq.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzq.zza>;
								}
							}
							export class zzr extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzr,com.google.android.libraries.places.internal.zzkc.zzr.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzr>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzr {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzr,com.google.android.libraries.places.internal.zzkc.zzr.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzr.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzr.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzr.zzb>*/;
									public toString(): string;
								}
							}
							export class zzs extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzs,com.google.android.libraries.places.internal.zzkc.zzs.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzs {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzs.zza,com.google.android.libraries.places.internal.zzkc.zzs.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zza>;
									public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								}
								export module zza {
									export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zza.zza>;
										public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzs.zza.zza>*/;
										public toString(): string;
									}
									export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzs.zza,com.google.android.libraries.places.internal.zzkc.zzs.zza.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
										public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zza.zzb>;
									}
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzs,com.google.android.libraries.places.internal.zzkc.zzs.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zzb>;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzs.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzs.zzd>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzkc.zzs.zzd>*/;
									public toString(): string;
								}
							}
							export class zzt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzkc.zzt,com.google.android.libraries.places.internal.zzkc.zzt.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzt>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzt {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzkc.zzt,com.google.android.libraries.places.internal.zzkc.zzt.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkc.zzt.zza>;
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
					export module internal {
						export class zzkd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzb.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzke extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzke>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkf extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzc.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzd.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzki extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzki>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkj extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzd.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzd.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkm extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkn extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzko extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzf.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzko>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkp extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzg.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkq extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkr extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzks extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzg.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzks>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzku>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzku extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzku>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzku>*/;
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
						export class zzkv extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkw extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzh.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkx extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzky extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzh.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzky>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzkz extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzkz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzl>;
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
						export class zzla extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzla>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzh.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzh.zze>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzld extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzld>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzle extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzle>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzh.zzf>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzj.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlh extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzli extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzli>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzj.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzo.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzll extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzll>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlm extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzln extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzo.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzln>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlo extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzr.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlp extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlq extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlr extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzs.zza.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzls extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzs.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzls>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlt extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlu extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlv extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzkc.zzs.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx>;
						}
						export module zzlx {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zza,com.google.android.libraries.places.internal.zzlx.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zza,com.google.android.libraries.places.internal.zzlx.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zza.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zza.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zza.zzb>*/;
									public toString(): string;
								}
							}
							export class zzaa extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzaa,com.google.android.libraries.places.internal.zzlx.zzaa.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaa>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzaa {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzaa,com.google.android.libraries.places.internal.zzlx.zzaa.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaa.zza>;
								}
							}
							export class zzab extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzab,com.google.android.libraries.places.internal.zzlx.zzab.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzab>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzab {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzab.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzab.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzab,com.google.android.libraries.places.internal.zzlx.zzab.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzab.zzb>;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzab.zzc>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzab.zzc>*/;
									public toString(): string;
								}
							}
							export class zzac extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzac,com.google.android.libraries.places.internal.zzlx.zzac.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzac>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzac {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzac,com.google.android.libraries.places.internal.zzlx.zzac.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzac.zza>;
								}
							}
							export class zzad extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzad,com.google.android.libraries.places.internal.zzlx.zzad.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzad>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzad {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzad,com.google.android.libraries.places.internal.zzlx.zzad.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzad.zza>;
								}
							}
							export class zzae extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzae,com.google.android.libraries.places.internal.zzlx.zzae.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzae>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzae {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzae.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzae.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzae,com.google.android.libraries.places.internal.zzlx.zzae.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzae.zzb>;
								}
							}
							export class zzaf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzaf,com.google.android.libraries.places.internal.zzlx.zzaf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzaf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzaf,com.google.android.libraries.places.internal.zzlx.zzaf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaf.zza>;
								}
							}
							export class zzag extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzag,com.google.android.libraries.places.internal.zzlx.zzag.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzag>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzag {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzag,com.google.android.libraries.places.internal.zzlx.zzag.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzag.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzag.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzag.zzb>*/;
								}
							}
							export class zzah extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzah,com.google.android.libraries.places.internal.zzlx.zzah.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzah>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzah {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzah.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzah.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzah,com.google.android.libraries.places.internal.zzlx.zzah.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzah.zzb>;
								}
							}
							export class zzai extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzai,com.google.android.libraries.places.internal.zzlx.zzai.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzai>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzai {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzai,com.google.android.libraries.places.internal.zzlx.zzai.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzai.zza>;
								}
							}
							export class zzaj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzaj,com.google.android.libraries.places.internal.zzlx.zzaj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaj>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzaj {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzaj,com.google.android.libraries.places.internal.zzlx.zzaj.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaj.zza>;
								}
							}
							export class zzak extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzak,com.google.android.libraries.places.internal.zzlx.zzak.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzak>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzak {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzak,com.google.android.libraries.places.internal.zzlx.zzak.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzak.zza>;
								}
							}
							export class zzal extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzal,com.google.android.libraries.places.internal.zzlx.zzal.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzal>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzal {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzal,com.google.android.libraries.places.internal.zzlx.zzal.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzal.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzal.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzal.zzb>*/;
									public toString(): string;
								}
							}
							export class zzam extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzam,com.google.android.libraries.places.internal.zzlx.zzam.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzam>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzam {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzam,com.google.android.libraries.places.internal.zzlx.zzam.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzam.zza>;
								}
							}
							export class zzan extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzan,com.google.android.libraries.places.internal.zzlx.zzan.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzan>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzan {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzan,com.google.android.libraries.places.internal.zzlx.zzan.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzan.zza>;
								}
							}
							export class zzao extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzao,com.google.android.libraries.places.internal.zzlx.zzao.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzao>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzao {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzao,com.google.android.libraries.places.internal.zzlx.zzao.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzao.zza>;
								}
							}
							export class zzap extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzap,com.google.android.libraries.places.internal.zzlx.zzap.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzap>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzap {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzap,com.google.android.libraries.places.internal.zzlx.zzap.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzap.zza>;
								}
							}
							export class zzaq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzaq,com.google.android.libraries.places.internal.zzlx.zzaq.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaq>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzaq {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzaq,com.google.android.libraries.places.internal.zzlx.zzaq.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzaq.zza>;
								}
							}
							export class zzar extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzar,com.google.android.libraries.places.internal.zzlx.zzar.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzar>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzar {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzar,com.google.android.libraries.places.internal.zzlx.zzar.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzar.zza>;
								}
							}
							export class zzas extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzas,com.google.android.libraries.places.internal.zzlx.zzas.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzas>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzas {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzas,com.google.android.libraries.places.internal.zzlx.zzas.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzas.zza>;
								}
							}
							export class zzat extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzat,com.google.android.libraries.places.internal.zzlx.zzat.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzat>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzat {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzat,com.google.android.libraries.places.internal.zzlx.zzat.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzat.zza>;
								}
							}
							export class zzau extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzau,com.google.android.libraries.places.internal.zzlx.zzau.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzau>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzau {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzau.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzau.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzau,com.google.android.libraries.places.internal.zzlx.zzau.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzau.zzb>;
								}
							}
							export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzb,com.google.android.libraries.places.internal.zzlx.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzb>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzb {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzb,com.google.android.libraries.places.internal.zzlx.zzb.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzb.zza>;
								}
							}
							export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzc,com.google.android.libraries.places.internal.zzlx.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzc>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzc {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzc.zza>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzc.zza>*/;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzc,com.google.android.libraries.places.internal.zzlx.zzc.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzc.zzb>;
								}
							}
							export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzd,com.google.android.libraries.places.internal.zzlx.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzd>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzd {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzd,com.google.android.libraries.places.internal.zzlx.zzd.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzd.zza>;
								}
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zze,com.google.android.libraries.places.internal.zzlx.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zze>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zze {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zze,com.google.android.libraries.places.internal.zzlx.zze.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zze.zza>;
								}
							}
							export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzf,com.google.android.libraries.places.internal.zzlx.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzf>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzf {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzf,com.google.android.libraries.places.internal.zzlx.zzf.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzf.zza>;
								}
							}
							export class zzg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzg,com.google.android.libraries.places.internal.zzlx.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzg>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzg {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzg,com.google.android.libraries.places.internal.zzlx.zzg.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzg.zza>;
								}
							}
							export class zzh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzh,com.google.android.libraries.places.internal.zzlx.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzh>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzh {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzh,com.google.android.libraries.places.internal.zzlx.zzh.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzh.zza>;
								}
							}
							export class zzi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzi,com.google.android.libraries.places.internal.zzlx.zzi.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzi {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzi.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzi.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzi,com.google.android.libraries.places.internal.zzlx.zzi.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zzc>;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zzd>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzi.zzd>*/;
								}
								export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zze>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzi.zze>*/;
									public toString(): string;
								}
								export class zzf extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzi.zzf>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzi.zzf>*/;
									public toString(): string;
								}
							}
							export class zzj extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzj,com.google.android.libraries.places.internal.zzlx.zzj.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzj>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzj {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzj.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzj.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzj,com.google.android.libraries.places.internal.zzlx.zzj.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzj.zzb>;
								}
							}
							export class zzk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzk,com.google.android.libraries.places.internal.zzlx.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzk>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzk {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzk,com.google.android.libraries.places.internal.zzlx.zzk.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzk.zza>;
								}
							}
							export class zzl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzl,com.google.android.libraries.places.internal.zzlx.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzl>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzl {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzl,com.google.android.libraries.places.internal.zzlx.zzl.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzl.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzl.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzl.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzl.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzl.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzl.zzd>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzl.zzd>*/;
									public toString(): string;
								}
							}
							export class zzm extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzm,com.google.android.libraries.places.internal.zzlx.zzm.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzm>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzm {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzm.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzm.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzm,com.google.android.libraries.places.internal.zzlx.zzm.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzm.zzb>;
								}
							}
							export class zzn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzn,com.google.android.libraries.places.internal.zzlx.zzn.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzn>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzn {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzn,com.google.android.libraries.places.internal.zzlx.zzn.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzn.zza>;
								}
							}
							export class zzo extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzo,com.google.android.libraries.places.internal.zzlx.zzo.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzo>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzo {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzo,com.google.android.libraries.places.internal.zzlx.zzo.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzo.zza>;
								}
							}
							export class zzp extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzp,com.google.android.libraries.places.internal.zzlx.zzp.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzp>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzp {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzp.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzp.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzp.zzb>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzp.zzb>*/;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzp,com.google.android.libraries.places.internal.zzlx.zzp.zzc>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzp.zzc>;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzp.zzd>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzp.zzd>*/;
									public toString(): string;
								}
							}
							export class zzq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzq,com.google.android.libraries.places.internal.zzlx.zzq.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzq>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzq {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzq.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzq.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzq,com.google.android.libraries.places.internal.zzlx.zzq.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzq.zzb>;
								}
							}
							export class zzr extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzr,com.google.android.libraries.places.internal.zzlx.zzr.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzr>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzr {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzr,com.google.android.libraries.places.internal.zzlx.zzr.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzr.zza>;
								}
							}
							export class zzs extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzs,com.google.android.libraries.places.internal.zzlx.zzs.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzs {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzs,com.google.android.libraries.places.internal.zzlx.zzs.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs.zza>;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs.zzb>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzs.zzb>*/;
									public toString(): string;
								}
								export class zzc extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs.zzc>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzs.zzc>*/;
								}
								export class zzd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs.zzd>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzs.zzd>*/;
									public toString(): string;
								}
								export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzs.zze>;
									public toString(): string;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzs.zze>*/;
								}
							}
							export class zzt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzt,com.google.android.libraries.places.internal.zzlx.zzt.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzt>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzt {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzt,com.google.android.libraries.places.internal.zzlx.zzt.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzt.zza>;
								}
							}
							export class zzu extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzu,com.google.android.libraries.places.internal.zzlx.zzu.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzu>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzu {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzu,com.google.android.libraries.places.internal.zzlx.zzu.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzu.zza>;
								}
							}
							export class zzv extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzv,com.google.android.libraries.places.internal.zzlx.zzv.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzv>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzv {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzv,com.google.android.libraries.places.internal.zzlx.zzv.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzv.zza>;
								}
							}
							export class zzw extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzw,com.google.android.libraries.places.internal.zzlx.zzw.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzw>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzw {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzw,com.google.android.libraries.places.internal.zzlx.zzw.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzw.zza>;
								}
							}
							export class zzx extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzx,com.google.android.libraries.places.internal.zzlx.zzx.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzx>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzx {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzx,com.google.android.libraries.places.internal.zzlx.zzx.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzx.zza>;
								}
							}
							export class zzy extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzy,com.google.android.libraries.places.internal.zzlx.zzy.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzy>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzy {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzy.zza>;
									public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlx.zzy.zza>*/;
									public toString(): string;
								}
								export class zzb extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzy,com.google.android.libraries.places.internal.zzlx.zzy.zzb>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzy.zzb>;
								}
							}
							export class zzz extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzlx.zzz,com.google.android.libraries.places.internal.zzlx.zzz.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzz>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zzz {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzlx.zzz,com.google.android.libraries.places.internal.zzlx.zzz.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlx.zzz.zza>;
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
					export module internal {
						export class zzly extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlz>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzly>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzlz extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzlz>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzlz>*/;
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
						export class zzm {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzm>;
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
						export class zzma extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzma>;
							public toString(): string;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzma>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmb extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmc extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzma>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzme extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zza.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzme>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmf extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmg extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmg>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzmg>*/;
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
						export class zzmh extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzmg>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmj extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmk extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzc.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzml extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzml>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmm extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzmn>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmn>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzmn>*/;
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
						export class zzmo extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmp extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmp>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzmp>*/;
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
						export class zzmq extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmr extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzmp>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzms extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzms>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzi.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmu extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmv extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzi.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmw extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzi.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmx extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmy extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzmz extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzi.zze>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzmz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzn extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzna extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzi.zzf>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzna>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznb extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznc extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznd extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzj.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzne extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzl.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzne>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznf extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzng extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzng>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzl.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzni extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzl.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzni>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznj extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznk extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznl extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzm.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznm extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznn extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzp.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzno extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzno>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznp extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzp.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzp.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznr extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzns extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzns>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznt extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzq.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznu extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzs.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznv extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznw extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznx extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzs.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzny extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzs.zzd>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzny>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zznz extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zznz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzo {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzo>;
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
						export class zzoa extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzob extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzs.zze>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzob>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoc extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzod extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzod>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoe extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzy.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzof extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzof>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzog extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzog>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoh extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzab.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoi extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzab.zzc>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoj extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzok extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzok>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzol extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzae.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzol>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzom extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzag.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzom>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzon extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzon>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoo extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzop extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzah.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzop>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoq extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzal.zzb>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzor extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzor>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzos extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzos>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzot extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzlx.zzau.zza>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzot>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzou extends java.lang.Object /* com.google.android.libraries.places.internal.zzqr<com.google.android.libraries.places.internal.zzov>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzou>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzov extends java.lang.Object /* com.google.android.libraries.places.internal.zzqs*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzov>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzov>*/;
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
						export class zzow {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzow>;
						}
						export module zzow {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzow.zza,com.google.android.libraries.places.internal.zzow.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzow.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzow.zza,com.google.android.libraries.places.internal.zzow.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzow.zza.zza>;
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
					export module internal {
						export class zzox extends com.google.android.libraries.places.internal.zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzox>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzoz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoz>;
						}
						export module zzoz {
							export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<com.google.android.libraries.places.internal.zzoz.zza,com.google.android.libraries.places.internal.zzoz.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoz.zza>;
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export module zza {
								export class zza extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo.zza<com.google.android.libraries.places.internal.zzoz.zza,com.google.android.libraries.places.internal.zzoz.zza.zza>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
									public static class: java.lang.Class<com.google.android.libraries.places.internal.zzoz.zza.zza>;
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
					export module internal {
						export class zzp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzp>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzp>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpa {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzpe<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzsa*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpe<any,any>>;
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
						export abstract class zzpf<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzrx*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpf<any,any>>;
							public constructor();
							public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpg<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpg<any>>;
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
						export abstract class zzph extends com.google.android.libraries.places.internal.zzsd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzph>;
							public constructor();
							public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzpj<E>  extends java.util.AbstractList<any> implements any /* com.google.android.libraries.places.internal.zzqy<any>*/  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpj<any>>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public removeAll(param0: java.util.Collection<any>): boolean;
							public add(param0: number, param1: any): void;
							public clear(): void;
							public equals(param0: any): boolean;
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
						export abstract class zzpk extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpk>;
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
						export abstract class zzpl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpl>;
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
						export class zzpm extends java.lang.Object /* java.util.Comparator<com.google.android.libraries.places.internal.zzpk>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpn extends com.google.android.libraries.places.internal.zzpp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpn>;
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
						export class zzpo {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzpp extends com.google.android.libraries.places.internal.zzpt {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpp>;
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
						export class zzpq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpq>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzpq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzpr extends com.google.android.libraries.places.internal.zzpu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzps {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzps>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpt extends java.util.Iterator<java.lang.Byte> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpt>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzpt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
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
						export class zzpu extends com.google.android.libraries.places.internal.zzpv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpu>;
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
						export abstract class zzpv extends com.google.android.libraries.places.internal.zzpk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzpw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpy extends com.google.android.libraries.places.internal.zzpw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpy>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzpz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzpz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzq>;
							public constructor(param0: android.net.wifi.WifiInfo, param1: android.net.wifi.ScanResult);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqa {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqa>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzqb extends com.google.android.libraries.places.internal.zzpl {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqb>;
						}
						export module zzqb {
							export class zza {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqb.zza>;
							}
							export class zzb extends com.google.android.libraries.places.internal.zzqb {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqb.zzb>;
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
						export class zzqc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqd extends com.google.android.libraries.places.internal.zzua {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqe extends java.lang.Object /* com.google.android.libraries.places.internal.zzqf<com.google.android.libraries.places.internal.zzqo.zze>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqe>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzqf<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqf<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqg<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqg<any>>;
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
						export class zzqh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqi<T>  extends java.lang.Comparable<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqi<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqi<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zzb(): any /* com.google.android.libraries.places.internal.zztu*/;
								zzc(): any /* com.google.android.libraries.places.internal.zztx*/;
								zzd(): boolean;
								zze(): boolean;
								zza(param0: any /* com.google.android.libraries.places.internal.zzsa*/, param1: any /* com.google.android.libraries.places.internal.zzrx*/): any /* com.google.android.libraries.places.internal.zzsa*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzsd*/, param1: any /* com.google.android.libraries.places.internal.zzsd*/): any /* com.google.android.libraries.places.internal.zzsd*/;
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
						export class zzqj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzql {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzql>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzql>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqm extends com.google.android.libraries.places.internal.zzry {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqn>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzqn>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export abstract class zzqo<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzpf<any,any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo<any,any>>;
							public constructor();
							public hashCode(): number;
							public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module zzqo {
							export class zza<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzpe<any,any>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo.zza<any,any>>;
								public constructor(param0: any);
								public constructor();
							}
							export abstract class zzb<MessageType, BuilderType>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzqo<any,any>*/ implements any /* com.google.android.libraries.places.internal.zzrz*/  {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo.zzb<any,any>>;
								public constructor();
								public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
							}
							export class zzc<T>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzpg<any>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo.zzc<any>>;
								public constructor(param0: any);
								public constructor();
							}
							export class zzd extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo.zzd>;
							}
							export class zze extends java.lang.Object /* com.google.android.libraries.places.internal.zzqi<com.google.android.libraries.places.internal.zzqo.zze>*/ {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqo.zze>;
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
						export class zzqp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzqq extends com.google.android.libraries.places.internal.zzpj<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqq>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
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
						export class zzqr<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqr<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqr<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzqs {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqs>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
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
						export class zzqt extends com.google.android.libraries.places.internal.zzqy<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqt>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqt interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): void;
								zza(): boolean;
								zzb(param0: number): any /* com.google.android.libraries.places.internal.zzqy<any>*/;
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
						export class zzqu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqu>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzqv extends com.google.android.libraries.places.internal.zzqy<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqv>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): void;
								zza(): boolean;
								zzb(param0: number): any /* com.google.android.libraries.places.internal.zzqy<any>*/;
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
						export class zzqw<F, T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqw<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqw<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzqx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqx>;
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
						export class zzqy<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqy<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzqy<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): void;
								zza(): boolean;
								zzb(param0: number): any /* com.google.android.libraries.places.internal.zzqy<E>*/;
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
						export class zzqz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzqz>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zzqz>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzr {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzr>;
							public compare(param0: any, param1: any): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzra extends com.google.android.libraries.places.internal.zzqx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzra>;
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
						export class zzrb {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrc extends com.google.android.libraries.places.internal.zzrg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrc>;
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
						export class zzrd<K>  extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrd<any>>;
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
						export class zzre<K>  extends java.util.Map.Entry<any,any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzre<any>>;
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
						export class zzrf extends java.lang.Object /* com.google.android.libraries.places.internal.zzpj<string>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrf>;
							public constructor();
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public size(): number;
							public clear(): void;
							public constructor(param0: number);
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
						export class zzrg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrg>;
							public constructor();
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
						export abstract class zzrh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzri {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzri>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzri interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number): any;
								zza(param0: any /* com.google.android.libraries.places.internal.zzpk*/): void;
								zzd(): java.util.List<any>;
								zze(): any /* com.google.android.libraries.places.internal.zzri*/;
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
						export class zzrj extends com.google.android.libraries.places.internal.zzrh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrl extends com.google.android.libraries.places.internal.zzpj<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrl>;
							public addAll(param0: number, param1: java.util.Collection<any>): boolean;
							public remove(param0: number): any;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): boolean;
							public equals(param0: any): boolean;
							public removeRange(param0: number, param1: number): void;
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
						export class zzrm extends com.google.android.libraries.places.internal.zzrh {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrn extends com.google.android.libraries.places.internal.zzry {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzro extends com.google.android.libraries.places.internal.zzsn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzro>;
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
						export class zzrp<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrp<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrq extends com.google.android.libraries.places.internal.zzry {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrr<K, V>  extends java.util.LinkedHashMap<any,any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrr<any,any>>;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public hashCode(): number;
							public remove(param0: any): any;
							public clear(): void;
							public put(param0: any, param1: any): any;
							public equals(param0: any): boolean;
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
						export class zzrs<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrs<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrt extends com.google.android.libraries.places.internal.zzru {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzru {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzru>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzru interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: any): java.util.Map<any,any>;
								zzc(param0: any): any;
								zza(param0: any): any /* com.google.android.libraries.places.internal.zzrs<any,any>*/;
								zza(param0: any, param1: any): any;
								zza(param0: number, param1: any, param2: any): number;
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
						export class zzrv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrv>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzrv interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zzb(): boolean;
								zzc(): any /* com.google.android.libraries.places.internal.zzrx*/;
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
						export class zzrw {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzrx extends com.google.android.libraries.places.internal.zzrz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrx>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzrx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.libraries.places.internal.zzqb*/): void;
								zzg(): number;
								a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								zzl(): any /* com.google.android.libraries.places.internal.zzsa*/;
								zzh(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zzc(): boolean;
							});
							public constructor();
							public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzry {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzry>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzry interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.lang.Class<any>): boolean;
								zzb(param0: java.lang.Class<any>): any /* com.google.android.libraries.places.internal.zzrv*/;
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
						export class zzrz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzrz>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzrz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzh(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zzc(): boolean;
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
						export class zzs {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsa extends com.google.android.libraries.places.internal.zzrz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsa>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsa interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzg(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zzf(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzrx*/): any /* com.google.android.libraries.places.internal.zzsa*/;
								zzh(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zzc(): boolean;
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
						export class zzsb<T>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzso<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsb<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsd extends com.google.android.libraries.places.internal.zzrx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsd>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any /* com.google.android.libraries.places.internal.zzsd*/;
								zza(param0: any /* com.google.android.libraries.places.internal.zzqb*/): void;
								zzg(): number;
								a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
								zzl(): any /* com.google.android.libraries.places.internal.zzsa*/;
								zzh(): any /* com.google.android.libraries.places.internal.zzrx*/;
								zzc(): boolean;
							});
							public constructor();
							public a_(): any /* com.google.android.libraries.places.internal.zzpk*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzse<T>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzso<any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzse<any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsf extends com.google.android.libraries.places.internal.zzsg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsf>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsg {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsg>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzsh<MessageType>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsh<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsh<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzsi {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsi>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsj {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsk {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsk>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class zzsl extends com.google.android.libraries.places.internal.zzrv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsm<E>  extends java.lang.Object /* com.google.android.libraries.places.internal.zzpj<any>*/ implements java.util.RandomAccess  {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsm<any>>;
							public remove(param0: number): any;
							public set(param0: number, param1: any): any;
							public add(param0: any): boolean;
							public size(): number;
							public remove(param0: any): boolean;
							public add(param0: number, param1: any): void;
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
						export class zzsn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsn>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzsn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.lang.Class): any /* com.google.android.libraries.places.internal.zzso<any>*/;
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
						export class zzso<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzso<any>>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzso<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: T, param1: any /* com.google.android.libraries.places.internal.zzua*/): void;
								zzc(param0: T): void;
								zzd(param0: T): boolean;
								zza(param0: T, param1: T): boolean;
								zza(param0: T): number;
								zzb(param0: T, param1: T): void;
								zzb(param0: T): number;
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
						export class zzsp<K, V>  extends java.util.AbstractMap<any,any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsp<any,any>>;
							public get(param0: any): any;
							public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
							public size(): number;
							public hashCode(): number;
							public remove(param0: any): any;
							public containsKey(param0: any): boolean;
							public clear(): void;
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
						export class zzsq {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsr extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsr>;
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
						export class zzss extends java.lang.Object /* com.google.android.libraries.places.internal.zzsp<any,any>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzss>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzst {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzst>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzsu extends java.lang.Object /* com.google.android.libraries.places.internal.zzta*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsu>;
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
						export class zzsv extends java.lang.Iterable<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsv>;
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
						export class zzsw extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsw>;
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
						export class zzsx extends java.util.Iterator<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsx>;
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
						export class zzsy extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsy>;
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
						export class zzsz extends com.google.android.libraries.places.internal.zzrv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzsz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzt extends com.google.android.libraries.places.internal.zzcy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzta extends java.util.AbstractSet<java.util.Map.Entry<any,any>> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzta>;
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
						export class zztb extends com.google.android.libraries.places.internal.zzte {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztc {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztd {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztd>;
							public constructor(param0: any /* com.google.android.libraries.places.internal.zzrx*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzte {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzte>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzte interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zza(param0: number): number;
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
						export class zztf {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztf>;
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
						export abstract class zztg<T, B>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztg<any,any>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzth extends java.util.AbstractList<string> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzth>;
							public listIterator(param0: number): java.util.ListIterator<string>;
							public iterator(): java.util.Iterator<string>;
							public size(): number;
							public constructor(param0: any /* com.google.android.libraries.places.internal.zzri*/);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzti extends java.lang.Object /* com.google.android.libraries.places.internal.zztg<com.google.android.libraries.places.internal.zztf,com.google.android.libraries.places.internal.zztf>*/ {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzti>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztj extends java.util.Iterator<string> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztj>;
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
						export class zztk extends java.util.ListIterator<string> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztk>;
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
						export class zztl extends java.security.PrivilegedExceptionAction<sun.misc.Unsafe> {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztm {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm>;
						}
						export module zztm {
							export class zza extends com.google.android.libraries.places.internal.zztm.zzc {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm.zza>;
							}
							export class zzb extends com.google.android.libraries.places.internal.zztm.zzc {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm.zzb>;
							}
							export abstract class zzc {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm.zzc>;
							}
							export class zzd extends com.google.android.libraries.places.internal.zztm.zzc {
								public static class: java.lang.Class<com.google.android.libraries.places.internal.zztm.zzd>;
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
						export abstract class zztn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzto {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzto>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztp {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztq extends com.google.android.libraries.places.internal.zztn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztr {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzts extends com.google.android.libraries.places.internal.zztn {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzts>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztt extends com.google.android.libraries.places.internal.zztu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztu>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zztu>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztv extends com.google.android.libraries.places.internal.zztu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztw extends com.google.android.libraries.places.internal.zztu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztx>;
							public static values(): any /* native.Array<com.google.android.libraries.places.internal.zztx>*/;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzty extends com.google.android.libraries.places.internal.zztu {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzty>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zztz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zztz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzu extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzu>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzua {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzua>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzua interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zza(param0: number, param1: number): void;
								zzb(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzc(param0: number, param1: number): void;
								zzd(param0: number, param1: number): void;
								zzd(param0: number, param1: number): void;
								zza(param0: number, param1: boolean): void;
								zza(param0: number, param1: string): void;
								zza(param0: number, param1: any /* com.google.android.libraries.places.internal.zzpk*/): void;
								zze(param0: number, param1: number): void;
								zzf(param0: number, param1: number): void;
								zze(param0: number, param1: number): void;
								zza(param0: number, param1: any, param2: any /* com.google.android.libraries.places.internal.zzso<any>*/): void;
								zzb(param0: number, param1: any, param2: any /* com.google.android.libraries.places.internal.zzso<any>*/): void;
								zza(param0: number): void;
								zzb(param0: number): void;
								zza(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzb(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzc(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzd(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zze(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzf(param0: number, param1: java.util.List<java.lang.Float>, param2: boolean): void;
								zzg(param0: number, param1: java.util.List<java.lang.Double>, param2: boolean): void;
								zzh(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzi(param0: number, param1: java.util.List<java.lang.Boolean>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<string>): void;
								zzb(param0: number, param1: any /* java.util.List<com.google.android.libraries.places.internal.zzpk>*/): void;
								zzj(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzk(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzl(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zzm(param0: number, param1: java.util.List<java.lang.Integer>, param2: boolean): void;
								zzn(param0: number, param1: java.util.List<java.lang.Long>, param2: boolean): void;
								zza(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.libraries.places.internal.zzso<any>*/): void;
								zzb(param0: number, param1: java.util.List<any>, param2: any /* com.google.android.libraries.places.internal.zzso<any>*/): void;
								zza(param0: number, param1: any): void;
								zza(param0: number, param1: any /* com.google.android.libraries.places.internal.zzrs<any,any>*/, param2: java.util.Map): void;
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
						export class zzv {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzw extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzx {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzx>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module internal {
						export class zzy {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzy>;
							/**
							 * Constructs a new instance of the com.google.android.libraries.places.internal.zzy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: com.google.android.libraries.places.api.net.FindAutocompletePredictionsRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindAutocompletePredictionsResponse>;
								zza(param0: com.google.android.libraries.places.api.net.FetchPhotoRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPhotoResponse>;
								zza(param0: com.google.android.libraries.places.api.net.FetchPlaceRequest): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FetchPlaceResponse>;
								zza(param0: com.google.android.libraries.places.api.net.FindCurrentPlaceRequest, param1: android.location.Location, param2: any /* com.google.android.libraries.places.internal.zzgh<com.google.android.libraries.places.internal.zzq>*/): com.google.android.gms.tasks.Task<com.google.android.libraries.places.api.net.FindCurrentPlaceResponse>;
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
						export class zzz {
							public static class: java.lang.Class<com.google.android.libraries.places.internal.zzz>;
							public onErrorResponse(param0: com.android.volley.VolleyError): void;
						}
					}
				}
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
							export class IntentBuilder {
								public static class: java.lang.Class<com.google.android.libraries.places.widget.Autocomplete.IntentBuilder>;
								public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public constructor(param0: com.google.android.libraries.places.widget.model.AutocompleteActivityMode, param1: java.util.List<com.google.android.libraries.places.api.model.Place.Field>);
								public setCountry(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public setInitialQuery(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public build(param0: android.content.Context): android.content.Intent;
								public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public setHint(param0: string): com.google.android.libraries.places.widget.Autocomplete.IntentBuilder;
								public constructor(param0: any /* com.google.android.libraries.places.internal.zzdz*/);
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
						export class AutocompleteActivity implements com.google.android.libraries.places.widget.listener.PlaceSelectionListener {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteActivity>;
							public static RESULT_ERROR: number;
							public constructor();
							public onCreate(param0: android.os.Bundle): void;
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
					export module widget {
						export class AutocompleteFragment {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.AutocompleteFragment>;
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
							public constructor();
							public setLocationRestriction(param0: com.google.android.libraries.places.api.model.LocationRestriction): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
							public setPlaceFields(param0: java.util.List<com.google.android.libraries.places.api.model.Place.Field>): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public setText(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public onResume(): void;
							public onSaveInstanceState(param0: android.os.Bundle): void;
							public setOnPlaceSelectedListener(param0: com.google.android.libraries.places.widget.listener.PlaceSelectionListener): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public static newInstance(): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public onCreate(param0: android.os.Bundle): void;
							public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
							public setActivityMode(param0: com.google.android.libraries.places.widget.model.AutocompleteActivityMode): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public setCountry(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public setTypeFilter(param0: com.google.android.libraries.places.api.model.TypeFilter): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public setHint(param0: string): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
							public setLocationBias(param0: com.google.android.libraries.places.api.model.LocationBias): com.google.android.libraries.places.widget.AutocompleteSupportFragment;
						}
					}
				}
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
						export module internal {
							export module ui {
								export class AutocompleteImplFragment {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.AutocompleteImplFragment>;
									public onViewCreated(param0: android.view.View, param1: android.os.Bundle): void;
									public onPause(): void;
									public onResume(): void;
									public onCreate(param0: android.os.Bundle): void;
								}
								export module AutocompleteImplFragment {
									export class zza {
										public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.AutocompleteImplFragment.zza>;
										public afterTextChanged(param0: android.text.Editable): void;
										public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
										public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
									}
									export class zzb {
										public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.AutocompleteImplFragment.zzb>;
										public instantiate(param0: java.lang.ClassLoader, param1: string): androidx.fragment.app.Fragment;
										public constructor(param0: number, param1: android.content.Context, param2: any /* com.google.android.libraries.places.internal.zzdz*/);
									}
									export class zzc {
										public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.AutocompleteImplFragment.zzc>;
										public onFocusChange(param0: android.view.View, param1: boolean): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zza {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zza>;
									public onClick(param0: android.view.View): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzb {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzb>;
									public onChanged(param0: any): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzc extends com.google.android.libraries.places.widget.internal.ui.zzn {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzc>;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzd {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzd>;
									public onClick(param0: android.view.View): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zze {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zze>;
									public handleOnBackPressed(): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzf {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzf>;
									public onClick(param0: android.view.View): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzg {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzg>;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzh {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzh>;
									public onScrollStateChanged(param0: androidx.recyclerview.widget.RecyclerView, param1: number): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzi {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzi>;
									public animateAdd(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): boolean;
									public isRunning(): boolean;
									public runPendingAnimations(): void;
									public endAnimations(): void;
									public endAnimation(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
									public constructor(param0: android.content.res.Resources);
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
					export module widget {
						export module internal {
							export module ui {
								export class zzj extends java.lang.Object /* androidx.recyclerview.widget.ListAdapter<com.google.android.libraries.places.api.model.AutocompletePrediction,com.google.android.libraries.places.widget.internal.ui.zzo>*/ {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzj>;
									public constructor(param0: any /* com.google.android.libraries.places.widget.internal.ui.zzn*/);
									public submitList(param0: java.util.List<com.google.android.libraries.places.api.model.AutocompletePrediction>): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzk {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzk>;
									public onAnimationCancel(param0: android.animation.Animator): void;
									public onAnimationEnd(param0: android.animation.Animator): void;
									public onAnimationStart(param0: android.animation.Animator): void;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzl extends androidx.recyclerview.widget.DiffUtil.ItemCallback<com.google.android.libraries.places.api.model.AutocompletePrediction> {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzl>;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzm {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzm>;
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
					export module widget {
						export module internal {
							export module ui {
								export class zzn {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzn>;
									/**
									 * Constructs a new instance of the com.google.android.libraries.places.widget.internal.ui.zzn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										zza(param0: com.google.android.libraries.places.api.model.AutocompletePrediction, param1: number): void;
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
}

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module widget {
						export module internal {
							export module ui {
								export class zzo {
									public static class: java.lang.Class<com.google.android.libraries.places.widget.internal.ui.zzo>;
									public constructor(param0: any /* com.google.android.libraries.places.widget.internal.ui.zzn*/, param1: android.view.View);
									public onClick(param0: android.view.View): void;
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

declare module com {
	export module google {
		export module android {
			export module libraries {
				export module places {
					export module widget {
						export module model {
							export class zza extends android.os.Parcelable.Creator<com.google.android.libraries.places.widget.model.AutocompleteActivityMode> {
								public static class: java.lang.Class<com.google.android.libraries.places.widget.model.zza>;
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
						export class zza {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zza>;
						}
					}
				}
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzb>;
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
					export module widget {
						export class zzc {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzc>;
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
					export module widget {
						export class zzd {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzd>;
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
					export module widget {
						export class zze {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zze>;
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
					export module widget {
						export class zzf {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzf>;
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
					export module widget {
						export class zzg {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzg>;
							public onChanged(param0: any): void;
						}
					}
				}
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
						export class zzh {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzh>;
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
					export module widget {
						export class zzi {
							public static class: java.lang.Class<com.google.android.libraries.places.widget.zzi>;
							public onChanged(param0: any): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.libraries.places.internal.zzaj:2
//com.google.android.libraries.places.internal.zzam:2
//com.google.android.libraries.places.internal.zzan:1
//com.google.android.libraries.places.internal.zzbt:2
//com.google.android.libraries.places.internal.zzbw:2
//com.google.android.libraries.places.internal.zzeo:1
//com.google.android.libraries.places.internal.zzey:1
//com.google.android.libraries.places.internal.zzfx:1
//com.google.android.libraries.places.internal.zzfy:1
//com.google.android.libraries.places.internal.zzfz:1
//com.google.android.libraries.places.internal.zzga:1
//com.google.android.libraries.places.internal.zzgc:1
//com.google.android.libraries.places.internal.zzge:1
//com.google.android.libraries.places.internal.zzgg:1
//com.google.android.libraries.places.internal.zzgh:1
//com.google.android.libraries.places.internal.zzgi:2
//com.google.android.libraries.places.internal.zzgk:1
//com.google.android.libraries.places.internal.zzgl:2
//com.google.android.libraries.places.internal.zzgm:1
//com.google.android.libraries.places.internal.zzgn:1
//com.google.android.libraries.places.internal.zzgo:1
//com.google.android.libraries.places.internal.zzgp:1
//com.google.android.libraries.places.internal.zzgq:2
//com.google.android.libraries.places.internal.zzgr:2
//com.google.android.libraries.places.internal.zzgs:1
//com.google.android.libraries.places.internal.zzgw:1
//com.google.android.libraries.places.internal.zzgx:1
//com.google.android.libraries.places.internal.zzpe:2
//com.google.android.libraries.places.internal.zzpf:2
//com.google.android.libraries.places.internal.zzpg:1
//com.google.android.libraries.places.internal.zzpj:1
//com.google.android.libraries.places.internal.zzqf:1
//com.google.android.libraries.places.internal.zzqg:1
//com.google.android.libraries.places.internal.zzqi:1
//com.google.android.libraries.places.internal.zzqo:2
//com.google.android.libraries.places.internal.zzqo.zza:2
//com.google.android.libraries.places.internal.zzqo.zzb:2
//com.google.android.libraries.places.internal.zzqo.zzc:1
//com.google.android.libraries.places.internal.zzqr:1
//com.google.android.libraries.places.internal.zzqw:2
//com.google.android.libraries.places.internal.zzqy:1
//com.google.android.libraries.places.internal.zzrd:1
//com.google.android.libraries.places.internal.zzre:1
//com.google.android.libraries.places.internal.zzrp:2
//com.google.android.libraries.places.internal.zzrr:2
//com.google.android.libraries.places.internal.zzrs:2
//com.google.android.libraries.places.internal.zzsb:1
//com.google.android.libraries.places.internal.zzse:1
//com.google.android.libraries.places.internal.zzsh:1
//com.google.android.libraries.places.internal.zzsm:1
//com.google.android.libraries.places.internal.zzso:1
//com.google.android.libraries.places.internal.zzsp:2
//com.google.android.libraries.places.internal.zztg:2

