import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RandomComponent } from './random/random.component';
import { OnePlayerComponent } from './one-player/one-player.component';
import { TwoPlayersComponent } from './two-players/two-players.component';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  exports: [
    //MatSelectModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RandomComponent,
    OnePlayerComponent,
    TwoPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
