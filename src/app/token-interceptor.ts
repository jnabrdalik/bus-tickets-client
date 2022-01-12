import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    
    req = req.clone({
      setHeaders: {
        Authorization: localStorage.getItem('jwt') ?? ''
      }
    });

    console.log(req)
    return next.handle(req);
  }
}
