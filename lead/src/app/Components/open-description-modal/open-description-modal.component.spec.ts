import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDescriptionModalComponent } from './open-description-modal.component';

describe('OpenDescriptionModalComponent', () => {
  let component: OpenDescriptionModalComponent;
  let fixture: ComponentFixture<OpenDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
