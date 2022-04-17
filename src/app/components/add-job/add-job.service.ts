import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class AddJobService {
  private URL_ADD = 'https://jobify-prod.herokuapp.com/api/v1/toolkit/jobs';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('Auth_token'),
    }),
  };
  constructor(private http: HttpClient) {}
  public editJob(payload: Partial<Job>, id: string): Observable<any> {
    const url = `${this.URL_ADD}/${id}`;
    return this.http.patch<any>(url, payload, this.httpOptions);
  }
  public addJob(payload: Job): Observable<any> {
    const url = `${this.URL_ADD}`;
    return this.http.post<Job>(url, payload, this.httpOptions);
  }
}
