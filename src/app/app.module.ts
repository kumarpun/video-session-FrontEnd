import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { CustomMaterialModule } from './core/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ClientComponent } from './dashboard/client/client.component';
import { DeveloperComponent } from './dashboard/developer/developer.component';
import { BookMeetingComponent } from './dashboard/book-meeting/book-meeting.component';
import { MeetingComponent } from './dashboard/meeting/meeting.component';
import { MeetService } from './services/createmeeting.service';
import { HttpClientModule } from '@angular/common/http';
import { FormServices } from './services/form';
import { SessionComponent } from './dashboard/session/session.component';
import { TrueComponent } from './dashboard/true/true.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    DeveloperComponent,
    BookMeetingComponent,
    MeetingComponent,
    SessionComponent,
    TrueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    HttpClientModule,
  ],
  providers: [
    MeetService,
    FormServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
