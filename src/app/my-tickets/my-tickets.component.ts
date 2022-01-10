import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {

  constructor(
    private ticketService: TicketService,
  ) { }

  ngOnInit(): void {
  }
}
