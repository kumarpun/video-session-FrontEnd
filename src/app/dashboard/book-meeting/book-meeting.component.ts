import { Component, OnInit } from '@angular/core';
import { MeetService } from '../../services/createmeeting.service';
import {DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-meeting',
  templateUrl: './book-meeting.component.html',
  styleUrls: ['./book-meeting.component.css']
})
export class BookMeetingComponent implements OnInit {

  meetings: any;
  displayedColumns = ['start', 'booked'];
  dataSource = new MeetingDataSource(this.api, this.router);

  constructor(
    private api: MeetService,
    private router: Router
    ) { }

  ngOnInit() {
    this.api.getFalseBook()
    .subscribe(res => {
      console.log(res);
      this.meetings = res;
    }, err => {
      console.log(err);
    });
  }
  approve(_id, booked) {
    this.api.onApprove(_id, booked)
    .subscribe((data: any) => {
      console.log(data);
    });
  }
}
export class MeetingDataSource extends DataSource<any> {
  constructor(private api: MeetService,
    private router: Router) {
    super()
  }
  connect(){
    return this .api.getFalseBook();
  }
  disconnect() {

  }
  approve(_id, booked) {
    this.api.onApprove(_id, booked)
    .subscribe((data: any) => {
      data => {
        console.log(data);
      }
    });
  }
  }

