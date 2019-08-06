import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MeetService } from '../../services/createmeeting.service';
import { first } from 'rxjs/operators';
import { FormServices } from '../../services/form';
import { MatSnackBar } from '@angular/material';
import { Meeting } from '../../models/meeting.model';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetForm: FormGroup;
  start:string='';
  end:string='';

constructor(
  private router: Router,
  private api: MeetService,
  private formBuilder: FormBuilder,
  public snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.meetForm = this.formBuilder.group({
      'start': [null, Validators.required],
      'end': [null, Validators.required],
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.createMeeting(form)
    .subscribe(res => {
      this.router.navigate(['/developer']);
      this.snackbar.open('Successfully Loggedin', 'Close', {
        duration: 3000,
      });
    }, (err) => {
      console.log(err);
    }
  );
  }
}
