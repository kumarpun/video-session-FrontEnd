import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ClientComponent } from './dashboard/client/client.component';
import { DeveloperComponent } from './dashboard/developer/developer.component';
import { BookMeetingComponent } from './dashboard/book-meeting/book-meeting.component';
import { MeetingComponent } from './dashboard/meeting/meeting.component';
import { SessionComponent } from './dashboard/session/session.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'developer',
    component: DeveloperComponent
  },
  {
    path: 'meeting',
    component: MeetingComponent
  },
  {
    path: 'book',
    component: BookMeetingComponent
  },
  {
    path: 'session',
    component: SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
