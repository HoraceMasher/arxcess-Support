import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketsService } from '../tickets.service';


@Component({
  selector: 'app-tickets-form',
  templateUrl: './tickets-form.component.html',
  styleUrls: ['./tickets-form.component.css']
})
export class TicketsFormComponent implements OnInit{
  // @Output() ticketSubmit = new EventEmitter<any>();

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
    // [
    //   {
    //     id: 1,
    //     name: 'Category 1',
    //     subcategories: [
    //       {
    //         id: 1,
    //         name: 'Subcategory 1',
    //         tertiarySubcategories: [
    //           { id: 1, name: 'Tertiary Subcategory 1' },
    //           { id: 2, name: 'Tertiary Subcategory 2' }
    //         ]
    //       },
    //       {
    //         id: 2,
    //         name: 'Subcategory 2',
    //         tertiarySubcategories: [
    //           { id: 3, name: 'Tertiary Subcategory 3' },
    //           { id: 4, name: 'Tertiary Subcategory 4' }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     id: 3,
    //     name: 'Category 2',
    //     subcategories: [
    //       {
    //         id: 3,
    //         name: 'Subcategory 3',
    //         tertiarySubcategories: [
    //           { id: 5, name: 'Tertiary Subcategory 5' },
    //           { id: 6, name: 'Tertiary Subcategory 6' }
    //         ]
    //       }
    //     ]
    //   }
    // ];
  
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
    }
  }
 
 

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
