import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-warehouses-dialog',
  templateUrl: './warehouses-dialog.component.html',
  styleUrls: ['./warehouses-dialog.component.sass']
})
export class WarehousesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WarehousesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
