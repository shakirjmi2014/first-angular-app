import { Injectable, Component } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getUsers() {
    console.log('Constants.USERS_API_ENDPOINT', Constants.USERS_API_ENDPOINT);
    return this.http
      .get(Constants.USERS_API_ENDPOINT)
      .pipe(catchError(this.handleError));
  }

  getCountries() {
    console.log(
      'Constants.COUNTRIES_API_ENDPOINT',
      Constants.COUNTRIES_API_ENDPOINT
    );
    return this.http
      .get(Constants.COUNTRIES_API_ENDPOINT)
      .pipe(catchError(this.handleError));
  }
}
