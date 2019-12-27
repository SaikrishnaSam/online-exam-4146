import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium3Component } from './medium3.component';

describe('Medium3Component', () => {
  let component: Medium3Component;
  let fixture: ComponentFixture<Medium3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medium3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medium3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
