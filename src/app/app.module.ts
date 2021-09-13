import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingComponent } from './secure/landing/landing.component';
import { ValidationComponent } from './secure/validation/validation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ValidationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
