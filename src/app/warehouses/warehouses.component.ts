import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WarehousesDialogComponent } from './warehouses-dialog/warehouses-dialog.component';
import { WarehousesService } from '../services/warehouses-service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.sass']
})

export class WarehousesComponent implements OnInit {
  
  warehousesData: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private warehousesService: WarehousesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
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

  updateWarehouse(item: {
    _id: string;
    Location: string;
    Warehousenr: string;
  }): void {
    this.warehousesService.updateWarehouses(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Färdigvarulagret är nu uppdaterat!');
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(WarehousesDialogComponent, {
      width: '400px',
      data: { Location: '', Warehousenr: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addWarehouse(result);
      }
    });
  }

  addWarehouse(item: {
    Location: string;
    Warehousenr: string;
  }): void {
    this.warehousesService.addWarehouse(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Färdigvarulagret är nu tillagt!');
    });
  }

  deleteWarehouse(id: string): void {
    this.warehousesService.deleteWarehouse(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Färdigvarulagret är borttaget!');
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
