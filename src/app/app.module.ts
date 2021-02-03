import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { HeadersComponent } from './headers/headers.component';
import { CardsComponent } from './cards/cards.component';
import { FootersComponent } from './footers/footers.component';
import { SidebarsComponent } from './sidebars/sidebars.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    HeadersComponent,
    CardsComponent,
    FootersComponent,
    SidebarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
