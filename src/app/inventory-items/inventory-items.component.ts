import { Component, OnInit } from '@angular/core';

import { DatedTransactionsService } from '../services/dated-transactions-service';
import { InitialBalanceTransactionsService } from '../services/initial-balance-transactions';
import { InventoryItemsService } from '../services/inventory-items-service';
import { ProductsService } from '../services/products-service';
import { WarehousesService } from '../services/warehouses-service';

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.sass'],
})

export class InventoryItemsComponent implements OnInit {

  datedTransactionsData!: any[];
  initialBalanceTransactionsData!: any[];
  inventoryItemsData!: any[];
  productsData!: any[];
  warehousesData!: any[];


  constructor(
    private datedTransactionsService: DatedTransactionsService,
    private initialBalanceTransactionsService: InitialBalanceTransactionsService,
    private inventoryItemsService: InventoryItemsService,
    private productsService: ProductsService,
    private warehousesService: WarehousesService,

    ) {}

  ngOnInit(): void {

    this.datedTransactionsService.getDatedTransactions().subscribe({
      next: (data) => {
        this.datedTransactionsData = data;
        console.log('Retrieved dated transactions data:', data);
      },
      error: (error) => {
        console.error('Error retrieving dated transactions data:', error);
      }
    });  

    this.initialBalanceTransactionsService.getInitialBalanceTransactions().subscribe({
      next: (data) => {
        this.initialBalanceTransactionsData = data;
        console.log('Retrieved initial balance transactions data:', data);
      },
      error: (error) => {
        console.error('Error retrieving initial balance transactions data:', error);
      }
    });  

    this.inventoryItemsService.getInventoryItems().subscribe({
      next: (data) => {
        this.inventoryItemsData = data;
        console.log('Retrieved inventory-items data:', data);
      },
      error: (error) => {
        console.error('Error retrieving inventory-items data:', error);
      }
    });  

    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.productsData = data;
        console.log('Retrieved products data:', data);
      },
      error: (error) => {
        console.error('Error retrieving products data:', error);
      }
    });  

    this.warehousesService.getWarehouses().subscribe({
      next: (data) => {
        this.warehousesData = data;
        console.log('Retrieved warehouses data:', data);
      },
      error: (error) => {
        console.error('Error retrieving warehouses data:', error);
      }
    });  
  
  }
}
