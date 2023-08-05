import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteManagementComponent } from './promote-management.component';

describe('PromoteManagementComponent', () => {
  let component: PromoteManagementComponent;
  let fixture: ComponentFixture<PromoteManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoteManagementComponent]
    });
    fixture = TestBed.createComponent(PromoteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
