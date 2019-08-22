import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { LocationBiasComponent } from './location-bias.component';

const routes: Routes = [
  { path: '', component: LocationBiasComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class LocationBiasRoutingModule { }
