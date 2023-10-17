import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomfurnitureComponent } from './roomfurniture.component';

describe('RoomfurnitureComponent', () => {
  let component: RoomfurnitureComponent;
  let fixture: ComponentFixture<RoomfurnitureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomfurnitureComponent]
    });
    fixture = TestBed.createComponent(RoomfurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
