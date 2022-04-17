import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/app/model';
import { FormValue } from 'src/app/model/login';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  public infoUser: Profile;
  private URL_LOGIN: string =
    'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login';
  private URL_REGISTER =
    'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}
  public login(payload: FormValue): Observable<any> {
    return this.httpClient.post<any>(this.URL_LOGIN, payload, this.httpOptions);
  }
  public register(payload: FormValue): Observable<any> {
    return this.httpClient.post<any>(
      this.URL_REGISTER,
      payload,
      this.httpOptions
    );
  }
  public getInfo(info: Profile) {
    this.infoUser = info;
  }
}
