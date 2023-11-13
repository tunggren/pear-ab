import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemsComponent } from './inventory-items.component';

describe('InventoryItemsComponent', () => {
  let component: InventoryItemsComponent;
  let fixture: ComponentFixture<InventoryItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryItemsComponent]
    });
    fixture = TestBed.createComponent(InventoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
