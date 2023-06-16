import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketsFormComponent } from './tickets-form/tickets-form.component';

const routes: Routes = [
 
  { path: 'tickets-list-component', component: TicketsListComponent },
  { path: 'ticket-details-component', component: TicketDetailsComponent },
  {path: 'tickets-form-component', component: TicketsFormComponent},
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
];
  
//  const routerConfig =[
//    provideRouter(routes, withComponentInputBinnding())
//  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
