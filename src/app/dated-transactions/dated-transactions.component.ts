import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatedTransactionDialogComponent } from './dated-transaction-dialog/dated-transaction-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatedTransactionsService } from '../services/dated-transactions-service';

@Component({
  selector: 'app-dated-transactions',
  templateUrl: './dated-transactions.component.html',
  styleUrls: ['./dated-transactions.component.sass'],
})

export class DatedTransactionsComponent implements OnInit {

  datedTransactionsData: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private datedTransactionsService: DatedTransactionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.datedTransactionsService.getDatedTransactions().subscribe({
      next: (data) => {
        this.datedTransactionsData = data;
        console.log('Retrieved dated transactions data:', data);
      },
      error: (error) => {
        console.error('Error retrieving dated transactions data:', error);
      },
    });
  }

  updateDatedTransaction(item: {
    _id: string;
    Date: string;
    Product: string;
    Type: string;
    Location: string;
    Quantity: number;
  }): void {
    this.datedTransactionsService
      .updateDatedTransactions(item)
      .subscribe(() => {
        this.refreshData();
        this.openSnackBar('Transaktion med datum uppdaterad!');
      });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(DatedTransactionDialogComponent, {
      width: '400px',
      data: { Date: '', Product: '', Type: '', Location: '', Quantity: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addDatedTransaction(result);
      }
    });
  }

  addDatedTransaction(item: {
    Date: string;
    Product: string;
    Location: string;
    Quantity: number;
    Type: string;
  }): void {
    this.datedTransactionsService.addDatedTransaction(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Transaktionen är nu tillagd!');
    });
  }

  deleteDatedTransaction(id: string): void {
    this.datedTransactionsService.deleteDatedTransaction(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Transaktion med datum är nu borttagen!');
    });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
