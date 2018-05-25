import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventManagerComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'event/create', component: EventEditorComponent },
  { path: 'event/:id/edit', component: EventEditorComponent },
  { path: "", pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    EventManagerComponent,
    EventDetailComponent,
    EventEditorComponent,
    EventPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
