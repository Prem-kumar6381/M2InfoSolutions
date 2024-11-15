import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EpublishingComponent } from './epublishing/epublishing.component';
import { AccessibilityservicesComponent } from './accessibilityservices/accessibilityservices.component';
import { DataannotationComponent } from './dataannotation/dataannotation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpublishingComponent,
    AccessibilityservicesComponent,
    DataannotationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
