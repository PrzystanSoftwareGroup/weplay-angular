import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./component/calendar/calendar.component";
import {PageNotFundComponent} from "./component/page-not-fund/page-not-fund.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
