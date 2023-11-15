import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemsDialogComponent } from './inventory-items-dialog.component';

describe('InventoryItemsDialogComponent', () => {
  let component: InventoryItemsDialogComponent;
  let fixture: ComponentFixture<InventoryItemsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryItemsDialogComponent]
    });
    fixture = TestBed.createComponent(InventoryItemsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
