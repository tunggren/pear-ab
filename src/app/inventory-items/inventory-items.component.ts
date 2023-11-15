import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InventoryItemsDialogComponent } from './inventory-items-dialog/inventory-items-dialog.component';
import { InventoryItemsService } from '../services/inventory-items-service';

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.sass'],
})

export class InventoryItemsComponent implements OnInit {
  
  inventoryItemsData: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private inventoryItemsService: InventoryItemsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.inventoryItemsService.getInventoryItems().subscribe({
      next: (data) => {
        this.inventoryItemsData = data;
        console.log('Retrieved inventory-items data:', data);
      },
      error: (error) => {
        console.error('Error retrieving inventory-items data:', error);
      },
    });
  }

  updateInventoryItem(item: {
    _id: string;
    Product: string;
    Balance: number;
    Warehouse: string;
  }): void {
    this.inventoryItemsService
    .updateInventoryItems(item)
    .subscribe(() => {
      this.refreshData();
      this.openSnackBar('Lagersaldot är nu uppdaterat!');
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(InventoryItemsDialogComponent, {
      width: '400px',
      data: { Product: '', Balance: null, Warehouse: ''},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addInventoryItem(result);
      }
    });
  }

  addInventoryItem(item: {
    Product: string;
    Balance: number;
    Warehouse: string;
  }): void {
    this.inventoryItemsService.addInventoryItem(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Lagersaldot är nu tillagt!');
    });
  }

  deleteInventoryItem(id: string): void {
    this.inventoryItemsService.deleteInventoryItem(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Lagersaldot är borttaget!');
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
