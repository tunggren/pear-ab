import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InitialBalanceTransactionsDialogComponent } from './initial-balance-transactions-dialog/initial-balance-transactions-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InitialBalanceTransactionsService } from '../services/initial-balance-transactions';

@Component({
  selector: 'app-initial-balance-transactions',
  templateUrl: './initial-balance-transactions.component.html',
  styleUrls: ['./initial-balance-transactions.component.sass'],
})

export class InitialBalanceTransactionsComponent implements OnInit {
  
  initialBalanceTransactionsData: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private initialBalanceTransactionsService: InitialBalanceTransactionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.initialBalanceTransactionsService.getInitialBalanceTransactions().subscribe({
      next: (data) => {
        this.initialBalanceTransactionsData = data;
        console.log('Retrieved initial balance transactions data:', data);
      },
      error: (error) => {
        console.error('Error retrieving initial balance transactions data:', error);
      },
    });
  }

  updateInitialBalanceTransaction(item: {
    _id: string;
    Product: string;
    Type: string;
    Location: string;
    Quantity: number;
  }): void {
    this.initialBalanceTransactionsService
      .updateInitialBalanceTransactions(item)
      .subscribe(() => {
        this.refreshData();
        this.openSnackBar('Transaktionen är uppdaterad!');
      });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(InitialBalanceTransactionsDialogComponent, {
      width: '400px',
      data: { Product: '', Type: '', Location: '', Quantity: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addInitialBalanceTransaction(result);
      }
    });
  }

  addInitialBalanceTransaction(item: {
    Product: string;
    Location: string;
    Quantity: number;
    Type: string;
  }): void {
    this.initialBalanceTransactionsService.addInitialBalanceTransaction(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Transaktionen är nu tillagd!');
    });
  }

  deleteInitialBalanceTransaction(id: string): void {
    this.initialBalanceTransactionsService.deleteInitialBalanceTransaction(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Transaktionen är borttagen!');
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
