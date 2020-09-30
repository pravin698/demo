import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactResultSummaryComponent } from './contact-result-summary.component';

describe('ContactResultSummaryComponent', () => {
  let component: ContactResultSummaryComponent;
  let fixture: ComponentFixture<ContactResultSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactResultSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactResultSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
