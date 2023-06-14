import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

export interface  Ticket {
    id: string;
    name: any;
    dateCreated: Date;
    lastActivity: Date;
    status: string;
    message: string;
}


@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private tickets: Ticket[] =[];
  // submittedTickets$ = new BehaviorSubject<Ticket[]>([]);

  constructor() {}


  //shall replace with endpoint logic
  getCategories(): any[] {
    return [
      {
        id: 1,
        name: 'Category 1',
        subcategories: [
          {
            id: 1,
            name: 'Subcategory 1',
            tertiarySubcategories: [
              { id: 1, name: 'Tertiary Subcategory 1' },
              { id: 2, name: 'Tertiary Subcategory 2' },
              { id: 3, name: 'Tertiary Subcategory 3' }
            ]
          },
          {
            id: 2,
            name: 'Subcategory 2',
            tertiarySubcategories: [
              { id: 4, name: 'Tertiary Subcategory 4' },
              { id: 5, name: 'Tertiary Subcategory 5' },
              { id: 6, name: 'Tertiary Subcategory 6' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Category 2',
        subcategories: [
          {
            id: 3,
            name: 'Subcategory 3',
            tertiarySubcategories: [
              { id: 7, name: 'Tertiary Subcategory 7' },
              { id: 8, name: 'Tertiary Subcategory 8' },
              { id: 9, name: 'Tertiary Subcategory 9' }
            ]
          },
          {
            id: 4,
            name: 'Subcategory 4',
            tertiarySubcategories: [
              { id: 10, name: 'Tertiary Subcategory 10' },
              { id: 11, name: 'Tertiary Subcategory 11' },
              { id: 12, name: 'Tertiary Subcategory 12' }
            ]
          }
        ]
      }
    ];
  
  }

  addTicket(ticket: any): void {
    this.tickets.push(ticket);
    // this.submittedTickets$.next(this.tickets);
  }

  getTicketById(id: string): Ticket | undefined {
   return this.tickets.find(ticket => ticket.id === id);
   }
 
  getTickets(): any[] {
    return this.tickets;
  }

  updateTicket(ticket: Ticket) {
    const index = this.tickets.findIndex(t => t.id === ticket.id);
    if (index !== -1) {
      this.tickets[index] = ticket;
    }
  }
 
}
