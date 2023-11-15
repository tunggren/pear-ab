import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inventory-items-dialog',
  templateUrl: './inventory-items-dialog.component.html',
  styleUrls: ['./inventory-items-dialog.component.sass']
})
export class InventoryItemsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InventoryItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
