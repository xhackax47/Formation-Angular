import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { EventCardComponent } from './event-class-component';
import { CustomHighLight } from './custom-highlight.directive';
import { ArraySinglerPipe } from './app-array-singler.pipe';
import { AppReactiveFormComponent } from './app-reactive-form/app-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    CustomHighLight,
    ArraySinglerPipe,
    AppReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
