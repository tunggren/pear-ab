import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousesDialogComponent } from './warehouses-dialog.component';

describe('WarehousesDialogComponent', () => {
  let component: WarehousesDialogComponent;
  let fixture: ComponentFixture<WarehousesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarehousesDialogComponent]
    });
    fixture = TestBed.createComponent(WarehousesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
