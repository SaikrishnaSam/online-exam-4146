import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium4Component } from './medium4.component';

describe('Medium4Component', () => {
  let component: Medium4Component;
  let fixture: ComponentFixture<Medium4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medium4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medium4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
