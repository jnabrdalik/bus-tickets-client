import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

 

  constructor(
    private http: HttpClient,
    private loginService: LoginService) {

  }

  

  

  // sendRequest() {
  //   this.http.post('https://europe-central2-soy-totem-335520.cloudfunctions.net/tickets/order', {
  //     "person_id": "6EF2R3zma9HRgVjYL4kI",
  //     "journey_id": "a2uJeu8ckSzFvdErYmPz",
  //     "bus_id": "3oK8mF6S0job1kzZ0jv3",
  //     "line_id": "biYe5p4W3ATFI4GIpQOY",
  //     "origin_stop_number": "20",
  //     "destination_stop_number": "30"
  //   },
  //     {
  //       headers: new HttpHeaders({ 'authorization': this.authorization })
  //     })
  //     .pipe(catchError(err => {
  //       err.status === 401 && this.loginService.login();
  //       return throwError(err);
  //     }))
  //     .subscribe(res => console.log('ticketId:', res));
  // }
}
