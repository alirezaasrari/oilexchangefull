import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPagePlaqueComponent } from './next-page-plaque.component';

describe('NextPagePlaqueComponent', () => {
  let component: NextPagePlaqueComponent;
  let fixture: ComponentFixture<NextPagePlaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextPagePlaqueComponent]
    });
    fixture = TestBed.createComponent(NextPagePlaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
