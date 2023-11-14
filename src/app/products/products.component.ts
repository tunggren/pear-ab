import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})
export class ProductsComponent implements OnInit {

  initialBalanceTransactionsData!: any[];

  constructor(private snackBar: MatSnackBar, private productsService: ProductsService) {}

  productsData!: any[];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.productsData = data;
        console.log('Retrieved products data:', data);
      },
      error: (error) => {
        console.error('Error retrieving products data:', error);
      }
    });  
  }

}
