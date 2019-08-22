import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Place } from 'nativescript-google-places-sdk';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { isAndroid } from 'tns-core-modules/platform';
import { ANDROID_API_KEY, IOS_API_KEY } from './environment';

@Component({
    moduleId: module.id,
    selector: 'ns-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('sideDrawer', { static: true }) private sideDrawer: ElementRef<RadSideDrawer>;
    private destroy$ = new Subject<boolean>();
    private activePath: string;

    isAndroid$ = new BehaviorSubject<boolean>(isAndroid);
    title: string;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {}

    ngOnInit(): void {
        Place.initialize(isAndroid ? ANDROID_API_KEY : IOS_API_KEY);

        this.router.events
        .pipe(
            filter((event) => event instanceof NavigationEnd),
            takeUntil(this.destroy$)
        )
        .subscribe((event: NavigationEnd) => {
            this.activePath = event.urlAfterRedirects;
            this.title = this.router.routerState.snapshot.root.firstChild.data.title;
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    openSideDrawer(): void {
        this.sideDrawer.nativeElement.showDrawer();
    }

    goTo(path: string): void {
        this.sideDrawer.nativeElement.closeDrawer();
        this.routerExtensions.navigate([`/${path}`], { clearHistory: true, transition: { name: 'fade' } });
    }

    isPathActive(path: string): boolean {
        return this.activePath === `/${path}`;
    }
}
