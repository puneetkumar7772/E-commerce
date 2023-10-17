import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportskitComponent } from './sportskit.component';

describe('SportskitComponent', () => {
  let component: SportskitComponent;
  let fixture: ComponentFixture<SportskitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportskitComponent]
    });
    fixture = TestBed.createComponent(SportskitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
