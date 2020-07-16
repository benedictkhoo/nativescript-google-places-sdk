declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ItemListIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ItemListIntents>;
						public static ACTION_CREATE_ITEM_LIST: string;
						public static ACTION_DELETE_ITEM_LIST: string;
						public static ACTION_APPEND_ITEM_LIST: string;
						public static ACTION_ACCEPT_ITEM: string;
						public static ACTION_REJECT_ITEM: string;
						public static ACTION_DELETE_ITEM: string;
						public static EXTRA_LIST_NAME: string;
						public static EXTRA_LIST_QUERY: string;
						public static EXTRA_ITEM_NAME: string;
						public static EXTRA_ITEM_NAMES: string;
						public static EXTRA_ITEM_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class NoteIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.NoteIntents>;
						public static ACTION_CREATE_NOTE: string;
						public static ACTION_APPEND_NOTE: string;
						public static ACTION_DELETE_NOTE: string;
						public static EXTRA_NAME: string;
						public static EXTRA_TEXT: string;
						public static EXTRA_NOTE_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class ReserveIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.ReserveIntents>;
						public static ACTION_RESERVE_TAXI_RESERVATION: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module actions {
					export class SearchIntents {
						public static class: java.lang.Class<com.google.android.gms.actions.SearchIntents>;
						public static ACTION_SEARCH: string;
						public static EXTRA_QUERY: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class AccountPicker {
						public static class: java.lang.Class<com.google.android.gms.common.AccountPicker>;
						public static newChooseAccountIntent(param0: android.accounts.Account, param1: java.util.ArrayList<android.accounts.Account>, param2: native.Array<string>, param3: boolean, param4: string, param5: string, param6: native.Array<string>, param7: android.os.Bundle): android.content.Intent;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class BlockingServiceConnection {
						public static class: java.lang.Class<com.google.android.gms.common.BlockingServiceConnection>;
						public constructor();
						public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						public getService(): android.os.IBinder;
						public getServiceWithTimeout(param0: number, param1: java.util.concurrent.TimeUnit): android.os.IBinder;
						public onServiceDisconnected(param0: android.content.ComponentName): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ConnectionResult extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.ConnectionResult>;
						public static UNKNOWN: number;
						public static SUCCESS: number;
						public static SERVICE_MISSING: number;
						public static SERVICE_VERSION_UPDATE_REQUIRED: number;
						public static SERVICE_DISABLED: number;
						public static SIGN_IN_REQUIRED: number;
						public static INVALID_ACCOUNT: number;
						public static RESOLUTION_REQUIRED: number;
						public static NETWORK_ERROR: number;
						public static INTERNAL_ERROR: number;
						public static SERVICE_INVALID: number;
						public static DEVELOPER_ERROR: number;
						public static LICENSE_CHECK_FAILED: number;
						public static CANCELED: number;
						public static TIMEOUT: number;
						public static INTERRUPTED: number;
						public static API_UNAVAILABLE: number;
						public static SIGN_IN_FAILED: number;
						public static SERVICE_UPDATING: number;
						public static SERVICE_MISSING_PERMISSION: number;
						public static RESTRICTED_PROFILE: number;
						public static DRIVE_EXTERNAL_STORAGE_REQUIRED: number;
						public static RESULT_SUCCESS: com.google.android.gms.common.ConnectionResult;
						public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult>;
						public hasResolution(): boolean;
						public getErrorMessage(): string;
						public constructor();
						public getErrorCode(): number;
						public getResolution(): android.app.PendingIntent;
						public isSuccess(): boolean;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
						public constructor(param0: number, param1: android.app.PendingIntent);
						public constructor(param0: number);
						public startResolutionForResult(param0: android.app.Activity, param1: number): void;
						public constructor(param0: number, param1: android.app.PendingIntent, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Feature extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.Feature>;
						public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.Feature>;
						public constructor();
						public constructor(param0: string, param1: number);
						public constructor(param0: string, param1: number, param2: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getVersion(): number;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getName(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class FirstPartyScopes {
						public static class: java.lang.Class<com.google.android.gms.common.FirstPartyScopes>;
						public static GAMES_1P: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleApiAvailabilityLight {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleApiAvailabilityLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static getInstance(): com.google.android.gms.common.GoogleApiAvailabilityLight;
						public getClientVersion(param0: android.content.Context): number;
						public isPlayStorePossiblyUpdating(param0: android.content.Context, param1: number): boolean;
						public getErrorResolutionPendingIntent(param0: android.content.Context, param1: number, param2: number): android.app.PendingIntent;
						public isUninstalledAppPossiblyUpdating(param0: android.content.Context, param1: string): boolean;
						public getErrorResolutionIntent(param0: android.content.Context, param1: number, param2: string): android.content.Intent;
						public getErrorResolutionPendingIntent(param0: android.content.Context, param1: number, param2: number, param3: string): android.app.PendingIntent;
						public getErrorResolutionIntent(param0: number): android.content.Intent;
						public getApkVersion(param0: android.content.Context): number;
						public cancelAvailabilityErrorNotifications(param0: android.content.Context): void;
						public getErrorString(param0: number): string;
						public isGooglePlayServicesAvailable(param0: android.content.Context): number;
						public verifyGooglePlayServicesIsAvailable(param0: android.content.Context, param1: number): void;
						public isPlayServicesPossiblyUpdating(param0: android.content.Context, param1: number): boolean;
						public isGooglePlayServicesAvailable(param0: android.content.Context, param1: number): number;
						public isUserResolvableError(param0: number): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesNotAvailableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesNotAvailableException>;
						public errorCode: number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesRepairableException extends com.google.android.gms.common.UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesRepairableException>;
						public getConnectionStatusCode(): number;
						public constructor(param0: number, param1: string, param2: android.content.Intent);
						public constructor(param0: string, param1: android.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GooglePlayServicesUtilLight {
						public static class: java.lang.Class<com.google.android.gms.common.GooglePlayServicesUtilLight>;
						public static GOOGLE_PLAY_SERVICES_VERSION_CODE: number;
						public static GOOGLE_PLAY_SERVICES_PACKAGE: string;
						public static GOOGLE_PLAY_GAMES_PACKAGE: string;
						public static GOOGLE_PLAY_STORE_PACKAGE: string;
						public static isGooglePlayServicesUid(param0: android.content.Context, param1: number): boolean;
						public static getApkVersion(param0: android.content.Context): number;
						public static enableUsingApkIndependentContext(): void;
						public static ensurePlayServicesAvailable(param0: android.content.Context, param1: number): void;
						public static getGooglePlayServicesAvailabilityRecoveryIntent(param0: number): android.content.Intent;
						public static isGooglePlayServicesAvailable(param0: android.content.Context): number;
						public static isUserRecoverableError(param0: number): boolean;
						public static getRemoteContext(param0: android.content.Context): android.content.Context;
						public static uidHasPackageName(param0: android.content.Context, param1: number, param2: string): boolean;
						public static isSidewinderDevice(param0: android.content.Context): boolean;
						public static isPlayStorePossiblyUpdating(param0: android.content.Context, param1: number): boolean;
						public static isRestrictedUserProfile(param0: android.content.Context): boolean;
						public static honorsDebugCertificates(param0: android.content.Context): boolean;
						public static getRemoteResource(param0: android.content.Context): android.content.res.Resources;
						public static getErrorString(param0: number): string;
						public static getClientVersion(param0: android.content.Context): number;
						public static getErrorPendingIntent(param0: number, param1: android.content.Context, param2: number): android.app.PendingIntent;
						public static cancelAvailabilityErrorNotifications(param0: android.content.Context): void;
						public static isPlayServicesPossiblyUpdating(param0: android.content.Context, param1: number): boolean;
						public static isGooglePlayServicesAvailable(param0: android.content.Context, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class GoogleSignatureVerifier {
						public static class: java.lang.Class<com.google.android.gms.common.GoogleSignatureVerifier>;
						public isGooglePublicSignedPackage(param0: android.content.pm.PackageInfo): boolean;
						public isPackageGoogleSigned(param0: string): boolean;
						public isUidGoogleSigned(param0: number): boolean;
						public static getInstance(param0: android.content.Context): com.google.android.gms.common.GoogleSignatureVerifier;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class ProGuardCanary {
						public static class: java.lang.Class<com.google.android.gms.common.ProGuardCanary>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class Scopes {
						public static class: java.lang.Class<com.google.android.gms.common.Scopes>;
						public static PROFILE: string;
						public static EMAIL: string;
						public static OPEN_ID: string;
						public static PLUS_LOGIN: string;
						public static PLUS_ME: string;
						public static GAMES: string;
						public static GAMES_LITE: string;
						public static CLOUD_SAVE: string;
						public static APP_STATE: string;
						public static DRIVE_FILE: string;
						public static DRIVE_APPFOLDER: string;
						public static DRIVE_FULL: string;
						public static DRIVE_APPS: string;
						public static FITNESS_ACTIVITY_READ: string;
						public static FITNESS_ACTIVITY_READ_WRITE: string;
						public static FITNESS_LOCATION_READ: string;
						public static FITNESS_LOCATION_READ_WRITE: string;
						public static FITNESS_BODY_READ: string;
						public static FITNESS_BODY_READ_WRITE: string;
						public static FITNESS_NUTRITION_READ: string;
						public static FITNESS_NUTRITION_READ_WRITE: string;
						public static FITNESS_BLOOD_PRESSURE_READ: string;
						public static FITNESS_BLOOD_PRESSURE_READ_WRITE: string;
						public static FITNESS_BLOOD_GLUCOSE_READ: string;
						public static FITNESS_BLOOD_GLUCOSE_READ_WRITE: string;
						public static FITNESS_OXYGEN_SATURATION_READ: string;
						public static FITNESS_OXYGEN_SATURATION_READ_WRITE: string;
						public static FITNESS_BODY_TEMPERATURE_READ: string;
						public static FITNESS_BODY_TEMPERATURE_READ_WRITE: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ: string;
						public static FITNESS_REPRODUCTIVE_HEALTH_READ_WRITE: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class UserRecoverableException {
						public static class: java.lang.Class<com.google.android.gms.common.UserRecoverableException>;
						public getIntent(): android.content.Intent;
						public constructor(param0: string, param1: android.content.Intent);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdk {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdk>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithFieldsAndMethods {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithFieldsAndMethods interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module annotation {
						export class KeepForSdkWithMembers {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepForSdkWithMembers>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepForSdkWithMembers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module annotation {
						export class KeepName {
							public static class: java.lang.Class<com.google.android.gms.common.annotation.KeepName>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.annotation.KeepName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module api {
						export class ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ApiException>;
							public mStatus: com.google.android.gms.common.api.Status;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public constructor(param0: com.google.android.gms.common.api.Status);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class CommonStatusCodes {
							public static class: java.lang.Class<com.google.android.gms.common.api.CommonStatusCodes>;
							public static SUCCESS_CACHE: number;
							public static SUCCESS: number;
							public static SERVICE_VERSION_UPDATE_REQUIRED: number;
							public static SERVICE_DISABLED: number;
							public static SIGN_IN_REQUIRED: number;
							public static INVALID_ACCOUNT: number;
							public static RESOLUTION_REQUIRED: number;
							public static NETWORK_ERROR: number;
							public static INTERNAL_ERROR: number;
							public static DEVELOPER_ERROR: number;
							public static ERROR: number;
							public static INTERRUPTED: number;
							public static TIMEOUT: number;
							public static CANCELED: number;
							public static API_NOT_CONNECTED: number;
							public constructor();
							public static getStatusCodeString(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Releasable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Releasable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								release(): void;
							});
							public constructor();
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResolvableApiException extends com.google.android.gms.common.api.ApiException {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvableApiException>;
							public constructor(param0: com.google.android.gms.common.api.Status);
							public startResolutionForResult(param0: android.app.Activity, param1: number): void;
							public getResolution(): android.app.PendingIntent;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResolvingResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallbacks<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResolvingResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public constructor(param0: android.app.Activity, param1: number);
							public onUnresolvableFailure(param0: com.google.android.gms.common.api.Status): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Response<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.Response<any>>;
							public constructor();
							public getResult(): T;
							public constructor(param0: T);
							public setResult(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Result {
							public static class: java.lang.Class<com.google.android.gms.common.api.Result>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getStatus(): com.google.android.gms.common.api.Status;
							});
							public constructor();
							public getStatus(): com.google.android.gms.common.api.Status;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class ResultCallback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallback<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.api.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResult(param0: R): void;
							});
							public constructor();
							public onResult(param0: R): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export abstract class ResultCallbacks<R>  extends com.google.android.gms.common.api.ResultCallback<any> {
							public static class: java.lang.Class<com.google.android.gms.common.api.ResultCallbacks<any>>;
							public constructor();
							public onSuccess(param0: any): void;
							public onResult(param0: any): void;
							public onFailure(param0: com.google.android.gms.common.api.Status): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class Scope extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Scope>;
							public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.api.Scope>;
							public constructor();
							public getScopeUri(): string;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public hashCode(): number;
							public constructor(param0: string);
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
			export module gms {
				export module common {
					export module api {
						export class Status extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.api.Result, com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.api.Status>;
							public static RESULT_SUCCESS: com.google.android.gms.common.api.Status;
							public static RESULT_INTERRUPTED: com.google.android.gms.common.api.Status;
							public static RESULT_INTERNAL_ERROR: com.google.android.gms.common.api.Status;
							public static RESULT_TIMEOUT: com.google.android.gms.common.api.Status;
							public static RESULT_CANCELED: com.google.android.gms.common.api.Status;
							public static RESULT_DEAD_CLIENT: com.google.android.gms.common.api.Status;
							public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.api.Status>;
							public constructor();
							public hasResolution(): boolean;
							public getStatus(): com.google.android.gms.common.api.Status;
							public isInterrupted(): boolean;
							public hashCode(): number;
							public toString(): string;
							public getResolution(): android.app.PendingIntent;
							public constructor(param0: number);
							public isCanceled(): boolean;
							public getStatusCode(): number;
							public getStatusMessage(): string;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: string, param2: android.app.PendingIntent);
							public startResolutionForResult(param0: android.app.Activity, param1: number): void;
							public equals(param0: any): boolean;
							public isSuccess(): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export class UnsupportedApiCallException {
							public static class: java.lang.Class<com.google.android.gms.common.api.UnsupportedApiCallException>;
							public constructor(param0: com.google.android.gms.common.Feature);
							public getMessage(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class BackgroundDetector {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector>;
								public readCurrentStateIfPossible(param0: boolean): boolean;
								public isInBackground(): boolean;
								public onActivityResumed(param0: android.app.Activity): void;
								public onActivityCreated(param0: android.app.Activity, param1: android.os.Bundle): void;
								public onConfigurationChanged(param0: android.content.res.Configuration): void;
								public onTrimMemory(param0: number): void;
								public onLowMemory(): void;
								public addListener(param0: com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener): void;
								public onActivityStarted(param0: android.app.Activity): void;
								public onActivitySaveInstanceState(param0: android.app.Activity, param1: android.os.Bundle): void;
								public onActivityPaused(param0: android.app.Activity): void;
								public onActivityDestroyed(param0: android.app.Activity): void;
								public static initialize(param0: android.app.Application): void;
								public onActivityStopped(param0: android.app.Activity): void;
								public static getInstance(): com.google.android.gms.common.api.internal.BackgroundDetector;
							}
							export module BackgroundDetector {
								export class BackgroundStateChangeListener {
									public static class: java.lang.Class<com.google.android.gms.common.api.internal.BackgroundDetector.BackgroundStateChangeListener>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.api.internal.BackgroundDetector$BackgroundStateChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onBackgroundStateChanged(param0: boolean): void;
									});
									public constructor();
									public onBackgroundStateChanged(param0: boolean): void;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class GoogleServices {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.GoogleServices>;
								public static isMeasurementExplicitlyDisabled(): boolean;
								public static initialize(param0: android.content.Context, param1: string, param2: boolean): com.google.android.gms.common.api.Status;
								public static getGoogleAppId(): string;
								public static initialize(param0: android.content.Context): com.google.android.gms.common.api.Status;
								public static isMeasurementEnabled(): boolean;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleActivity {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleActivity>;
								public asObject(): any;
								public constructor(param0: android.app.Activity);
								public constructor(param0: android.content.ContextWrapper);
								public asFragmentActivity(): androidx.fragment.app.FragmentActivity;
								public isChimera(): boolean;
								public isSupport(): boolean;
								public asActivity(): android.app.Activity;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleCallback {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleCallback>;
								public mLifecycleFragment: com.google.android.gms.common.api.internal.LifecycleFragment;
								public static getFragment(param0: android.content.ContextWrapper): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onResume(): void;
								public static getFragment(param0: android.app.Activity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public onDestroy(): void;
								public static getFragment(param0: com.google.android.gms.common.api.internal.LifecycleActivity): com.google.android.gms.common.api.internal.LifecycleFragment;
								public getActivity(): android.app.Activity;
								public onStop(): void;
								public constructor(param0: com.google.android.gms.common.api.internal.LifecycleFragment);
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: android.os.Bundle): void;
								public onStart(): void;
								public onSaveInstanceState(param0: android.os.Bundle): void;
								public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.LifecycleFragment>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.LifecycleFragment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
									addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
									startActivityForResult(param0: android.content.Intent, param1: number): void;
									getLifecycleActivity(): android.app.Activity;
									isCreated(): boolean;
									isStarted(): boolean;
								});
								public constructor();
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public startActivityForResult(param0: android.content.Intent, param1: number): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public getLifecycleActivity(): android.app.Activity;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class StatusExceptionMapper {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.StatusExceptionMapper>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.api.internal.StatusExceptionMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
								});
								public constructor();
								public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zza implements com.google.android.gms.common.api.internal.LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zza>;
								public onResume(): void;
								public startActivityForResult(param0: android.content.Intent, param1: number): void;
								public constructor();
								public onDestroy(): void;
								public onStop(): void;
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: android.os.Bundle): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public getLifecycleActivity(): android.app.Activity;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
								public onSaveInstanceState(param0: android.os.Bundle): void;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzb>;
								public run(): void;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzc implements com.google.android.gms.common.api.internal.LifecycleFragment {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzc>;
								public onResume(): void;
								public startActivityForResult(param0: android.content.Intent, param1: number): void;
								public constructor();
								public onDestroy(): void;
								public onStop(): void;
								public addCallback(param0: string, param1: com.google.android.gms.common.api.internal.LifecycleCallback): void;
								public isCreated(): boolean;
								public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
								public onCreate(param0: android.os.Bundle): void;
								public getCallbackOrNull(param0: string, param1: java.lang.Class): com.google.android.gms.common.api.internal.LifecycleCallback;
								public isStarted(): boolean;
								public onStart(): void;
								public onActivityResult(param0: number, param1: number, param2: android.content.Intent): void;
								public onSaveInstanceState(param0: android.os.Bundle): void;
								public getLifecycleActivity(): android.app.Activity;
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
			export module gms {
				export module common {
					export module api {
						export module internal {
							export class zzd {
								public static class: java.lang.Class<com.google.android.gms.common.api.internal.zzd>;
								public run(): void;
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
			export module gms {
				export module common {
					export module api {
						export class zza extends android.os.Parcelable.Creator<com.google.android.gms.common.api.Scope> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zza>;
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
			export module gms {
				export module common {
					export module api {
						export class zzb extends android.os.Parcelable.Creator<com.google.android.gms.common.api.Status> {
							public static class: java.lang.Class<com.google.android.gms.common.api.zzb>;
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
			export module gms {
				export module common {
					export module config {
						export abstract class GservicesValue<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue<any>>;
							public mKey: string;
							public static value(param0: string, param1: string): com.google.android.gms.common.config.GservicesValue<string>;
							public constructor(param0: string, param1: T);
							public static value(param0: string, param1: java.lang.Float): com.google.android.gms.common.config.GservicesValue<java.lang.Float>;
							public resetOverride(): void;
							public static value(param0: string, param1: java.lang.Long): com.google.android.gms.common.config.GservicesValue<java.lang.Long>;
							public static value(param0: string, param1: java.lang.Integer): com.google.android.gms.common.config.GservicesValue<java.lang.Integer>;
							public static isInitialized(): boolean;
							public get(): T;
							public static value(param0: string, param1: boolean): com.google.android.gms.common.config.GservicesValue<java.lang.Boolean>;
							public getBinderSafe(): T;
							public override(param0: T): void;
						}
						export module GservicesValue {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.config.GservicesValue.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.config.GservicesValue$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: string, param1: java.lang.Boolean): java.lang.Boolean;
									getLong(param0: string, param1: java.lang.Long): java.lang.Long;
									zza(param0: string, param1: java.lang.Integer): java.lang.Integer;
									zza(param0: string, param1: java.lang.Float): java.lang.Float;
									getString(param0: string, param1: string): string;
								});
								public constructor();
								public getString(param0: string, param1: string): string;
								public getLong(param0: string, param1: java.lang.Long): java.lang.Long;
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
			export module gms {
				export module common {
					export module config {
						export class zza extends com.google.android.gms.common.config.GservicesValue<java.lang.Boolean> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzb extends com.google.android.gms.common.config.GservicesValue<java.lang.Long> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzc extends com.google.android.gms.common.config.GservicesValue<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzc>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zzd extends com.google.android.gms.common.config.GservicesValue<java.lang.Float> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zzd>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module config {
						export class zze extends com.google.android.gms.common.config.GservicesValue<string> {
							public static class: java.lang.Class<com.google.android.gms.common.config.zze>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class AccountAccessor extends com.google.android.gms.common.internal.IAccountAccessor.Stub {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountAccessor>;
							public getAccount(): android.accounts.Account;
							public static getAccountBinderSafe(param0: com.google.android.gms.common.internal.IAccountAccessor): android.accounts.Account;
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
			export module gms {
				export module common {
					export module internal {
						export class AccountType {
							public static class: java.lang.Class<com.google.android.gms.common.internal.AccountType>;
							public static GOOGLE: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Asserts {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Asserts>;
							public static checkNotNull(param0: any, param1: any): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotMainThread(param0: string): void;
							public static checkNull(param0: any): void;
							public static checkNotNull(param0: any): void;
							public static checkMainThread(param0: string): void;
							public static checkState(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export abstract class BaseGmsClient<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient<any>>;
							public static CONNECT_STATE_DISCONNECTED: number;
							public static CONNECT_STATE_CONNECTED: number;
							public static CONNECT_STATE_DISCONNECTING: number;
							public static KEY_PENDING_INTENT: string;
							public static DEFAULT_ACCOUNT: string;
							public static GOOGLE_PLUS_REQUIRED_FEATURES: native.Array<string>;
							public getStartServiceAction(): string;
							public requiresGooglePlayServices(): boolean;
							public getServiceBrokerBinder(): android.os.IBinder;
							public onConnectedLocked(param0: T): void;
							public getServiceDescriptor(): string;
							public getLooper(): android.os.Looper;
							public enableLocalFallback(): boolean;
							public onConnectionSuspended(param0: number): void;
							public checkConnected(): void;
							public dump(param0: string, param1: java.io.FileDescriptor, param2: java.io.PrintWriter, param3: native.Array<string>): void;
							public onPostInitHandler(param0: number, param1: android.os.IBinder, param2: android.os.Bundle, param3: number): void;
							public getAvailableFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public constructor(param0: android.content.Context, param1: android.os.Looper, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param7: string);
							public getAccount(): android.accounts.Account;
							public createServiceInterface(param0: android.os.IBinder): T;
							public getEndpointPackageName(): string;
							public triggerConnectionSuspended(param0: number): void;
							public getSignInIntent(): android.content.Intent;
							public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							public getApiFeatures(): native.Array<com.google.android.gms.common.Feature>;
							public getConnectionHint(): android.os.Bundle;
							public getService(): T;
							public getLocalStartServiceAction(): string;
							public getGetServiceRequestExtraArgs(): android.os.Bundle;
							public getStartServicePackage(): string;
							public getContext(): android.content.Context;
							public requiresAccount(): boolean;
							public checkAvailabilityAndConnect(): void;
							public disconnect(): void;
							public getScopes(): java.util.Set<com.google.android.gms.common.api.Scope>;
							public isConnected(): boolean;
							public providesSignIn(): boolean;
							public triggerNotAvailable(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks, param1: number, param2: android.app.PendingIntent): void;
							public constructor(param0: android.content.Context, param1: android.os.Looper, param2: number, param3: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param4: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener, param5: string);
							public isConnecting(): boolean;
							public getMinApkVersion(): number;
							public connect(param0: com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks): void;
							public constructor(param0: android.content.Context, param1: android.os.Handler, param2: com.google.android.gms.common.internal.GmsClientSupervisor, param3: com.google.android.gms.common.GoogleApiAvailabilityLight, param4: number, param5: com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks, param6: com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener);
							public onUserSignOut(param0: com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks): void;
							public getRemoteService(param0: com.google.android.gms.common.internal.IAccountAccessor, param1: java.util.Set<com.google.android.gms.common.api.Scope>): void;
							public requiresSignIn(): boolean;
						}
						export module BaseGmsClient {
							export class BaseConnectionCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseConnectionCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseConnectionCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnected(param0: android.os.Bundle): void;
									onConnectionSuspended(param0: number): void;
								});
								public constructor();
								public onConnected(param0: android.os.Bundle): void;
								public onConnectionSuspended(param0: number): void;
							}
							export class BaseOnConnectionFailedListener {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.BaseOnConnectionFailedListener>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$BaseOnConnectionFailedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onConnectionFailed(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$ConnectionProgressReportCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								});
								public constructor();
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
							}
							export class LegacyClientCallbackAdapter extends com.google.android.gms.common.internal.BaseGmsClient.ConnectionProgressReportCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.LegacyClientCallbackAdapter>;
								public onReportServiceBinding(param0: com.google.android.gms.common.ConnectionResult): void;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>);
							}
							export class SignOutCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.SignOutCallbacks>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.BaseGmsClient$SignOutCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSignOutComplete(): void;
								});
								public constructor();
								public onSignOutComplete(): void;
							}
							export abstract class zza extends com.google.android.gms.common.internal.BaseGmsClient.zzc<java.lang.Boolean> {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zza>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: android.os.Bundle);
							}
							export class zzb extends com.google.android.gms.internal.common.zze {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzb>;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: android.os.Looper);
								public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
								public handleMessage(param0: android.os.Message): void;
								public constructor();
								public constructor(param0: android.os.Looper);
							}
							export abstract class zzc<TListener>  extends java.lang.Object {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzc<any>>;
								public removeListener(): void;
								public constructor(param0: TListener);
								public unregister(): void;
							}
							export class zzd extends com.google.android.gms.common.internal.IGmsCallbacks.zza {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzd>;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
								public onPostInitComplete(param0: number, param1: android.os.IBinder, param2: android.os.Bundle): void;
								public constructor();
								public constructor(param0: string);
							}
							export class zze {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zze>;
								public onServiceDisconnected(param0: android.content.ComponentName): void;
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number);
								public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
							}
							export class zzf extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzf>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: android.os.IBinder, param3: android.os.Bundle);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: android.os.Bundle);
							}
							export class zzg extends java.lang.Object /* com.google.android.gms.common.internal.BaseGmsClient.zza*/ {
								public static class: java.lang.Class<com.google.android.gms.common.internal.BaseGmsClient.zzg>;
								public constructor(param0: any);
								public constructor(param0: com.google.android.gms.common.internal.BaseGmsClient<any>, param1: number, param2: android.os.Bundle);
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
			export module gms {
				export module common {
					export module internal {
						export class BinderWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.internal.BinderWrapper>;
							public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper>;
							public constructor();
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: android.os.IBinder);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Constants {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Constants>;
							public static KEY_GMS_ERROR_CODE: string;
							public static KEY_NETWORK_TO_USE: string;
							public static ACTION_LOAD_IMAGE: string;
							public static EXTRA_URI: string;
							public static EXTRA_RESULT_RECEIVER: string;
							public static EXTRA_PRIORITY: string;
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
			export module gms {
				export module common {
					export module internal {
						export abstract class DowngradeableSafeParcel extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.DowngradeableSafeParcel>;
							public constructor();
							public static canUnparcelSafely(param0: string): boolean;
							public setShouldDowngrade(param0: boolean): void;
							public prepareForClientVersion(param0: number): boolean;
							public static getUnparcelClientVersion(): java.lang.Integer;
							public shouldDowngrade(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class GetServiceRequest extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GetServiceRequest>;
							public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest>;
							public constructor();
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public getExtraArgs(): android.os.Bundle;
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
			export module gms {
				export module common {
					export module internal {
						export abstract class GmsClientSupervisor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor>;
							public constructor();
							public bindService(param0: string, param1: android.content.ServiceConnection, param2: string): boolean;
							public unbindService(param0: android.content.ComponentName, param1: android.content.ServiceConnection, param2: string): void;
							public unbindService(param0: string, param1: android.content.ServiceConnection, param2: string): void;
							public bindService(param0: android.content.ComponentName, param1: android.content.ServiceConnection, param2: string): boolean;
							public static getInstance(param0: android.content.Context): com.google.android.gms.common.internal.GmsClientSupervisor;
						}
						export module GmsClientSupervisor {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.internal.GmsClientSupervisor.zza>;
								public toString(): string;
								public constructor(param0: android.content.ComponentName, param1: number);
								public getComponentName(): android.content.ComponentName;
								public constructor(param0: string, param1: string, param2: number);
								public equals(param0: any): boolean;
								public getPackage(): string;
								public hashCode(): number;
								public constructor(param0: string, param1: number);
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
			export module gms {
				export module common {
					export module internal {
						export class GmsLogger {
							public static class: java.lang.Class<com.google.android.gms.common.internal.GmsLogger>;
							public d(param0: string, param1: string, param2: java.lang.Throwable): void;
							public efmt(param0: string, param1: string, param2: native.Array<any>): void;
							public w(param0: string, param1: string): void;
							public v(param0: string, param1: string): void;
							public w(param0: string, param1: string, param2: java.lang.Throwable): void;
							public constructor(param0: string, param1: string);
							public canLog(param0: number): boolean;
							public i(param0: string, param1: string, param2: java.lang.Throwable): void;
							public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
							public i(param0: string, param1: string): void;
							public pii(param0: string, param1: string): void;
							public v(param0: string, param1: string, param2: java.lang.Throwable): void;
							public constructor(param0: string);
							public wfmt(param0: string, param1: string, param2: native.Array<any>): void;
							public e(param0: string, param1: string, param2: java.lang.Throwable): void;
							public pii(param0: string, param1: string, param2: java.lang.Throwable): void;
							public d(param0: string, param1: string): void;
							public canLogPii(): boolean;
							public e(param0: string, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class HideFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.HideFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.HideFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module internal {
						export class IAccountAccessor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IAccountAccessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAccount(): android.accounts.Account;
							});
							public constructor();
							public getAccount(): android.accounts.Account;
						}
						export module IAccountAccessor {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IAccountAccessor {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub>;
								public getAccount(): android.accounts.Account;
								public static asInterface(param0: android.os.IBinder): com.google.android.gms.common.internal.IAccountAccessor;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IAccountAccessor {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IAccountAccessor.Stub.zza>;
									public getAccount(): android.accounts.Account;
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
			export module gms {
				export module common {
					export module internal {
						export class ICancelToken {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ICancelToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
						}
						export module ICancelToken {
							export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.ICancelToken {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub>;
								public static asInterface(param0: android.os.IBinder): com.google.android.gms.common.internal.ICancelToken;
								public cancel(): void;
								public constructor();
								public constructor(param0: string);
							}
							export module Stub {
								export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.ICancelToken {
									public static class: java.lang.Class<com.google.android.gms.common.internal.ICancelToken.Stub.zza>;
									public cancel(): void;
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
			export module gms {
				export module common {
					export module internal {
						export class IGmsCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onPostInitComplete(param0: number, param1: android.os.IBinder, param2: android.os.Bundle): void;
								zza(param0: number, param1: android.os.Bundle): void;
								zza(param0: number, param1: android.os.IBinder, param2: any /* com.google.android.gms.common.internal.zzb*/): void;
							});
							public constructor();
							public onPostInitComplete(param0: number, param1: android.os.IBinder, param2: android.os.Bundle): void;
						}
						export module IGmsCallbacks {
							export abstract class zza extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.IGmsCallbacks {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsCallbacks.zza>;
								public onPostInitComplete(param0: number, param1: android.os.IBinder, param2: android.os.Bundle): void;
								public constructor();
								public constructor(param0: string);
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
			export module gms {
				export module common {
					export module internal {
						export class IGmsServiceBroker {
							public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.IGmsServiceBroker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
							});
							public constructor();
							public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
						}
						export module IGmsServiceBroker {
							export abstract class Stub implements com.google.android.gms.common.internal.IGmsServiceBroker {
								public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub>;
								public constructor();
								public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
								public asBinder(): android.os.IBinder;
								public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
							}
							export module Stub {
								export class zza extends com.google.android.gms.common.internal.IGmsServiceBroker {
									public static class: java.lang.Class<com.google.android.gms.common.internal.IGmsServiceBroker.Stub.zza>;
									public asBinder(): android.os.IBinder;
									public getService(param0: com.google.android.gms.common.internal.IGmsCallbacks, param1: com.google.android.gms.common.internal.GetServiceRequest): void;
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
			export module gms {
				export module common {
					export module internal {
						export class ImagesContract {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ImagesContract>;
							public static URL: string;
							public static LOCAL: string;
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
			export module gms {
				export module common {
					export module internal {
						export class LibraryVersion {
							public static class: java.lang.Class<com.google.android.gms.common.internal.LibraryVersion>;
							public constructor();
							public static getInstance(): com.google.android.gms.common.internal.LibraryVersion;
							public getVersion(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class Objects {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Objects>;
							public static toStringHelper(param0: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
							public static hashCode(param0: native.Array<any>): number;
							public static equal(param0: any, param1: any): boolean;
						}
						export module Objects {
							export class ToStringHelper {
								public static class: java.lang.Class<com.google.android.gms.common.internal.Objects.ToStringHelper>;
								public toString(): string;
								public add(param0: string, param1: any): com.google.android.gms.common.internal.Objects.ToStringHelper;
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
			export module gms {
				export module common {
					export module internal {
						export class Preconditions {
							public static class: java.lang.Class<com.google.android.gms.common.internal.Preconditions>;
							public static checkArgument(param0: boolean): void;
							public static checkNotMainThread(param0: string): void;
							public static checkHandlerThread(param0: android.os.Handler): void;
							public static checkNotZero(param0: number): number;
							public static checkState(param0: boolean, param1: string, param2: native.Array<any>): void;
							public static checkNotEmpty(param0: string): string;
							public static checkHandlerThread(param0: android.os.Handler, param1: string): void;
							public static checkNotNull(param0: any): any;
							public static checkState(param0: boolean): void;
							public static checkState(param0: boolean, param1: any): void;
							public static checkNotEmpty(param0: string, param1: any): string;
							public static checkNotZero(param0: number, param1: any): number;
							public static checkMainThread(param0: string): void;
							public static checkNotMainThread(): void;
							public static checkNotNull(param0: any, param1: any): any;
							public static checkArgument(param0: boolean, param1: any): void;
							public static checkArgument(param0: boolean, param1: string, param2: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ReflectedParcelable>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ReflectedParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module internal {
						export class ResourceUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ResourceUtils>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class ServiceSpecificExtraArgs {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs>;
						}
						export module ServiceSpecificExtraArgs {
							export class CastExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.CastExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$CastExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static LISTENER: string;
							}
							export class GamesExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.GamesExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$GamesExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DESIRED_LOCALE: string;
								public static SIGNIN_OPTIONS: string;
								public static GAME_PACKAGE_NAME: string;
								public static WINDOW_TOKEN: string;
							}
							export class PlusExtraArgs {
								public static class: java.lang.Class<com.google.android.gms.common.internal.ServiceSpecificExtraArgs.PlusExtraArgs>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.ServiceSpecificExtraArgs$PlusExtraArgs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLUS_AUTH_PACKAGE: string;
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
			export module gms {
				export module common {
					export module internal {
						export class ShowFirstParty {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ShowFirstParty>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.ShowFirstParty interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module internal {
						export class StringResourceValueReader {
							public static class: java.lang.Class<com.google.android.gms.common.internal.StringResourceValueReader>;
							public getString(param0: string): string;
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
			export module gms {
				export module common {
					export module internal {
						export class ViewUtils {
							public static class: java.lang.Class<com.google.android.gms.common.internal.ViewUtils>;
							public static getXmlAttributeString(param0: string, param1: string, param2: android.content.Context, param3: android.util.AttributeSet, param4: boolean, param5: boolean, param6: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export module constants {
							export class ListAppsActivityContract {
								public static class: java.lang.Class<com.google.android.gms.common.internal.constants.ListAppsActivityContract>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.constants.ListAppsActivityContract interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EXTRA_PRESELECTED_FILTER: string;
								public static ACTION_APPS: string;
								public static PRESELECTED_FILTER_FITNESS_APPS: number;
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
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export abstract class AbstractSafeParcelable extends com.google.android.gms.common.internal.safeparcel.SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable>;
								public describeContents(): number;
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
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelReader {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader>;
								public static createParcelable(param0: android.os.Parcel, param1: number, param2: android.os.Parcelable.Creator): android.os.Parcelable;
								public static createBundle(param0: android.os.Parcel, param1: number): android.os.Bundle;
								public static createStringList(param0: android.os.Parcel, param1: number): java.util.ArrayList<string>;
								public static createIBinderArray(param0: android.os.Parcel, param1: number): native.Array<android.os.IBinder>;
								public static readIntegerObject(param0: android.os.Parcel, param1: number): java.lang.Integer;
								public static readShort(param0: android.os.Parcel, param1: number): number;
								public static createFloatArray(param0: android.os.Parcel, param1: number): native.Array<number>;
								public static readList(param0: android.os.Parcel, param1: number, param2: java.util.List, param3: java.lang.ClassLoader): void;
								public static createIntegerList(param0: android.os.Parcel, param1: number): java.util.ArrayList<java.lang.Integer>;
								public static createTypedList(param0: android.os.Parcel, param1: number, param2: android.os.Parcelable.Creator): java.util.ArrayList;
								public static readInt(param0: android.os.Parcel, param1: number): number;
								public static readDoubleObject(param0: android.os.Parcel, param1: number): java.lang.Double;
								public static createParcel(param0: android.os.Parcel, param1: number): android.os.Parcel;
								public static createSparseBooleanArray(param0: android.os.Parcel, param1: number): android.util.SparseBooleanArray;
								public static createByteArrayArray(param0: android.os.Parcel, param1: number): native.Array<native.Array<number>>;
								public static readLong(param0: android.os.Parcel, param1: number): number;
								public static createStringArray(param0: android.os.Parcel, param1: number): native.Array<string>;
								public static readByte(param0: android.os.Parcel, param1: number): number;
								public static skipUnknownField(param0: android.os.Parcel, param1: number): void;
								public static createParcelArray(param0: android.os.Parcel, param1: number): native.Array<android.os.Parcel>;
								public static readBoolean(param0: android.os.Parcel, param1: number): boolean;
								public static createTypedSparseArray(param0: android.os.Parcel, param1: number, param2: android.os.Parcelable.Creator): android.util.SparseArray;
								public static createParcelList(param0: android.os.Parcel, param1: number): java.util.ArrayList<android.os.Parcel>;
								public static createTypedArray(param0: android.os.Parcel, param1: number, param2: android.os.Parcelable.Creator): native.Array<any>;
								public static createLongList(param0: android.os.Parcel, param1: number): java.util.ArrayList<java.lang.Long>;
								public static readSize(param0: android.os.Parcel, param1: number): number;
								public static createLongArray(param0: android.os.Parcel, param1: number): native.Array<number>;
								public static createDoubleList(param0: android.os.Parcel, param1: number): java.util.ArrayList<java.lang.Double>;
								public static validateObjectHeader(param0: android.os.Parcel): number;
								public static createFloatList(param0: android.os.Parcel, param1: number): java.util.ArrayList<java.lang.Float>;
								public static readHeader(param0: android.os.Parcel): number;
								public static readIBinder(param0: android.os.Parcel, param1: number): android.os.IBinder;
								public static readFloatObject(param0: android.os.Parcel, param1: number): java.lang.Float;
								public static createStringSparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<string>;
								public static readBooleanObject(param0: android.os.Parcel, param1: number): java.lang.Boolean;
								public static createBooleanList(param0: android.os.Parcel, param1: number): java.util.ArrayList<java.lang.Boolean>;
								public static createBooleanArray(param0: android.os.Parcel, param1: number): native.Array<boolean>;
								public static createDoubleSparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<java.lang.Double>;
								public static createIBinderList(param0: android.os.Parcel, param1: number): java.util.ArrayList<android.os.IBinder>;
								public static createBigInteger(param0: android.os.Parcel, param1: number): java.math.BigInteger;
								public static readChar(param0: android.os.Parcel, param1: number): string;
								public static createByteArraySparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<native.Array<number>>;
								public static createIntArray(param0: android.os.Parcel, param1: number): native.Array<number>;
								public static ensureAtEnd(param0: android.os.Parcel, param1: number): void;
								public static getFieldId(param0: number): number;
								public static readDouble(param0: android.os.Parcel, param1: number): number;
								public static createIBinderSparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<android.os.IBinder>;
								public static createBigDecimal(param0: android.os.Parcel, param1: number): java.math.BigDecimal;
								public static createString(param0: android.os.Parcel, param1: number): string;
								public static createCharArray(param0: android.os.Parcel, param1: number): native.Array<string>;
								public static readLongObject(param0: android.os.Parcel, param1: number): java.lang.Long;
								public static createSparseIntArray(param0: android.os.Parcel, param1: number): android.util.SparseIntArray;
								public static createByteArray(param0: android.os.Parcel, param1: number): native.Array<number>;
								public static createDoubleArray(param0: android.os.Parcel, param1: number): native.Array<number>;
								public static createBigIntegerArray(param0: android.os.Parcel, param1: number): native.Array<java.math.BigInteger>;
								public static createSparseLongArray(param0: android.os.Parcel, param1: number): android.util.SparseLongArray;
								public static createBigDecimalArray(param0: android.os.Parcel, param1: number): native.Array<java.math.BigDecimal>;
								public static createParcelSparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<android.os.Parcel>;
								public static createFloatSparseArray(param0: android.os.Parcel, param1: number): android.util.SparseArray<java.lang.Float>;
								public static readFloat(param0: android.os.Parcel, param1: number): number;
							}
							export module SafeParcelReader {
								export class ParseException {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelReader.ParseException>;
									public constructor(param0: string, param1: android.os.Parcel);
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
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelWriter {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelWriter>;
								public static writeIBinderArray(param0: android.os.Parcel, param1: number, param2: native.Array<android.os.IBinder>, param3: boolean): void;
								public static writeIntArray(param0: android.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeParcelArray(param0: android.os.Parcel, param1: number, param2: native.Array<android.os.Parcel>, param3: boolean): void;
								public static writeStringSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<string>, param3: boolean): void;
								public static writeLongArray(param0: android.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeSparseIntArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseIntArray, param3: boolean): void;
								public static writeDouble(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeBooleanArray(param0: android.os.Parcel, param1: number, param2: native.Array<boolean>, param3: boolean): void;
								public static writeBigIntegerArray(param0: android.os.Parcel, param1: number, param2: native.Array<java.math.BigInteger>, param3: boolean): void;
								public static writeTypedArray(param0: android.os.Parcel, param1: number, param2: native.Array<android.os.Parcelable>, param3: number, param4: boolean): void;
								public static writeSparseBooleanArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseBooleanArray, param3: boolean): void;
								public static writeStringArray(param0: android.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
								public static writeBooleanObject(param0: android.os.Parcel, param1: number, param2: java.lang.Boolean, param3: boolean): void;
								public static writeParcelSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<android.os.Parcel>, param3: boolean): void;
								public static writeShort(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeFloat(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeBundle(param0: android.os.Parcel, param1: number, param2: android.os.Bundle, param3: boolean): void;
								public static writeIBinder(param0: android.os.Parcel, param1: number, param2: android.os.IBinder, param3: boolean): void;
								public static writeSparseLongArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseLongArray, param3: boolean): void;
								public static writeChar(param0: android.os.Parcel, param1: number, param2: string): void;
								public static writeString(param0: android.os.Parcel, param1: number, param2: string, param3: boolean): void;
								public static writeParcel(param0: android.os.Parcel, param1: number, param2: android.os.Parcel, param3: boolean): void;
								public static writeBooleanList(param0: android.os.Parcel, param1: number, param2: java.util.List<java.lang.Boolean>, param3: boolean): void;
								public static writeLongObject(param0: android.os.Parcel, param1: number, param2: java.lang.Long, param3: boolean): void;
								public static writeBigDecimalArray(param0: android.os.Parcel, param1: number, param2: native.Array<java.math.BigDecimal>, param3: boolean): void;
								public static writeFloatSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<java.lang.Float>, param3: boolean): void;
								public static writeBoolean(param0: android.os.Parcel, param1: number, param2: boolean): void;
								public static writeCharArray(param0: android.os.Parcel, param1: number, param2: native.Array<string>, param3: boolean): void;
								public static writeDoubleArray(param0: android.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeDoubleSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<java.lang.Double>, param3: boolean): void;
								public static writeFloatList(param0: android.os.Parcel, param1: number, param2: java.util.List<java.lang.Float>, param3: boolean): void;
								public static writeStringList(param0: android.os.Parcel, param1: number, param2: java.util.List<string>, param3: boolean): void;
								public static writeFloatObject(param0: android.os.Parcel, param1: number, param2: java.lang.Float, param3: boolean): void;
								public static writeParcelable(param0: android.os.Parcel, param1: number, param2: android.os.Parcelable, param3: number, param4: boolean): void;
								public static writeFloatArray(param0: android.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeTypedSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray, param3: boolean): void;
								public static writeTypedList(param0: android.os.Parcel, param1: number, param2: java.util.List, param3: boolean): void;
								public static finishObjectHeader(param0: android.os.Parcel, param1: number): void;
								public static writeIntegerList(param0: android.os.Parcel, param1: number, param2: java.util.List<java.lang.Integer>, param3: boolean): void;
								public static beginObjectHeader(param0: android.os.Parcel): number;
								public static writeByte(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeLong(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeLongList(param0: android.os.Parcel, param1: number, param2: java.util.List<java.lang.Long>, param3: boolean): void;
								public static writeIntegerObject(param0: android.os.Parcel, param1: number, param2: java.lang.Integer, param3: boolean): void;
								public static writeList(param0: android.os.Parcel, param1: number, param2: java.util.List, param3: boolean): void;
								public static writeDoubleList(param0: android.os.Parcel, param1: number, param2: java.util.List<java.lang.Double>, param3: boolean): void;
								public static writeBigInteger(param0: android.os.Parcel, param1: number, param2: java.math.BigInteger, param3: boolean): void;
								public static writeDoubleObject(param0: android.os.Parcel, param1: number, param2: java.lang.Double, param3: boolean): void;
								public static writeIBinderList(param0: android.os.Parcel, param1: number, param2: java.util.List<android.os.IBinder>, param3: boolean): void;
								public static writeInt(param0: android.os.Parcel, param1: number, param2: number): void;
								public static writeByteArray(param0: android.os.Parcel, param1: number, param2: native.Array<number>, param3: boolean): void;
								public static writeBigDecimal(param0: android.os.Parcel, param1: number, param2: java.math.BigDecimal, param3: boolean): void;
								public static writeIBinderSparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<android.os.IBinder>, param3: boolean): void;
								public static writeByteArraySparseArray(param0: android.os.Parcel, param1: number, param2: android.util.SparseArray<native.Array<number>>, param3: boolean): void;
								public static writeParcelList(param0: android.os.Parcel, param1: number, param2: java.util.List<android.os.Parcel>, param3: boolean): void;
								public static writeByteArrayArray(param0: android.os.Parcel, param1: number, param2: native.Array<native.Array<number>>, param3: boolean): void;
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
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelable {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static NULL: string;
							}
							export module SafeParcelable {
								export class Class {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Class>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Class interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										creator(): string;
										validate(): boolean;
									});
									public constructor();
									public creator(): string;
									public validate(): boolean;
								}
								export class Constructor {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Constructor>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Constructor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
									});
									public constructor();
								}
								export class Field {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Field>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Field interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
										defaultValue(): string;
										defaultValueUnchecked(): string;
									});
									public constructor();
									public getter(): string;
									public defaultValueUnchecked(): string;
									public type(): string;
									public id(): number;
									public defaultValue(): string;
								}
								export class Indicator {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Indicator>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Indicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										getter(): string;
									});
									public constructor();
									public getter(): string;
								}
								export class Param {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Param>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Param interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
									});
									public constructor();
									public id(): number;
								}
								export class Reserved {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.Reserved>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$Reserved interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										value(): native.Array<number>;
									});
									public constructor();
									public value(): native.Array<number>;
								}
								export class VersionField {
									public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelable.VersionField>;
									/**
									 * Constructs a new instance of the com.google.android.gms.common.internal.safeparcel.SafeParcelable$VersionField interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										id(): number;
										getter(): string;
										type(): string;
									});
									public constructor();
									public getter(): string;
									public type(): string;
									public id(): number;
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
			export module gms {
				export module common {
					export module internal {
						export module safeparcel {
							export class SafeParcelableSerializer {
								public static class: java.lang.Class<com.google.android.gms.common.internal.safeparcel.SafeParcelableSerializer>;
								public static serializeToString(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): string;
								public static deserializeFromString(param0: string, param1: android.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static serializeToIntentExtra(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable, param1: android.content.Intent, param2: string): void;
								public static serializeToBytes(param0: com.google.android.gms.common.internal.safeparcel.SafeParcelable): native.Array<number>;
								public static deserializeFromIntentExtra(param0: android.content.Intent, param1: string, param2: android.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public constructor();
								public static serializeIterableToIntentExtra(param0: java.lang.Iterable, param1: android.content.Intent, param2: string): void;
								public static deserializeIterableFromIntentExtra(param0: android.content.Intent, param1: string, param2: android.os.Parcelable.Creator): java.util.ArrayList;
								public static serializeIterableToBundle(param0: java.lang.Iterable, param1: android.os.Bundle, param2: string): void;
								public static deserializeFromBytes(param0: native.Array<number>, param1: android.os.Parcelable.Creator): com.google.android.gms.common.internal.safeparcel.SafeParcelable;
								public static deserializeIterableFromBundle(param0: android.os.Bundle, param1: string, param2: android.os.Parcelable.Creator): java.util.ArrayList;
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
			export module gms {
				export module common {
					export module internal {
						export class zza extends android.os.Parcelable.Creator<com.google.android.gms.common.internal.BinderWrapper> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzb extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzb>;
							public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/;
							public constructor();
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzc extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.gms.common.internal.zzb>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzc>;
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
			export module gms {
				export module common {
					export module internal {
						export class zzd extends android.os.Parcelable.Creator<com.google.android.gms.common.internal.GetServiceRequest> {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzd>;
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
			export module gms {
				export module common {
					export module internal {
						export class zze extends com.google.android.gms.common.internal.GmsClientSupervisor {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zze>;
							public handleMessage(param0: android.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzf>;
							public constructor(param0: any /* com.google.android.gms.common.internal.zze*/, param1: any /* com.google.android.gms.common.internal.GmsClientSupervisor.zza*/);
							public isBound(): boolean;
							public getBinder(): android.os.IBinder;
							public onServiceDisconnected(param0: android.content.ComponentName): void;
							public getState(): number;
							public getComponentName(): android.content.ComponentName;
							public onServiceConnected(param0: android.content.ComponentName, param1: android.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzg>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzh {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzh>;
							public constructor(param0: string, param1: string, param2: boolean, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(): com.google.android.gms.dynamic.IObjectWrapper;
								zzc(): number;
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
			export module gms {
				export module common {
					export module internal {
						export abstract class zzj extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzj>;
							public constructor();
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
			export module gms {
				export module common {
					export module internal {
						export class zzk extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzi {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.IGmsCallbacks {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzl>;
							public onPostInitComplete(param0: number, param1: android.os.IBinder, param2: android.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzm>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.internal.zzm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.gms.common.zzk*/, param1: com.google.android.gms.dynamic.IObjectWrapper): boolean;
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
			export module gms {
				export module common {
					export module internal {
						export abstract class zzn extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.common.internal.zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzo extends com.google.android.gms.internal.common.zza implements com.google.android.gms.common.internal.zzm {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzp {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzq {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzq>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzr extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzr>;
							public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module internal {
						export class zzs extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.gms.common.internal.zzr>*/ {
							public static class: java.lang.Class<com.google.android.gms.common.internal.zzs>;
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
			export module gms {
				export module common {
					export module logging {
						export class Logger {
							public static class: java.lang.Class<com.google.android.gms.common.logging.Logger>;
							public v(param0: string, param1: native.Array<any>): void;
							public e(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
							public wtf(param0: java.lang.Throwable): void;
							public i(param0: string, param1: native.Array<any>): void;
							public isLoggable(param0: number): boolean;
							public e(param0: string, param1: native.Array<any>): void;
							public wtf(param0: string, param1: java.lang.Throwable, param2: native.Array<any>): void;
							public constructor(param0: string, param1: native.Array<string>);
							public w(param0: string, param1: native.Array<any>): void;
							public d(param0: string, param1: native.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module providers {
						export class PooledExecutorsProvider {
							public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider>;
							public static getInstance(): com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory;
						}
						export module PooledExecutorsProvider {
							export class PooledExecutorFactory {
								public static class: java.lang.Class<com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.providers.PooledExecutorsProvider$PooledExecutorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
								});
								public constructor();
								public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
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
			export module gms {
				export module common {
					export module providers {
						export class zza extends com.google.android.gms.common.providers.PooledExecutorsProvider.PooledExecutorFactory {
							public static class: java.lang.Class<com.google.android.gms.common.providers.zza>;
							public newSingleThreadScheduledExecutor(): java.util.concurrent.ScheduledExecutorService;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module sqlite {
						export class CursorWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.sqlite.CursorWrapper>;
							public setWindow(param0: android.database.CursorWindow): void;
							public getWindow(): android.database.CursorWindow;
							public constructor(param0: android.database.Cursor);
							public fillWindow(param0: number, param1: android.database.CursorWindow): void;
							public onMove(param0: number, param1: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class ConnectionTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.ConnectionTracker>;
							public static getInstance(): com.google.android.gms.common.stats.ConnectionTracker;
							public bindService(param0: android.content.Context, param1: android.content.Intent, param2: android.content.ServiceConnection, param3: number): boolean;
							public unbindService(param0: android.content.Context, param1: android.content.ServiceConnection): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class LoggingConstants {
							public static class: java.lang.Class<com.google.android.gms.common.stats.LoggingConstants>;
							public static EXTRA_WAKE_LOCK_KEY: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export abstract class StatsEvent extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable implements com.google.android.gms.common.internal.ReflectedParcelable {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent>;
							public constructor();
							public toString(): string;
							public getEventType(): number;
							public getTimeMillis(): number;
						}
						export module StatsEvent {
							export class Types {
								public static class: java.lang.Class<com.google.android.gms.common.stats.StatsEvent.Types>;
								/**
								 * Constructs a new instance of the com.google.android.gms.common.stats.StatsEvent$Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static EVENT_TYPE_RELEASE_WAKE_LOCK: number;
								public static EVENT_TYPE_ACQUIRE_WAKE_LOCK: number;
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
			export module gms {
				export module common {
					export module stats {
						export class StatsUtils {
							public static class: java.lang.Class<com.google.android.gms.common.stats.StatsUtils>;
							public constructor();
							public static getEventKey(param0: android.content.Context, param1: android.content.Intent): string;
							public static getEventKey(param0: android.os.PowerManager.WakeLock, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockEvent extends com.google.android.gms.common.stats.StatsEvent {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockEvent>;
							public static CREATOR: android.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent>;
							public constructor();
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public constructor(param0: number, param1: number, param2: string, param3: number, param4: java.util.List<string>, param5: string, param6: number, param7: number, param8: string, param9: string, param10: number, param11: number, param12: string, param13: boolean);
							public getEventType(): number;
							public getTimeMillis(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class WakeLockTracker {
							public static class: java.lang.Class<com.google.android.gms.common.stats.WakeLockTracker>;
							public constructor();
							public registerReleaseEvent(param0: android.content.Context, param1: android.content.Intent): void;
							public registerEvent(param0: android.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>): void;
							public registerDeadlineEvent(param0: android.content.Context, param1: string, param2: string, param3: string, param4: number, param5: java.util.List<string>, param6: boolean, param7: number): void;
							public registerAcquireEvent(param0: android.content.Context, param1: android.content.Intent, param2: string, param3: string, param4: string, param5: number, param6: string): void;
							public registerEvent(param0: android.content.Context, param1: string, param2: number, param3: string, param4: string, param5: string, param6: number, param7: java.util.List<string>, param8: number): void;
							public static getInstance(): com.google.android.gms.common.stats.WakeLockTracker;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module stats {
						export class zza extends android.os.Parcelable.Creator<com.google.android.gms.common.stats.WakeLockEvent> {
							public static class: java.lang.Class<com.google.android.gms.common.stats.zza>;
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
			export module gms {
				export module common {
					export module util {
						export class AndroidUtilsLight {
							public static class: java.lang.Class<com.google.android.gms.common.util.AndroidUtilsLight>;
							public constructor();
							public static getPackageCertificateHashBytes(param0: android.content.Context, param1: string): native.Array<number>;
							public static getDeviceProtectedStorageContext(param0: android.content.Context): android.content.Context;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ArrayUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ArrayUtils>;
							public static removeAll(param0: native.Array<any>, param1: native.Array<any>): native.Array<any>;
							public static contains(param0: native.Array<number>, param1: number): boolean;
							public static contains(param0: native.Array<any>, param1: any): boolean;
							public static concat(param0: native.Array<native.Array<any>>): native.Array<any>;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<any>): void;
							public static newArrayList(): java.util.ArrayList;
							public static toPrimitiveArray(param0: java.util.Collection<java.lang.Integer>): native.Array<number>;
							public static writeStringArray(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
							public static toWrapperArray(param0: native.Array<number>): native.Array<java.lang.Integer>;
							public static concatByteArrays(param0: native.Array<native.Array<number>>): native.Array<number>;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<number>): void;
							public static writeArray(param0: java.lang.StringBuilder, param1: native.Array<boolean>): void;
							public static toArrayList(param0: native.Array<any>): java.util.ArrayList;
							public static appendToArray(param0: native.Array<any>, param1: any): native.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Base64Utils {
							public static class: java.lang.Class<com.google.android.gms.common.util.Base64Utils>;
							public constructor();
							public static encode(param0: native.Array<number>): string;
							public static decode(param0: string): native.Array<number>;
							public static encodeUrlSafe(param0: native.Array<number>): string;
							public static encodeUrlSafeNoPadding(param0: native.Array<number>): string;
							public static decodeUrlSafe(param0: string): native.Array<number>;
							public static decodeUrlSafeNoPadding(param0: string): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class BiConsumer<T, U>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.BiConsumer<any,any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.BiConsumer<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T, param1: U): void;
							});
							public constructor();
							public accept(param0: T, param1: U): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ClientLibraryUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ClientLibraryUtils>;
							public static getClientVersion(param0: android.content.Context, param1: string): number;
							public static isPackageSide(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.Clock>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Clock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								currentTimeMillis(): number;
								elapsedRealtime(): number;
								nanoTime(): number;
								currentThreadTimeMillis(): number;
							});
							public constructor();
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
            }
            export module Clock {
              export class CC {
                public static class: java.lang.Class<com.google.android.gms.common.util.Clock.CC>;
                public static currentThreadTimeMillis(param0: com.google.android.gms.common.util.Clock): number;
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
			export module gms {
				export module common {
					export module util {
						export class CollectionUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CollectionUtils>;
							public static mutableSetOfWithSize(param0: number): java.util.Set;
							public static listOf(param0: native.Array<any>): java.util.List;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): java.util.Map;
							public static isEmpty(param0: java.util.Collection<any>): boolean;
							public static listOf(param0: any): java.util.List;
							public static setOf(param0: any, param1: any, param2: any): java.util.Set;
							public static mapOf(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any, param10: any, param11: any): java.util.Map;
							public static setOf(param0: native.Array<any>): java.util.Set;
							public static mapOfKeyValueArrays(param0: native.Array<any>, param1: native.Array<any>): java.util.Map;
							public static listOf(): java.util.List;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class CrashUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.CrashUtils>;
							public constructor();
							public static addDynamiteErrorToDropBox(param0: android.content.Context, param1: java.lang.Throwable): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DataUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.DataUtils>;
							public constructor();
							public static copyStringToBuffer(param0: string, param1: android.database.CharArrayBuffer): void;
							public static loadImageBytes(param0: android.graphics.Bitmap): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DefaultClock extends com.google.android.gms.common.util.Clock {
							public static class: java.lang.Class<com.google.android.gms.common.util.DefaultClock>;
							public currentThreadTimeMillis(): number;
							public nanoTime(): number;
							public elapsedRealtime(): number;
							public currentTimeMillis(): number;
							public static getInstance(): com.google.android.gms.common.util.Clock;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DeviceProperties {
							public static class: java.lang.Class<com.google.android.gms.common.util.DeviceProperties>;
							public static isTablet(param0: android.content.res.Resources): boolean;
							public static isTv(param0: android.content.Context): boolean;
							public static isLatchsky(param0: android.content.Context): boolean;
							public static isWearable(param0: android.content.Context): boolean;
							public static isUserBuild(): boolean;
							public static isWearableWithoutPlayStore(param0: android.content.Context): boolean;
							public static isSidewinder(param0: android.content.Context): boolean;
							public static isAuto(param0: android.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class DynamiteApi {
							public static class: java.lang.Class<com.google.android.gms.common.util.DynamiteApi>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.DynamiteApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module util {
						export class GmsVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.GmsVersion>;
							public static VERSION_HALLOUMI: number;
							public static VERSION_JARLSBERG: number;
							public static VERSION_KENAFA: number;
							public static VERSION_LONGHORN: number;
							public static VERSION_MANCHEGO: number;
							public static VERSION_ORLA: number;
							public static VERSION_PARMESAN: number;
							public static VERSION_QUESO: number;
							public static VERSION_REBLOCHON: number;
							public static VERSION_SAGA: number;
							public static isAtLeastFenacho(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Hex {
							public static class: java.lang.Class<com.google.android.gms.common.util.Hex>;
							public constructor();
							public static bytesToStringUppercase(param0: native.Array<number>, param1: boolean): string;
							public static stringToBytes(param0: string): native.Array<number>;
							public static bytesToStringLowercase(param0: native.Array<number>): string;
							public static bytesToStringUppercase(param0: native.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HexDumpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HexDumpUtils>;
							public constructor();
							public static dump(param0: native.Array<number>, param1: number, param2: number, param3: boolean): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class HttpUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.HttpUtils>;
							public static parse(param0: java.net.URI, param1: string): java.util.Map<string,string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class IOUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.IOUtils>;
							public static readInputStreamFully(param0: java.io.InputStream): native.Array<number>;
							public static closeQuietly(param0: android.os.ParcelFileDescriptor): void;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream, param2: boolean, param3: number): number;
							public static readInputStreamFully(param0: java.io.InputStream, param1: boolean): native.Array<number>;
							public static toByteArray(param0: java.io.InputStream): native.Array<number>;
							public static closeQuietly(param0: java.io.Closeable): void;
							public static isGzipByteBuffer(param0: native.Array<number>): boolean;
							public static copyStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class JsonUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.JsonUtils>;
							public static escapeString(param0: string): string;
							public static areJsonValuesEquivalent(param0: any, param1: any): boolean;
							public static unescapeString(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MapUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.MapUtils>;
							public constructor();
							public static writeStringMapToJson(param0: java.lang.StringBuilder, param1: java.util.HashMap<string,string>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class MurmurHash3 {
							public static class: java.lang.Class<com.google.android.gms.common.util.MurmurHash3>;
							public static murmurhash3_x86_32(param0: native.Array<number>, param1: number, param2: number, param3: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class NumberUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.NumberUtils>;
							public static parseHexLong(param0: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class PlatformVersion {
							public static class: java.lang.Class<com.google.android.gms.common.util.PlatformVersion>;
							public static isAtLeastJellyBean(): boolean;
							public static isAtLeastLollipop(): boolean;
							public static isAtLeastN(): boolean;
							public static isAtLeastO(): boolean;
							public static isAtLeastJellyBeanMR1(): boolean;
							public static isAtLeastQ(): boolean;
							public static isAtLeastHoneycombMR1(): boolean;
							public static isAtLeastHoneycomb(): boolean;
							public static isAtLeastJellyBeanMR2(): boolean;
							public static isAtLeastP(): boolean;
							public static isAtLeastLollipopMR1(): boolean;
							public static isAtLeastM(): boolean;
							public static isAtLeastIceCreamSandwich(): boolean;
							public static isAtLeastKitKatWatch(): boolean;
							public static isAtLeastKitKat(): boolean;
							public static isAtLeastIceCreamSandwichMR1(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.gms.common.util.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): boolean;
							});
							public constructor();
							public apply(param0: T): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class ProcessUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.ProcessUtils>;
							public static getMyProcessName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class RetainForClient {
							public static class: java.lang.Class<com.google.android.gms.common.util.RetainForClient>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.RetainForClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module util {
						export class ScopeUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.ScopeUtil>;
							public static toScopeString(param0: java.util.Set<com.google.android.gms.common.api.Scope>): native.Array<string>;
							public static fromScopeString(param0: java.util.Collection<string>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public static fromScopeString(param0: native.Array<string>): java.util.Set<com.google.android.gms.common.api.Scope>;
							public static toScopeString(param0: native.Array<com.google.android.gms.common.api.Scope>): native.Array<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class SharedPreferencesUtils {
							public static class: java.lang.Class<com.google.android.gms.common.util.SharedPreferencesUtils>;
							public static publishWorldReadableSharedPreferences(param0: android.content.Context, param1: android.content.SharedPreferences.Editor, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class Strings {
							public static class: java.lang.Class<com.google.android.gms.common.util.Strings>;
							public static isEmptyOrWhitespace(param0: string): boolean;
							public static emptyToNull(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class UidVerifier {
							public static class: java.lang.Class<com.google.android.gms.common.util.UidVerifier>;
							public static isGooglePlayServicesUid(param0: android.content.Context, param1: number): boolean;
							public static uidHasPackageName(param0: android.content.Context, param1: number, param2: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class VisibleForTesting {
							public static class: java.lang.Class<com.google.android.gms.common.util.VisibleForTesting>;
							/**
							 * Constructs a new instance of the com.google.android.gms.common.util.VisibleForTesting interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module common {
					export module util {
						export class WorkSourceUtil {
							public static class: java.lang.Class<com.google.android.gms.common.util.WorkSourceUtil>;
							public static fromPackage(param0: android.content.Context, param1: string): android.os.WorkSource;
							public static hasWorkSourcePermission(param0: android.content.Context): boolean;
							public static getNames(param0: android.os.WorkSource): java.util.List<string>;
							public static fromPackageAndModuleExperimentalPi(param0: android.content.Context, param1: string, param2: string): android.os.WorkSource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class HandlerExecutor {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.HandlerExecutor>;
								public execute(param0: java.lang.Runnable): void;
								public constructor(param0: android.os.Looper);
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
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NamedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NamedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
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
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class NumberedThreadFactory {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.NumberedThreadFactory>;
								public constructor(param0: string);
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
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
			export module gms {
				export module common {
					export module util {
						export module concurrent {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.common.util.concurrent.zza>;
								public constructor(param0: java.lang.Runnable, param1: number);
								public run(): void;
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
			export module gms {
				export module common {
					export module util {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.common.util.zza>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzc>;
							public static isMainThread(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module util {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.common.util.zzd>;
							public static unescape(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class InstantApps {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.InstantApps>;
							public constructor();
							public static isInstantApp(param0: android.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class PackageManagerWrapper {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.PackageManagerWrapper>;
							public checkCallingOrSelfPermission(param0: string): number;
							public getPackagesForUid(param0: number): native.Array<string>;
							public checkPermission(param0: string, param1: string): number;
							public getApplicationInfo(param0: string, param1: number): android.content.pm.ApplicationInfo;
							public isCallerInstantApp(): boolean;
							public constructor(param0: android.content.Context);
							public getPackageInfo(param0: string, param1: number): android.content.pm.PackageInfo;
							public getApplicationLabel(param0: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export module wrappers {
						export class Wrappers {
							public static class: java.lang.Class<com.google.android.gms.common.wrappers.Wrappers>;
							public constructor();
							public static packageManager(param0: android.content.Context): com.google.android.gms.common.wrappers.PackageManagerWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zza extends android.os.Parcelable.Creator<com.google.android.gms.common.ConnectionResult> {
						public static class: java.lang.Class<com.google.android.gms.common.zza>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzb extends android.os.Parcelable.Creator<com.google.android.gms.common.Feature> {
						public static class: java.lang.Class<com.google.android.gms.common.zzb>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzc {
						public static class: java.lang.Class<com.google.android.gms.common.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzd {
						public static class: java.lang.Class<com.google.android.gms.common.zzd>;
						public call(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zze extends com.google.android.gms.common.internal.zzj {
						public static class: java.lang.Class<com.google.android.gms.common.zze>;
						public constructor();
						public constructor(param0: native.Array<number>);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzf extends com.google.android.gms.common.zze {
						public static class: java.lang.Class<com.google.android.gms.common.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export abstract class zzg extends com.google.android.gms.common.zze {
						public static class: java.lang.Class<com.google.android.gms.common.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzh {
						public static class: java.lang.Class<com.google.android.gms.common.zzh>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzi extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzi>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzj extends com.google.android.gms.common.zzg {
						public static class: java.lang.Class<com.google.android.gms.common.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzk extends com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable {
						public static class: java.lang.Class<com.google.android.gms.common.zzk>;
						public static CREATOR: any /* android.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzl extends java.lang.Object /* android.os.Parcelable.Creator<com.google.android.gms.common.zzk>*/ {
						public static class: java.lang.Class<com.google.android.gms.common.zzl>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzm {
						public static class: java.lang.Class<com.google.android.gms.common.zzm>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzn {
						public static class: java.lang.Class<com.google.android.gms.common.zzn>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module common {
					export class zzo extends com.google.android.gms.common.zzm {
						public static class: java.lang.Class<com.google.android.gms.common.zzo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class FragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.FragmentWrapper>;
						public static wrap(param0: android.app.Fragment): com.google.android.gms.dynamic.FragmentWrapper;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: android.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): android.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: android.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class IFragmentWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IFragmentWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzae(): com.google.android.gms.dynamic.IObjectWrapper;
							getArguments(): android.os.Bundle;
							getId(): number;
							zzaf(): com.google.android.gms.dynamic.IFragmentWrapper;
							zzag(): com.google.android.gms.dynamic.IObjectWrapper;
							getRetainInstance(): boolean;
							getTag(): string;
							zzah(): com.google.android.gms.dynamic.IFragmentWrapper;
							getTargetRequestCode(): number;
							getUserVisibleHint(): boolean;
							zzai(): com.google.android.gms.dynamic.IObjectWrapper;
							isAdded(): boolean;
							isDetached(): boolean;
							isHidden(): boolean;
							isInLayout(): boolean;
							isRemoving(): boolean;
							isResumed(): boolean;
							isVisible(): boolean;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
							setHasOptionsMenu(param0: boolean): void;
							setMenuVisibility(param0: boolean): void;
							setRetainInstance(param0: boolean): void;
							setUserVisibleHint(param0: boolean): void;
							startActivity(param0: android.content.Intent): void;
							startActivityForResult(param0: android.content.Intent, param1: number): void;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper): void;
						});
						public constructor();
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: android.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): android.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: android.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
					export module IFragmentWrapper {
						export abstract class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IFragmentWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub>;
							public constructor();
							public static asInterface(param0: android.os.IBinder): com.google.android.gms.dynamic.IFragmentWrapper;
							public isResumed(): boolean;
							public isAdded(): boolean;
							public startActivityForResult(param0: android.content.Intent, param1: number): void;
							public isVisible(): boolean;
							public isDetached(): boolean;
							public isRemoving(): boolean;
							public getTag(): string;
							public startActivity(param0: android.content.Intent): void;
							public setRetainInstance(param0: boolean): void;
							public setUserVisibleHint(param0: boolean): void;
							public getArguments(): android.os.Bundle;
							public isHidden(): boolean;
							public getRetainInstance(): boolean;
							public getUserVisibleHint(): boolean;
							public constructor(param0: string);
							public setHasOptionsMenu(param0: boolean): void;
							public setMenuVisibility(param0: boolean): void;
							public getId(): number;
							public getTargetRequestCode(): number;
							public isInLayout(): boolean;
						}
						export module Stub {
							export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IFragmentWrapper {
								public static class: java.lang.Class<com.google.android.gms.dynamic.IFragmentWrapper.Stub.zza>;
								public setRetainInstance(param0: boolean): void;
								public isRemoving(): boolean;
								public startActivity(param0: android.content.Intent): void;
								public getArguments(): android.os.Bundle;
								public getRetainInstance(): boolean;
								public isResumed(): boolean;
								public startActivityForResult(param0: android.content.Intent, param1: number): void;
								public setHasOptionsMenu(param0: boolean): void;
								public setMenuVisibility(param0: boolean): void;
								public isHidden(): boolean;
								public isInLayout(): boolean;
								public getId(): number;
								public getUserVisibleHint(): boolean;
								public getTag(): string;
								public getTargetRequestCode(): number;
								public isAdded(): boolean;
								public isDetached(): boolean;
								public isVisible(): boolean;
								public setUserVisibleHint(param0: boolean): void;
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
			export module gms {
				export module dynamic {
					export class IObjectWrapper {
						public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.IObjectWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module IObjectWrapper {
						export class Stub extends com.google.android.gms.internal.common.zzb implements com.google.android.gms.dynamic.IObjectWrapper {
							public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub>;
							public constructor();
							public static asInterface(param0: android.os.IBinder): com.google.android.gms.dynamic.IObjectWrapper;
							public constructor(param0: string);
						}
						export module Stub {
							export class zza extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamic.IObjectWrapper {
								public static class: java.lang.Class<com.google.android.gms.dynamic.IObjectWrapper.Stub.zza>;
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
			export module gms {
				export module dynamic {
					export class LifecycleDelegate {
						public static class: java.lang.Class<com.google.android.gms.dynamic.LifecycleDelegate>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.LifecycleDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onInflate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.Bundle): void;
							onCreate(param0: android.os.Bundle): void;
							onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
							onStart(): void;
							onResume(): void;
							onPause(): void;
							onStop(): void;
							onDestroyView(): void;
							onDestroy(): void;
							onLowMemory(): void;
							onSaveInstanceState(param0: android.os.Bundle): void;
						});
						public constructor();
						public onDestroyView(): void;
						public onDestroy(): void;
						public onInflate(param0: android.app.Activity, param1: android.os.Bundle, param2: android.os.Bundle): void;
						public onResume(): void;
						public onCreate(param0: android.os.Bundle): void;
						public onCreateView(param0: android.view.LayoutInflater, param1: android.view.ViewGroup, param2: android.os.Bundle): android.view.View;
						public onSaveInstanceState(param0: android.os.Bundle): void;
						public onStop(): void;
						public onLowMemory(): void;
						public onStart(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class ObjectWrapper<T>  extends com.google.android.gms.dynamic.IObjectWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.ObjectWrapper<any>>;
						public static unwrap(param0: com.google.android.gms.dynamic.IObjectWrapper): any;
						public static wrap(param0: any): com.google.android.gms.dynamic.IObjectWrapper;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class OnDelegateCreatedListener<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.OnDelegateCreatedListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamic.OnDelegateCreatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDelegateCreated(param0: T): void;
						});
						public constructor();
						public onDelegateCreated(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export abstract class RemoteCreator<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator<any>>;
						public getRemoteCreator(param0: android.os.IBinder): T;
						public getRemoteCreatorInstance(param0: android.content.Context): T;
						public constructor(param0: string);
					}
					export module RemoteCreator {
						export class RemoteCreatorException {
							public static class: java.lang.Class<com.google.android.gms.dynamic.RemoteCreator.RemoteCreatorException>;
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamic {
					export class SupportFragmentWrapper extends com.google.android.gms.dynamic.IFragmentWrapper.Stub {
						public static class: java.lang.Class<com.google.android.gms.dynamic.SupportFragmentWrapper>;
						public setRetainInstance(param0: boolean): void;
						public startActivityForResult(param0: android.content.Intent, param1: number): void;
						public isRemoving(): boolean;
						public setHasOptionsMenu(param0: boolean): void;
						public setMenuVisibility(param0: boolean): void;
						public getRetainInstance(): boolean;
						public getUserVisibleHint(): boolean;
						public isResumed(): boolean;
						public getId(): number;
						public isInLayout(): boolean;
						public getArguments(): android.os.Bundle;
						public isHidden(): boolean;
						public startActivity(param0: android.content.Intent): void;
						public getTargetRequestCode(): number;
						public isVisible(): boolean;
						public isAdded(): boolean;
						public getTag(): string;
						public static wrap(param0: androidx.fragment.app.Fragment): com.google.android.gms.dynamic.SupportFragmentWrapper;
						public isDetached(): boolean;
						public setUserVisibleHint(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class DynamiteModule {
						public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule>;
						public static PREFER_REMOTE: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_LOCAL: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_LOCAL_VERSION_NO_FORCE_STAGING: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static PREFER_HIGHEST_OR_REMOTE_VERSION: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy;
						public static getRemoteVersion(param0: android.content.Context, param1: string): number;
						public static getLocalVersion(param0: android.content.Context, param1: string): number;
						public getModuleContext(): android.content.Context;
						public instantiate(param0: string): android.os.IBinder;
						public static load(param0: android.content.Context, param1: com.google.android.gms.dynamite.DynamiteModule.VersionPolicy, param2: string): com.google.android.gms.dynamite.DynamiteModule;
					}
					export module DynamiteModule {
						export class DynamiteLoaderClassLoader {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.DynamiteLoaderClassLoader>;
							public static sClassLoader: java.lang.ClassLoader;
							public constructor();
						}
						export class LoadingException {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.LoadingException>;
						}
						export class VersionPolicy {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy>;
							/**
							 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: android.content.Context, param1: string, param2: any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza*/): any /* com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb*/;
							});
							public constructor();
						}
						export module VersionPolicy {
							export class zza {
								public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza>;
								/**
								 * Constructs a new instance of the com.google.android.gms.dynamite.DynamiteModule$VersionPolicy$zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: android.content.Context, param1: string, param2: boolean): number;
									getLocalVersion(param0: android.content.Context, param1: string): number;
								});
								public constructor();
								public getLocalVersion(param0: android.content.Context, param1: string): number;
							}
							export class zzb {
								public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zzb>;
								public constructor();
							}
						}
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zza>;
						}
						export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
							public static class: java.lang.Class<com.google.android.gms.dynamite.DynamiteModule.zzb>;
							public constructor(param0: number, param1: number);
							public getLocalVersion(param0: android.content.Context, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zza extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy.zza {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zza>;
						public getLocalVersion(param0: android.content.Context, param1: string): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzb extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzb>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzc extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzc>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzd extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzd>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zze extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zze>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzf extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzf>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzg extends com.google.android.gms.dynamite.DynamiteModule.VersionPolicy {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzg>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzh {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzh>;
						public loadClass(param0: string, param1: boolean): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzi>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number): com.google.android.gms.dynamic.IObjectWrapper;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: boolean): number;
							zzak(): number;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzj extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzi {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzj>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzk {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzk>;
						/**
						 * Constructs a new instance of the com.google.android.gms.dynamite.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zza(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number, param3: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.dynamic.IObjectWrapper;
							zzb(param0: com.google.android.gms.dynamic.IObjectWrapper, param1: string, param2: number, param3: com.google.android.gms.dynamic.IObjectWrapper): com.google.android.gms.dynamic.IObjectWrapper;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module dynamite {
					export class zzl extends com.google.android.gms.internal.common.zza implements com.google.android.gms.dynamite.zzk {
						public static class: java.lang.Class<com.google.android.gms.dynamite.zzl>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zza>;
							public constructor(param0: android.os.IBinder, param1: string);
							public asBinder(): android.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzb {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzb>;
							public asBinder(): android.os.IBinder;
							public constructor(param0: string);
							public onTransact(param0: number, param1: android.os.Parcel, param2: android.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzc {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzc>;
							public static writeBoolean(param0: android.os.Parcel, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzd {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzd>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.common.zzd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module internal {
					export module common {
						export class zze {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zze>;
							public constructor();
							public constructor(param0: android.os.Looper);
							public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
							public dispatchMessage(param0: android.os.Message): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module common {
						export class zzf {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.gms.internal.common.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export module gms {
				export module internal {
					export module common {
						export class zzg {
							public static class: java.lang.Class<com.google.android.gms.internal.common.zzg>;
							public static getDeviceProtectedStorageContext(param0: android.content.Context): android.content.Context;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module security {
					export class ProviderInstaller {
						public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller>;
						public static PROVIDER_NAME: string;
						public constructor();
						public static installIfNeeded(param0: android.content.Context): void;
						public static installIfNeededAsync(param0: android.content.Context, param1: com.google.android.gms.security.ProviderInstaller.ProviderInstallListener): void;
					}
					export module ProviderInstaller {
						export class ProviderInstallListener {
							public static class: java.lang.Class<com.google.android.gms.security.ProviderInstaller.ProviderInstallListener>;
							/**
							 * Constructs a new instance of the com.google.android.gms.security.ProviderInstaller$ProviderInstallListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onProviderInstalled(): void;
								onProviderInstallFailed(param0: number, param1: android.content.Intent): void;
							});
							public constructor();
							public onProviderInstalled(): void;
							public onProviderInstallFailed(param0: number, param1: android.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module security {
					export class zza extends android.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Integer> {
						public static class: java.lang.Class<com.google.android.gms.security.zza>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseApiNotAvailableException extends com.google.firebase.FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseApiNotAvailableException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseException {
				public static class: java.lang.Class<com.google.firebase.FirebaseException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export class FirebaseExceptionMapper extends com.google.android.gms.common.api.internal.StatusExceptionMapper {
				public static class: java.lang.Class<com.google.firebase.FirebaseExceptionMapper>;
				public getException(param0: com.google.android.gms.common.api.Status): java.lang.Exception;
				public constructor();
			}
		}
	}
}

//Generics information:
//com.google.android.gms.common.api.ResolvingResultCallbacks:1
//com.google.android.gms.common.api.Response:1
//com.google.android.gms.common.api.ResultCallback:1
//com.google.android.gms.common.api.ResultCallbacks:1
//com.google.android.gms.common.config.GservicesValue:1
//com.google.android.gms.common.internal.BaseGmsClient:1
//com.google.android.gms.common.internal.BaseGmsClient.zzc:1
//com.google.android.gms.common.util.BiConsumer:2
//com.google.android.gms.common.util.Predicate:1
//com.google.android.gms.dynamic.ObjectWrapper:1
//com.google.android.gms.dynamic.OnDelegateCreatedListener:1
//com.google.android.gms.dynamic.RemoteCreator:1

