import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { EventCardComponent } from './event-class-component';
import { CustomHighLight } from './custom-highlight.directive';
import { ArraySinglerPipe } from './app-array-singler.pipe';
import { AppReactiveFormComponent } from './app-reactive-form/app-reactive-form.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes :Routes = [
    { path: "", component:WelcomeComponent },
  { path: "Accueil", component:MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    CustomHighLight,
    ArraySinglerPipe,
    AppReactiveFormComponent,
    MainComponent,
    WelcomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
