import { HttpClient } from '@angular/common/http';
import { LoginPayload, ResponseLogin, User } from './../../../model/login';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { FormValue } from 'src/app/model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  private URL_LOGIN: string =
    'https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/login';
  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  public login(payload: LoginPayload) {
    return this.http.post<User>(this.URL_LOGIN, payload).pipe(
      map((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }
  public logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {}
}
