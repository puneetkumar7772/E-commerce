import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsclothesComponent } from './kidsclothes.component';

describe('KidsclothesComponent', () => {
  let component: KidsclothesComponent;
  let fixture: ComponentFixture<KidsclothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsclothesComponent]
    });
    fixture = TestBed.createComponent(KidsclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
