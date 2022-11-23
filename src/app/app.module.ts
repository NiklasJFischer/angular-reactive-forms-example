import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlExampleComponent } from './form-control-example/form-control-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { NestedFormGroupExampleComponent } from './nested-form-group-example/nested-form-group-example.component';
import { ValidationExampleComponent } from './validation-example/validation-example.component';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';
import { SelectControlsExampleComponent } from './select-controls-example/select-controls-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlExampleComponent,
    FormGroupExampleComponent,
    NestedFormGroupExampleComponent,
    ValidationExampleComponent,
    DynamicExampleComponent,
    SelectControlsExampleComponent
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
