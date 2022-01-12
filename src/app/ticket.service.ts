import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {

  }

  getTickets() {
    return this.http.get(`${environment.api}/tickets`).subscribe(
      t => console.log(t)
    )
  }

  buyTicket(journeyId: string, firstName: string, lastName: string) {
    return this.http.post(`${environment.api}/tickets/order`, {
      "journey_id": journeyId,
      "person_name": firstName,
      "person_surname": lastName
    });
  }
}
