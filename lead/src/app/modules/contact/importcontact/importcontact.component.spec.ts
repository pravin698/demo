import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportcontactComponent } from './importcontact.component';

describe('ImportcontactComponent', () => {
  let component: ImportcontactComponent;
  let fixture: ComponentFixture<ImportcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
