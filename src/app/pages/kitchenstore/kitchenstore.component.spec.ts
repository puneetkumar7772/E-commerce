import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenstoreComponent } from './kitchenstore.component';

describe('KitchenstoreComponent', () => {
  let component: KitchenstoreComponent;
  let fixture: ComponentFixture<KitchenstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenstoreComponent]
    });
    fixture = TestBed.createComponent(KitchenstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
