import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsimporthistoryComponent } from './contactsimporthistory.component';

describe('ContactsimporthistoryComponent', () => {
  let component: ContactsimporthistoryComponent;
  let fixture: ComponentFixture<ContactsimporthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsimporthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsimporthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
