import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Easy2Component } from './easy2.component';

describe('Easy2Component', () => {
  let component: Easy2Component;
  let fixture: ComponentFixture<Easy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Easy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Easy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
