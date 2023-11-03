import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsellerlistComponent } from './allsellerlist.component';

describe('AllsellerlistComponent', () => {
  let component: AllsellerlistComponent;
  let fixture: ComponentFixture<AllsellerlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllsellerlistComponent]
    });
    fixture = TestBed.createComponent(AllsellerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
