import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket, TicketsService } from '../tickets.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  @Input()
  ticket: Ticket | undefined;
  ticketId: string = '';
  newMessage: FormControl = new FormControl(null);
  selectedTicket: any;

  constructor(
    private route: ActivatedRoute,
    private ticketsService: TicketsService
  ) {}

  ngOnInit() {
    this.newMessage.valueChanges.subscribe((val:any)=>{
      console.log(val);
    })
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
  // addMessage() {
  //   if (this.ticket) {
  //     this.ticket.messages.push(this.newMessage);
  //     this.ticket.lastActivity = new Date();
  //     this.ticketsService.updateTicket(this.ticket);
  //     this.newMessage = '';
  //   }
  // }
  
  
  addMessage() {
    if(this.ticket){
      console.log(this.ticket);
      this.ticketsService.addMessage(this.ticket?.id, this.newMessage.value); // Call the service method to add the message
      this.newMessage.reset(); // Clear the input field
  }
  
}
  
  
  }
  
