import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model';

@Injectable({
  providedIn: 'root',
})
export class HttpProfileService {
  private URL_UPDATE =
    'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/updateUser';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('Auth_token'),
    }),
  };
  constructor(private http: HttpClient) {}
  public updateUser(payload: Profile): Observable<any> {
    return this.http.patch<Profile>(this.URL_UPDATE, payload, this.httpOptions);
  }
}
