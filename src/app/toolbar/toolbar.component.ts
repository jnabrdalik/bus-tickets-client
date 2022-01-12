import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';
import { User } from '../model/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isAuth$: Observable<boolean> = this.loginService.isAuth$;
  currentUser$: Observable<User> = this.loginService.currentUser$;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }

}
