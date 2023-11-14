import { Component, OnInit } from '@angular/core';

import { InitialBalanceTransactionsService } from '../services/initial-balance-transactions';

@Component({
  selector: 'app-initial-balance-transactions',
  templateUrl: './initial-balance-transactions.component.html',
  styleUrls: ['./initial-balance-transactions.component.sass'],
})
export class InitialBalanceTransactionsComponent implements OnInit {
  initialBalanceTransactionsData!: any[];

  constructor(private initialBalanceTransactionsService: InitialBalanceTransactionsService) {}

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
}
