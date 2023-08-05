import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetSelectorComponent } from './alphabet-selector.component';

describe('AlphabetSelectorComponent', () => {
  let component: AlphabetSelectorComponent;
  let fixture: ComponentFixture<AlphabetSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlphabetSelectorComponent]
    });
    fixture = TestBed.createComponent(AlphabetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
