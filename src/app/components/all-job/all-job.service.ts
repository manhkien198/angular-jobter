import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchValue } from 'src/app/model/allJob';
import { Job } from '../../model/index';
@Injectable({
  providedIn: 'root',
})
export class AllJobService {
  public jobItem: Job;
  private URL_ALLJOB = 'https://jobify-prod.herokuapp.com/api/v1/toolkit/jobs';

  constructor(private http: HttpClient) {}
  public getJob(payload: SearchValue): Observable<any> {
    const url = `${this.URL_ALLJOB}?status=${payload.status || ''}&jobType=${
      payload.type || ''
    }&sort=${payload.sort || ''}&page=1&search=${payload.search || ''}`;
    return this.http.get<any>(url);
  }
  public editJob(job: Job): void {
    this.jobItem = job;
  }
  public deleteJob(id: string): Observable<any> {
    const url = `${this.URL_ALLJOB}/${id}`;
    return this.http.delete(url);
  }
}
