import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TestingAreaComponent } from './testing-area/testing-area';
import { PopupAreaComponent } from './popup-area/popup-area'
import { ContentDrawerComponent } from './content-drawer/content-drawer';
import { InfoCardsComponent } from './info-cards/info-cards.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    TestingAreaComponent,
    PopupAreaComponent,
    ContentDrawerComponent,
    InfoCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }