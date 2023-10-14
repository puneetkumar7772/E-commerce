import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenfootwearComponent } from './womenfootwear.component';

describe('WomenfootwearComponent', () => {
  let component: WomenfootwearComponent;
  let fixture: ComponentFixture<WomenfootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenfootwearComponent]
    });
    fixture = TestBed.createComponent(WomenfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
