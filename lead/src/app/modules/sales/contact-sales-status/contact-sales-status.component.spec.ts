import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSalesStatusComponent } from './contact-sales-status.component';

describe('ContactSalesStatusComponent', () => {
  let component: ContactSalesStatusComponent;
  let fixture: ComponentFixture<ContactSalesStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSalesStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSalesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
