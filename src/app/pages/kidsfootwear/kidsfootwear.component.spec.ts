import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsfootwearComponent } from './kidsfootwear.component';

describe('KidsfootwearComponent', () => {
  let component: KidsfootwearComponent;
  let fixture: ComponentFixture<KidsfootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsfootwearComponent]
    });
    fixture = TestBed.createComponent(KidsfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
