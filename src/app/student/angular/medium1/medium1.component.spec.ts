import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medium1Component } from './medium1.component';

describe('Medium1Component', () => {
  let component: Medium1Component;
  let fixture: ComponentFixture<Medium1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medium1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medium1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
