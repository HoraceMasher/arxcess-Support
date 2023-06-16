import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from '../tickets.service';


@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css']
})
export class TicketsFormComponent implements OnInit{
   @Output() formClosed = new EventEmitter<any>();

  ticketForm: FormGroup;
  categories: any;
  subcategories: any;
  tertiarySubcategories: any;
  ticketSubmitted: boolean =false;
 

  constructor(private formBuilder: FormBuilder, private ticketsService: TicketsService) {
    this.ticketForm = this.formBuilder.group({
      category: ['', Validators.required],
      subcategory: ['', Validators.required],
      tertiarySubcategory: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
      
    });

    this.categories = ticketsService.getCategories();
  }
   
  ngOnInit(): void {
      this.ticketForm.valueChanges.subscribe(value =>{
        console.log(value)
      })
      this.getTicketFormChanges();
  }

  

  submitTicket(): void {
    if (this.ticketForm.valid) {
      const newTicket = {
        id: this.generateTicketId(),
        name: this.ticketForm.value.subject,
        dateCreated: new Date(),
        lastActivity: new Date(),
        status: 'Open',
        message: this.ticketForm.value.message
      };
      
      this.ticketsService.addTicket(newTicket);
      // this.ticketSubmit.emit(newTicket);
      this.ticketForm.reset();
      this.ticketSubmitted = true;
      this.formClosed.emit();    
    }
  }

  
 
//  resetForm(): void {
//   this.ticketForm.reset()
//   this.ticketSubmitted = false;
//  }

  generateTicketId(): string {
    const length = 9; // Specify the desired length of the ID
    let result = '#';
  
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
  
    return result;
  }

  
  getTicketFormChanges(): void {
    this.ticketForm.valueChanges.subscribe((val: any)=>{
      if(val.category ){
        const selectedCategory = this.categories.find((category: { id: number; }) => category.id === parseInt(val.category));
        if(selectedCategory) {
          console.log(selectedCategory)
          this.subcategories = selectedCategory.subcategories
        }
        const selectedSubcategory = selectedCategory.subcategories.find((subcategory: { id: number; }) => subcategory.id === parseInt(val.subcategory) );
        if (selectedSubcategory){
          console.log(selectedSubcategory)
          this.tertiarySubcategories = selectedSubcategory.tertiarySubcategories
        }
      }
      console.log(val)
    })
  }
}
