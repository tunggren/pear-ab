import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatedTransactionsComponent } from './dated-transactions/dated-transactions.component';
import { InitialBalanceTransactionsComponent } from './initial-balance-transactions/initial-balance-transactions.component';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';
import { ProductsComponent } from './products/products.component';
import { WarehousesComponent } from './warehouses/warehouses.component';

const routes: Routes = [
  { path: 'datedtransactions', component: DatedTransactionsComponent },
  { path: 'initialbalancetransactions', component: InitialBalanceTransactionsComponent },
  { path: 'inventoryitems', component: InventoryItemsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'warehouses', component: WarehousesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
