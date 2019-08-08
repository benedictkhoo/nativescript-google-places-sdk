# NativesScript Google Place SDK

A NativesScript plugin for Google Places SDK.

Documentation:
* [Places SDK for Android](https://developers.google.com/places/android-sdk/intro)
* [Places SDK for iOS](https://developers.google.com/places/ios-sdk/intro)

## Requirements

Enable Google Places API if you have not already done so.

Configure skip library check in tsconfig.json

```
{
  "compilerOptions": {
    ...
    "skipLibCheck": true
    ...
  }
}
```

## Installation

```
tns plugin add nativescript-google-place-sdk
```

## Usage

### NativeScript

Initialize the Place SDK

app.ts

```
...
Place.initialize(isAndroid ? 'GOOGLE_PLACE_ANDROID_API_KEY' : 'GOOGLE_PLACE_IOS_API_KEY');
...
```

Show the Autocomplete UI

my-awesome-page.xml

```
<Button text="Search" tap="search()"></Button>
```

my-awesome-page.ts

```
export function search(): void {
    PlaceAutocomplete.show()
    .then(
        (result) => {
            if (result) {
                console.log('Place Details:', result);
            }
        },
        (err) => console.error(err)
    );
}
```

### NativeScript + Angular

Initialize the Place SDK

app.component.ts

```
@Component({
    moduleId: module.id,
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        Place.initialize(isAndroid ? 'GOOGLE_PLACE_ANDROID_API_KEY' : 'GOOGLE_PLACE_IOS_API_KEY');
    }
}
```

Show the Autocomplete UI

my-awesome.component.html

```
<Button [text]="Search" (tap)="search()"></Button>
```

my-awesome.component.ts

```
@Component({
    moduleId: module.id,
    selector: 'ns-awesome',
    templateUrl: 'my-awesome.component.html'
})
export class MyAwesomeComponent {
    search(): void {
        PlaceAutocomplete.show()
        .then(
            (result) => {
                if (result) {
                    console.log('Place Details:', result);
                }
            },
            (err) => console.error(err)
        );
    }
}
```

## API

### Place

#### initialize(apiKey)

| Property | Default | Description |
| --- | --- | --- |
| apiKey | undefined | Google Place API key |

Example

```
Place.initialize('GOOGLE_PLACE_API_KEY');
```

### Autocomplete

#### show(options)

| Property | Default | Description |
| --- | --- | --- |
| fields | undefined | Define the types of field to retrieve. By default will retrieve all types. |
| locationBias.southwest | undefined | Southwest bound |
| locationBias.northeast | undefined | Northeast bound |

| Field | Data Type | Description |
| --- | --- | --- |
address | string | Address |
id | string | Id |
lat_lng | object | Coordinates |
name | string | Place name |
phone_number | string | Phone number |
price_level | number | Pricing |
rating | number | Rating |
user_ratings_total | number | Total ratings |
viewport | object | Viewport |
website_uri | string | URL |

Example

```
PlaceAutocomplete.show({ fields: ['name'] })
.then(
    (result) => {
        if (result) {
            console.log('Place Details:', result);
        }
    },
    (err) => console.error(err)
);
```

## License

MIT
