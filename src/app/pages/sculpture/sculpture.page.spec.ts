import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SculpturePage } from './sculpture.page';

describe('SculpturePage', () => {
  let component: SculpturePage;
  let fixture: ComponentFixture<SculpturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SculpturePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SculpturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
