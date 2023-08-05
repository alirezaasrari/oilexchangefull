import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPageRegisterComponent } from './next-page-register.component';

describe('NextPageRegisterComponent', () => {
  let component: NextPageRegisterComponent;
  let fixture: ComponentFixture<NextPageRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextPageRegisterComponent]
    });
    fixture = TestBed.createComponent(NextPageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
