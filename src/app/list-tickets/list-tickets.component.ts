import { Ticket } from './shared/models/ticket.class';
import { Component, OnInit } from '@angular/core';
import { TicketService } from './services/ticket.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {
  public tickets: Ticket[];

  constructor(public ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.loadTickets()
      .then(tickets => this.tickets = tickets);
  }
}
