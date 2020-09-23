import { TicketComponent } from './ticket/ticket.component';
import { ListTicketsRoutingModule } from './list-tickets-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListTicketsComponent } from './list-tickets.component';


@NgModule({
  imports: [
    CommonModule,
    ListTicketsRoutingModule
  ],
  declarations: [ListTicketsComponent, TicketComponent],
})
export class ListTicketModule { }
