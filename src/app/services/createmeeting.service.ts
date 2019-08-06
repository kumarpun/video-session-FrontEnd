import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Meeting } from '../models/meeting.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
  })

export class MeetService {
     public Url: string = environment.meetUrl;

     constructor(private http: HttpClient) {}

     private handleError(error: HttpErrorResponse) {
         if (error.error instanceof ErrorEvent) {
             console.error('An error occured:', error.error.message);
         } else {
             // backend error
             console.error(
                 `Backend return code ${error.status}, ` +
                 `body was: ${error.error}`);
         }
         return throwError('Something bad happened: please try again later');
     }

     private extractData(res: Response) {
         let body = res;
         return body || { };
     }
     
     createMeeting(data): Observable<any> {
         return this.http.post(`${this.Url}/meetings/create`, data, httpOptions)
         .pipe(
             catchError(this.handleError)
         );
     }

     getMeeting(): Observable<any> {
         return this.http.get(`${this.Url}/meetings/create`, httpOptions).pipe(
             map(this.extractData),
             catchError(this.handleError));
     }

     getTrueBook(): Observable<any> {
         return this.http.get(`${this.Url}/meetings/true`, httpOptions).pipe(
             map(this.extractData),
             catchError(this.handleError));
     }

     getFalseBook(): Observable<any> {
        return this.http.get(`${this.Url}/meetings/false`, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

     getMeetingbyId(id: string): Observable<any> {
         return this.http.get(`${this.Url}/meeting/${id}`, httpOptions)
         .pipe(
             map(this.extractData),
             catchError(this.handleError));
     }


     onApprove(_id, booked): Observable<any> {
         const payloads = {id:_id, report: booked}
         console.log(payloads);
        return this.http.post(`${this.Url}/meetings/book/${_id}`, {params: payloads});
    }
}

