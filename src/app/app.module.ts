import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsFormComponent } from './tickets-form/tickets-form.component';
import { TicketsService } from './tickets.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsFormComponent,
    TicketsListComponent,
    TicketDetailsComponent
  
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
