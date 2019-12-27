import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hard1Component } from './hard1.component';

describe('Hard1Component', () => {
  let component: Hard1Component;
  let fixture: ComponentFixture<Hard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
