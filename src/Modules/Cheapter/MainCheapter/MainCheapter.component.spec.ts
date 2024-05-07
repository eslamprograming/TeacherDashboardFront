/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainCheapterComponent } from './MainCheapter.component';

describe('MainCheapterComponent', () => {
  let component: MainCheapterComponent;
  let fixture: ComponentFixture<MainCheapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCheapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCheapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
