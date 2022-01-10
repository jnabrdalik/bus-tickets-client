import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private redirectUrl = '';

  private isAuth = new BehaviorSubject<boolean>(false);
  isAuth$: Observable<boolean> = this.isAuth.asObservable();

  private currentUser = new BehaviorSubject<string | null>(null);
  currentUser$: Observable<string | null> = this.currentUser.asObservable();

  constructor(
    private router: Router
  ) {
    window.addEventListener('message', (message) => {
      if (message.data.authorization) {
        const jwt = message.data.authorization
        localStorage.setItem('jwt', jwt);
        this.isAuth.next(true);
        this.currentUser.next(this.getUsernameFromJwt(jwt));
      }
      if (this.redirectUrl) {
        this.router.navigateByUrl(this.redirectUrl);
        this.redirectUrl = '';
      }      
    });
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      this.isAuth.next(true);
      this.currentUser.next(this.getUsernameFromJwt(jwt));
    }
  }

  login(redirectUrl: string = '') {
    this.redirectUrl = redirectUrl;
    window.open('https://europe-central2-soy-totem-335520.cloudfunctions.net/auth/google', "mywindow", "location=1,status=1,scrollbars=1,width=800,height=800");
    
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.isAuth.next(false);
    this.currentUser.next('');
    this.router.navigate(['']);
  }

  private getUsernameFromJwt(jwt: string): string {
    return jwt ? JSON.parse(atob(jwt.split('.')[1])).displayName : '';
  }

}
