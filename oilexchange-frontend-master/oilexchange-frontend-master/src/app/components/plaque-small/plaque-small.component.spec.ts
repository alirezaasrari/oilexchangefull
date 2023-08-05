import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaqueSmallComponent } from './plaque-small.component';

describe('PlaqueSmallComponent', () => {
  let component: PlaqueSmallComponent;
  let fixture: ComponentFixture<PlaqueSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaqueSmallComponent]
    });
    fixture = TestBed.createComponent(PlaqueSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
