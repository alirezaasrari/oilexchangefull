import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizeManagementComponent } from './analize-management.component';

describe('AnalizeManagementComponent', () => {
  let component: AnalizeManagementComponent;
  let fixture: ComponentFixture<AnalizeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalizeManagementComponent]
    });
    fixture = TestBed.createComponent(AnalizeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
