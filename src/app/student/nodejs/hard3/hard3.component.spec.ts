import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hard3Component } from './hard3.component';

describe('Hard3Component', () => {
  let component: Hard3Component;
  let fixture: ComponentFixture<Hard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
