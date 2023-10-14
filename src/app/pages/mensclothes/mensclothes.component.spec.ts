import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensclothesComponent } from './mensclothes.component';

describe('MensclothesComponent', () => {
  let component: MensclothesComponent;
  let fixture: ComponentFixture<MensclothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensclothesComponent]
    });
    fixture = TestBed.createComponent(MensclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
