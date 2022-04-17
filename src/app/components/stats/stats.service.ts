import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stat } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private API_STATS =
    'https://jobify-prod.herokuapp.com/api/v1/toolkit/jobs/stats';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('Auth_token'),
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getJob(): Observable<Stat> {
    return this.httpClient.get<Stat>(this.API_STATS, this.httpOptions);
  }
}
