import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaqueComponent } from './plaque.component';

describe('PlaqueComponent', () => {
  let component: PlaqueComponent;
  let fixture: ComponentFixture<PlaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaqueComponent]
    });
    fixture = TestBed.createComponent(PlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
