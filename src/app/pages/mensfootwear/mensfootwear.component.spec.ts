import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensfootwearComponent } from './mensfootwear.component';

describe('MensfootwearComponent', () => {
  let component: MensfootwearComponent;
  let fixture: ComponentFixture<MensfootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensfootwearComponent]
    });
    fixture = TestBed.createComponent(MensfootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
