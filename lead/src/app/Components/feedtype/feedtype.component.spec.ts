import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedtypeComponent } from './feedtype.component';

describe('FeedtypeComponent', () => {
  let component: FeedtypeComponent;
  let fixture: ComponentFixture<FeedtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
