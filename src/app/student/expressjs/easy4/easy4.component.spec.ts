import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Easy4Component } from './easy4.component';

describe('Easy4Component', () => {
  let component: Easy4Component;
  let fixture: ComponentFixture<Easy4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Easy4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Easy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
