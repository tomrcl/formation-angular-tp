import { TicketsService } from './../list-tickets/shared/services/tickets/tickets.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, isDevMode } from '@angular/core';
import { Ticket } from '../list-tickets/shared/models/ticket.class';
import { Router, ActivatedRoute } from '@angular/router';
import { isNumber } from 'util';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.scss']
})
export class AddeditComponent implements OnInit {
  public ticketForm: FormGroup;
  public loading: boolean;
  private ticketId: number;
  
  constructor(
    private fb: FormBuilder,
    private ticketsService: TicketsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute
    ) {
      this.ticketId = +this.activatedRoute.snapshot.params.idTicket;
    }
    
    ngOnInit(): void { 
      this.loading = false;
      
      let ticket: Ticket;
      
      if (!isNaN(this.ticketId)) {
        ticket = this.ticketsService.getTicket(this.ticketId);
        
        this.ticketForm = this.fb.group({
          urlImage: [ticket.urlImage, Validators.required],
          nbLefts: [ticket.nbLefts, Validators.required],
          name: [ticket.name, Validators.required],
          description: [ticket.description, Validators.required]
        });
      } else {      
        let urlImage = '';
        let nbLefts;
        let name = '';
        let description = '';
        
        if (isDevMode()) {
          urlImage = 'https://s2.qwant.com/thumbr/0x380/6/4/58f81a6e1dcdaf9cad4b9e8f2f3b96bc964ba4a3778e829e08708aeacb989d/tenet-august-release-poster-john-david-washington.jpeg?u=https%3A%2F%2Fcdn.collider.com%2Fwp-content%2Fuploads%2F2020%2F07%2Ftenet-august-release-poster-john-david-washington.jpeg&q=0&b=1&p=0&a=1';
          nbLefts =5;
          name='Tenet';
          description=  "Muni d'un seul mot – Tenet – et décidé à se battre pour sauver le monde, notre protagoniste sillonne l'univers crépusculaire de l'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s'agit pas d'un voyage dans le temps, mais d'un renversement temporel…";        
        }
        
        this.ticketForm = this.fb.group({
          urlImage: [urlImage, Validators.required],
          nbLefts: [nbLefts, Validators.required],
          name: [name, Validators.required],
          description: [description, Validators.required]
        });
      }
    }
    
    onSubmit() {
      this.loading = true;
      
      const ticket = new Ticket(this.ticketForm.value);
      
      if (isNumber(this.ticketId)) {
        this.ticketsService.editTicket({index: this.ticketId, ticket})
        .then(_ => this.router.navigate(['/home/list-tickets'], {relativeTo: this.activatedRoute}));
      } else {
        this.ticketsService.addTicket(ticket)
        .then(_ => this.router.navigate(['/home/list-tickets'], {relativeTo: this.activatedRoute}));
      }
    }
  }
  