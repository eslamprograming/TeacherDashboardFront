/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlogChatComponent } from './BlogChat.component';

describe('BlogChatComponent', () => {
  let component: BlogChatComponent;
  let fixture: ComponentFixture<BlogChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
