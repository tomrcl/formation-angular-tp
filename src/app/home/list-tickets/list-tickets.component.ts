import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Ticket } from './shared/models/ticket.class';
import { TicketsService } from './shared/services/tickets/tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  public tickets: Ticket[];
  public loading: boolean;
  
  constructor(
    private ticketsService: TicketsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      this.tickets = [];
      this.loading = true;
      
      this.ticketsService.getAllTickets().then((res: Ticket[]) => {
        this.loading = false;
        this.tickets = res;
      });
    }
    
    onEdit(index: number) {
      this.router.navigate(['../edit-ticket', index], {relativeTo: this.activatedRoute});
    }
    
    onDelete(index: number) {
      this.loading = true;
      this.ticketsService.deleteTicket(index)
      .then(_ => this.loading = false);
    }
  }
  