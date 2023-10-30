import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlluserslistComponent } from './alluserslist.component';

describe('AlluserslistComponent', () => {
  let component: AlluserslistComponent;
  let fixture: ComponentFixture<AlluserslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlluserslistComponent]
    });
    fixture = TestBed.createComponent(AlluserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
