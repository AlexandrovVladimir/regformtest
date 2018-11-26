import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api";

@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  configUrl = 'http://localhost:3000/api/notices';



  constructor(private http: HttpClient){ }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllNotices(): Observable<any> {
    const url = `${this.configUrl}`;

    return this.http.get<any>(url).pipe(map( result => {
      return result;
    }));
  }

  getCurrentNotice(id: string): Observable<any> {
    return this.http.get(`${this.configUrl}/${id}`, httpOptions).pipe(map( result => {
      return result;
    }));
  }

  deleteNotice(id: string): Observable<any> {
    const url = `${apiUrl}/notices/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  editNotice(id: string, data): Observable<any> {
    const url = `${apiUrl}/notices/${id}`;
    console.log(data);
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}
