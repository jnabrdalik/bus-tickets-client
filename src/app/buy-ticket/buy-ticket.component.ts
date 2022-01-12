import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, Observable, throwIfEmpty } from 'rxjs';
import { LoginService } from '../login.service';
import { Journey } from '../model/journey';
import { User } from '../model/user';
import { SearchService } from '../search.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {

  firstName: string;
  lastName: string;
  user: User;
  journey: Journey;
  clicked: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private searchService: SearchService,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        const journeyId = params['journeyId'];
        this.searchService.getJourney(journeyId).subscribe(
          journey => this.journey = journey
        );
      }
    );

    this.loginService.currentUser$.subscribe(
      user => {
        this.firstName = user.givenName;
        this.lastName = user.familyName;
      }
    )
  }

  buyTicket() {
    this.clicked = true;
    this.ticketService.buyTicket(this.journey.id, this.firstName, this.lastName).subscribe(
      _ => this.router.navigate(['ticket-purchased'])
    )
  }
  
}
