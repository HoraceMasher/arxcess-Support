import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ticket, TicketsService } from '../tickets.service';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.css']
})
export class TicketsListComponent implements OnInit {
 
  tickets: Ticket[] = [];
  selectedTicket: Ticket | undefined;

  constructor(
    private ticketService: TicketsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tickets = this.ticketService.getTickets();
  }

  createTicket(ticketData: any) {
    this.ticketService.addTicket(ticketData);
  }

  // showTicketDetails(ticket: Ticket) {
  //   this.selectedTicket = ticket;
  //   this.router.navigate(['/ticket-details', ticket.id], { relativeTo: this.route });
  // }

  selectTicket(ticket: Ticket) {
    this.selectedTicket = ticket;
  }
}
