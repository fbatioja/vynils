import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PrizeModule} from './prize/prize.module';
import {HttpClientModule} from '@angular/common/http';
import { AlbumModule } from './album/album.module';
import {PerformerModule} from './performer/performer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrizeModule,
    HttpClientModule,
    AlbumModule,
    PerformerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
