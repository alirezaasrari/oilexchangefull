import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPagePromoteComponent } from './next-page-promote.component';

describe('NextPagePromoteComponent', () => {
  let component: NextPagePromoteComponent;
  let fixture: ComponentFixture<NextPagePromoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextPagePromoteComponent]
    });
    fixture = TestBed.createComponent(NextPagePromoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
