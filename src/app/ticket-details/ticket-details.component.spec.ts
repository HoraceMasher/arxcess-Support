import { ComponentFixture, TestBed } from '@angular/core/testing';

import {TicketDetailsComponent } from './ticket-details.component';

describe('TicketDetails', () => {
  let component:TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketDetailsComponent]
    });
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
