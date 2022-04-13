import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormValue } from 'src/app/model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor(private router: Router) {}
  public submit(value: FormValue): void {
    this.loggedIn.next(true);
    this.router.navigate(['/home']);
  }
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
