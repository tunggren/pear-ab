import { Component, OnInit } from '@angular/core';

import { DatedTransactionsService } from '../services/dated-transactions-service';

@Component({
  selector: 'app-dated-transactions',
  templateUrl: './dated-transactions.component.html',
  styleUrls: ['./dated-transactions.component.sass'],
})
export class DatedTransactionsComponent implements OnInit {
  datedTransactionsData!: any[];

  constructor(private datedTransactionsService: DatedTransactionsService) {}

  ngOnInit(): void {
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
}
