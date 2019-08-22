import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/basic', pathMatch: 'full' },
    { path: 'basic', loadChildren: '~/app/basic/basic.module#BasicModule', data: { title: 'Basic' } },
    {
        path: 'location-bias',
        loadChildren: '~/app/location-bias/location-bias.module#LocationBiasModule',
        data: { title: 'Location Bias' }
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
