import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenclothesComponent } from './womenclothes.component';

describe('WomenclothesComponent', () => {
  let component: WomenclothesComponent;
  let fixture: ComponentFixture<WomenclothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenclothesComponent]
    });
    fixture = TestBed.createComponent(WomenclothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
