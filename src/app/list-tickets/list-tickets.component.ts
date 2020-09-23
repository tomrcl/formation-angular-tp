import { Tickets } from './../ticket/tickets';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ITicket } from '../ticket/ticket.interface';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListTicketsComponent implements OnInit {
  @Input() listTickets: Tickets;

  ngOnInit(): void {
  }
  
  editTicket(ticket: ITicket) {
    this.listTickets.editTicket(ticket);
  }

  deleteTicket(ticket: ITicket) {
    this.listTickets.deleteTicket(ticket);
  }

}
