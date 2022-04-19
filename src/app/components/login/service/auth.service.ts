import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormValue } from 'src/app/model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: boolean;
  constructor() {}
  public submit(value: FormValue): void {
    this.loggedIn = true;
  }
  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem('isLoggedIn') == 'true') {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
  public logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
  ngOnInit(): void {}
}
