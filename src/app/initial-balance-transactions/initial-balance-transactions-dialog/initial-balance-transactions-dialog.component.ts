import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-initial-balance-transactions-dialog',
  templateUrl: './initial-balance-transactions-dialog.component.html',
  styleUrls: ['./initial-balance-transactions-dialog.component.sass'],
})
export class InitialBalanceTransactionsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InitialBalanceTransactionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
