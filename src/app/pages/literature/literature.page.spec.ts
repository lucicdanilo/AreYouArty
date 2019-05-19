import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturePage } from './literature.page';

describe('LiteraturePage', () => {
  let component: LiteraturePage;
  let fixture: ComponentFixture<LiteraturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiteraturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
