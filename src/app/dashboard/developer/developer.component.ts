import { Component, OnInit } from '@angular/core';
import { MeetService } from '../../services/createmeeting.service';
import {DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  meetings: any;
  navLinks: any[];
    activeLinkIndex = -1;

  displayedColumns = ['start', 'booked'];
  dataSource = new MeetingDataSource(this.api);

  constructor(
    private api: MeetService,
    private router: Router) { 
 
    }

  ngOnInit() {
    this.api.getMeeting()
    .subscribe(res => {
      console.log(res);
      this.meetings = res;
    }, err => {
      console.log(err);
    });
   
  }

  session() {
    this.router.navigate(['/session']);
  }
}
export class MeetingDataSource extends DataSource<any> {
  constructor(private api: MeetService) {
    super();
  }
  connect() {
    return this .api.getMeeting();
  }
  disconnect() {

  }
}
