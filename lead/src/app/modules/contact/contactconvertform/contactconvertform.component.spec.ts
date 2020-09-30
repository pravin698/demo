import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactconvertformComponent } from './contactconvertform.component';

describe('ContactconvertformComponent', () => {
  let component: ContactconvertformComponent;
  let fixture: ComponentFixture<ContactconvertformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactconvertformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactconvertformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
