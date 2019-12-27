import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hard4Component } from './hard4.component';

describe('Hard4Component', () => {
  let component: Hard4Component;
  let fixture: ComponentFixture<Hard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
