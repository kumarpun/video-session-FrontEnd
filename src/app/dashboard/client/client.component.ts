import { Component, OnInit } from '@angular/core';
import { MeetService } from '../../services/createmeeting.service';
import {DataSource } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  meetings: any;
  displayedColumns = ['start', 'booked'];
  booked: boolean = true;
  dataSource = new MeetingDataSource(this.api);

  constructor(
    private api: MeetService,
    private router: Router) { }

  ngOnInit() {
    this.api.getTrueBook()
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
    return this.api.getTrueBook();
  }
  disconnect() {
  }
}
