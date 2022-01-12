import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from './model/ticket';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,
    private searchService: SearchService
  ) {

  }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<any[]>(`${environment.api}/tickets`).pipe(
      mergeMap((res: any[]) => {
        return forkJoin(
          res.map(t => {
            return this.searchService.getJourney(t.journey_id).pipe(
              map(journey => {
                t.journey = journey;
                return t;
              })
            )
          })
        )
      }),
      map(result => result.map(t => ({
        firstName: t.person_name,
        lastName: t.person_surname,
        seatNumber: t.seat_number,
        journey: t.journey
      }))),
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
