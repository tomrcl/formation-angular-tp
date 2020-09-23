import { Tickets } from './ticket/tickets';
import { Component } from '@angular/core';
import { MOCK_TICKETS } from './ticket/ticket.mock';
import { ITicket } from './ticket/ticket.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private listTickets: Tickets = new Tickets(MOCK_TICKETS);

}
