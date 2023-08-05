import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagnumberComponent } from './flagnumber.component';

describe('FlagnumberComponent', () => {
  let component: FlagnumberComponent;
  let fixture: ComponentFixture<FlagnumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlagnumberComponent]
    });
    fixture = TestBed.createComponent(FlagnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
