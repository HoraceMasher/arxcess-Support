import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  @Input()
  ticket: Ticket | undefined;
  ticketId: string = '';

  constructor(
    private route: ActivatedRoute,
    private ticketsService: TicketsService
  ) {}

  ngOnInit() {
    const ticketId = this.route.snapshot.paramMap.get('id');
    if (ticketId) {
      this.ticket = this.ticketsService.getTicketById(ticketId);
    }
  }

  toggleTicketStatus() {
    if (this.ticket && this.ticket.status === 'Open') {
      this.ticket.status = 'Closed';
    } else if (this.ticket) {
      this.ticket.status = 'Open';
    }

    if (this.ticket) {
      this.ticket.lastActivity = new Date();
      this.ticketsService.updateTicket(this.ticket);
    }
  }
}
