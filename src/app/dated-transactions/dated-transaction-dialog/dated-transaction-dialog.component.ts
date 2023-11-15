import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dated-transaction-dialog',
  templateUrl: './dated-transaction-dialog.component.html',
  styleUrls: ['./dated-transaction-dialog.component.sass'],
})
export class DatedTransactionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DatedTransactionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
