import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ClarityModule} from "@clr/angular";
import {HeaderComponent} from './component/header/header.component';
import '@cds/core/icon/register.js';
import {ClarityIcons, cogIcon, playIcon} from '@cds/core/icon';
import {CalendarComponent} from './component/calendar/calendar.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFundComponent } from './page-not-fund/page-not-fund.component';
import {HomeComponent} from "./home/home.component";

ClarityIcons.addIcons(cogIcon, playIcon);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalendarComponent,
    PageNotFundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ClarityModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
