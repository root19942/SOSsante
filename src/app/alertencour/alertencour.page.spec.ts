import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertencourPage } from './alertencour.page';

describe('AlertencourPage', () => {
  let component: AlertencourPage;
  let fixture: ComponentFixture<AlertencourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertencourPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertencourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
