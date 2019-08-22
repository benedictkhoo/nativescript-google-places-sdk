import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BasicRoutingModule } from "./basic-routing.module";
import { BasicComponent } from "./basic.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BasicRoutingModule
    ],
    declarations: [
        BasicComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BasicModule { }
