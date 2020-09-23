import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ITicket } from 'src/app/ticket/ticket.interface';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketComponent implements OnInit {
  @Input() ticket: ITicket;
  @Output() editTicket: EventEmitter<ITicket> = new EventEmitter<ITicket>();
  @Output() deleteTicket: EventEmitter<ITicket> = new EventEmitter<ITicket>();

  constructor() { }

  ngOnInit(): void {
  }

  edit(ticket: ITicket) {
    this.editTicket.emit(ticket);
  }

  delete(ticket: ITicket) {
    this.deleteTicket.emit(ticket);
  }

}
