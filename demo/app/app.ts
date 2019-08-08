/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Place } from 'nativescript-google-places-sdk';
import * as app from 'tns-core-modules/application';
import { isAndroid } from 'tns-core-modules/platform';
import { ANDROID_API_KEY, IOS_API_KEY } from './environment';

Place.initialize(isAndroid ? ANDROID_API_KEY : IOS_API_KEY);

app.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
