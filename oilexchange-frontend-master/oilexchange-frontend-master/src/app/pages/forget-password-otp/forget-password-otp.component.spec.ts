import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordOtpComponent } from './forget-password-otp.component';

describe('ForgetPasswordOtpComponent', () => {
  let component: ForgetPasswordOtpComponent;
  let fixture: ComponentFixture<ForgetPasswordOtpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPasswordOtpComponent]
    });
    fixture = TestBed.createComponent(ForgetPasswordOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
