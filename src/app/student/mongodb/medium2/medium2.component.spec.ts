import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium2Component } from './medium2.component';

describe('Medium2Component', () => {
  let component: Medium2Component;
  let fixture: ComponentFixture<Medium2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medium2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medium2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
