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
import { PageNotFundComponent } from './component/page-not-fund/page-not-fund.component';
import {HomeComponent} from "./component/home/home.component";
import { FullCalendarModule } from '@fullcalendar/angular';
import { WelcomeComponent } from './component/welcome/welcome.component';

ClarityIcons.addIcons(cogIcon, playIcon);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalendarComponent,
    PageNotFundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    AppRoutingModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
