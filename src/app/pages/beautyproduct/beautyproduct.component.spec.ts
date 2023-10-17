import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyproductComponent } from './beautyproduct.component';

describe('BeautyproductComponent', () => {
  let component: BeautyproductComponent;
  let fixture: ComponentFixture<BeautyproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeautyproductComponent]
    });
    fixture = TestBed.createComponent(BeautyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
