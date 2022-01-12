import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Journey } from './model/journey';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getAllJourneys(date: string, from: string, to: string) {
    return this.http.get<Journey[]>(`${environment.api}/journeys`, {
      params: { date, from, to }
    }).pipe(
      map(
        (results: Journey[]) => results.sort((j1, j2) => j1.departureTime.localeCompare(j2.departureTime))
      )
    )
  }

  getJourney(id: string): Observable<Journey> {
    return this.http.get<Journey>(`${environment.api}/journeys/byId/${id}`);
  }
}
