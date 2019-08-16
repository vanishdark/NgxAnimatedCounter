import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAnimatedCounterComponent } from './ngx-animated-counter.component';

describe('NgxAnimatedCounterComponent', () => {
  let component: NgxAnimatedCounterComponent;
  let fixture: ComponentFixture<NgxAnimatedCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAnimatedCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAnimatedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
