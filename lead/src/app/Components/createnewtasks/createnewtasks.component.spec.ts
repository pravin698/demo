import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewtasksComponent } from './createnewtasks.component';

describe('CreatenewtasksComponent', () => {
  let component: CreatenewtasksComponent;
  let fixture: ComponentFixture<CreatenewtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
