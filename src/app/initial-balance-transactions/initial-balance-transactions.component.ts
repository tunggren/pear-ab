import { Component, OnInit } from '@angular/core';

import { InitialBalanceTransactionsService } from '../services/initial-balance-transactions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-initial-balance-transactions',
  templateUrl: './initial-balance-transactions.component.html',
  styleUrls: ['./initial-balance-transactions.component.sass'],
})
export class InitialBalanceTransactionsComponent implements OnInit {
  initialBalanceTransactionsData!: any[];

  constructor(private snackBar: MatSnackBar, private initialBalanceTransactionsService: InitialBalanceTransactionsService) {}

  ngOnInit(): void {
    this.initialBalanceTransactionsService.getInitialBalanceTransactions().subscribe({
      next: (data) => {
        this.initialBalanceTransactionsData = data;
        console.log('Retrieved initial balance transactions data:', data);
      },
      error: (error) => {
        console.error('Error retrieving initial balance transactions data:', error);
      }
    });  
  }

  updateInitialBalanceTransaction(item: { _id: string, Product: string, Quantity: number, Type: string, Location: string }): void {
    this.initialBalanceTransactionsService.updateInitialBalanceTransactions(item)
      .subscribe(() => {
        this.initialBalanceTransactionsService.getInitialBalanceTransactions();
      });
  }

  addInitialBalanceTransaction(item: { Product: string, Quantity: number, Type: string, Location: string }): void {
    this.initialBalanceTransactionsService.addInitialBalanceTransaction(item)
      .subscribe(() => {
        this.initialBalanceTransactionsService.getInitialBalanceTransactions();      
    });
  }

  deleteInitialBalanceTransaction(id: string): void {
    this.initialBalanceTransactionsService.deleteInitialBalanceTransaction(id)
      .subscribe(() => {
        this.initialBalanceTransactionsService.getInitialBalanceTransactions();      
    });
  }

}
