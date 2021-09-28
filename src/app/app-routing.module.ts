import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RacePageComponent } from './race-page/race-page.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'race-page', component: RacePageComponent },
  { path: 'membership', component: MembershipComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
