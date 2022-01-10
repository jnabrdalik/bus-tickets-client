import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Connection } from './model/connection';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private connections: Connection[] = [
    {
      journeyId: 1, stationFrom: 'Warszawa', stationTo: 'Kraków', departureTime: '12:00', arrivalTime: '15:00', price: 99.00, availableSeats: 23  
    },
    {
      journeyId: 2, stationFrom: 'Warszawa', stationTo: 'Kraków', departureTime: '15:00', arrivalTime: '18:00', price: 99.00, availableSeats: 12  
    }
  ];

  getConnections(): Observable<Connection[]> {
    return of(this.connections);
  }
}
