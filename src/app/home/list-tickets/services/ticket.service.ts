import { Injectable } from '@angular/core';
import { MOCK_TICKETS } from '../shared/mock/ticket.mock';
import { Ticket } from '../shared/models/ticket.class';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  public tickets: Ticket[];
  public isLoading: boolean = false;
  
  constructor() {
    
  }
  
  loadTickets(): Promise<Ticket[]> {
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.tickets = [];
        
        MOCK_TICKETS.forEach((ticket) => {
          this.tickets.push(new Ticket(ticket));
        });
        this.isLoading = false;
        resolve(this.tickets);
      }, 3000);
    });
  }
  
  getOne(index: number): Ticket {
    return this.tickets[index];
  }
  
  add(ticket: Ticket): boolean {
    this.tickets.push(ticket);
    return true;
  }
  
  edit({index, ticket}: { index: number, ticket: Ticket }): boolean {
    this.tickets[index] = ticket;
    return true;
  }
  
  delete(index: number): boolean {
    this.tickets.splice(index, 1);
    return true;
  }
}
