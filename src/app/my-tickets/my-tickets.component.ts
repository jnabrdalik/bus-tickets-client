import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Journey } from '../model/journey';
import { Ticket } from '../model/ticket';
import { SearchService } from '../search.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  loaded: boolean = false;
  tickets: Ticket[];

  constructor(
    private ticketService: TicketService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(
      res => {
        this.tickets = res;
        this.loaded = true;
      }
    );
  }

  getJourney(journeyId: string): Observable<Journey> {
    return this.searchService.getJourney(journeyId);
  }
}
