import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenIntecepterService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('user')
          ? `Bearer ${JSON.parse(localStorage.getItem('user')).user.token}`
          : '',
      },
    });
    return next.handle(req);
  }
  constructor() {}
}
