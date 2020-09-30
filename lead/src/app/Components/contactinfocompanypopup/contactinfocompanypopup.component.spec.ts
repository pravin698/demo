import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfocompanypopupComponent } from './contactinfocompanypopup.component';

describe('ContactinfocompanypopupComponent', () => {
  let component: ContactinfocompanypopupComponent;
  let fixture: ComponentFixture<ContactinfocompanypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfocompanypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfocompanypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
