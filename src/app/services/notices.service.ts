import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {error} from "util";

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

  getAllNotices(): Observable<any> {
    const url = `${this.configUrl}`;

    return this.http.get<any>(url).pipe(map( result => {
      return result;
    }))
  }

  getCurrentNotice(id: string): Observable<any> {
    console.log(`${apiUrl}/notices/${id}`);
    return this.http.get(`${this.configUrl}/${id}`, httpOptions).pipe(map( result => {
      return result;
    }));
  }
}
