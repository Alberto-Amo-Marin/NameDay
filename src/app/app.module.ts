import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpainComponent } from './spain/spain.component';
import { EeuuComponent } from './eeuu/eeuu.component';
import { FranceComponent } from './france/france.component';

@NgModule({
  declarations: [
    AppComponent,
    SpainComponent,
    EeuuComponent,
    FranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
