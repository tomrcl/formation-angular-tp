import { ITicket } from './ticket.interface';

export class Tickets {
    private tickets: ITicket[];

    constructor(tickets?: ITicket[]) {
        this.tickets = tickets;
    }

    get allTickets() {
        return this.tickets;
    }

    editTicket(ticket: ITicket) {
        console.log("edit", ticket);
    }
    
    deleteTicket(ticket: ITicket) {
        console.log("delete", ticket);
    }
}
