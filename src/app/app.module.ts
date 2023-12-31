import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';
import { DatedTransactionsComponent } from './dated-transactions/dated-transactions.component';
import { InitialBalanceTransactionsComponent } from './initial-balance-transactions/initial-balance-transactions.component';
import { ProductsComponent } from './products/products.component';
import { WarehousesComponent } from './warehouses/warehouses.component';
import { DatedTransactionsService } from './services/dated-transactions-service';
import { InitialBalanceTransactionsService } from './services/initial-balance-transactions';
import { InventoryItemsService } from './services/inventory-items-service';
import { ProductsService } from './services/products-service';
import { WarehousesService } from './services/warehouses-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DatedTransactionDialogComponent } from './dated-transactions/dated-transaction-dialog/dated-transaction-dialog.component';
import { InitialBalanceTransactionsDialogComponent } from './initial-balance-transactions/initial-balance-transactions-dialog/initial-balance-transactions-dialog.component';
import { InventoryItemsDialogComponent } from './inventory-items/inventory-items-dialog/inventory-items-dialog.component';
import { ProductsDialogComponent } from './products/products-dialog/products-dialog.component';
import { WarehousesDialogComponent } from './warehouses/warehouses-dialog/warehouses-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    InventoryItemsComponent,
    DatedTransactionsComponent,
    InitialBalanceTransactionsComponent,
    ProductsComponent,
    WarehousesComponent,
    DatedTransactionDialogComponent,
    InitialBalanceTransactionsDialogComponent,
    InventoryItemsDialogComponent,
    ProductsDialogComponent,
    WarehousesDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    DatedTransactionsService,
    InitialBalanceTransactionsService,
    InventoryItemsService,
    ProductsService,
    WarehousesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
