import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsDialogComponent } from './products-dialog/products-dialog.component';
import { ProductsService } from '../services/products-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
})

export class ProductsComponent implements OnInit {
  
  productsData: any[] = [];

  constructor(
    private snackBar: MatSnackBar,
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.productsData = data;
        console.log('Retrieved products data:', data);
      },
      error: (error) => {
        console.error('Error retrieving products data:', error);
      },
    });
  }

  updateProduct(item: {
    _id: string;
    Productnr: string;
    Name: string;
    Price: number;
  }): void {
    this.productsService.updateProducts(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Produkten är nu uppdaterad!');
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ProductsDialogComponent, {
      width: '400px',
      data: { Productnr: '', Name: '', Price: null },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addProduct(result);
      }
    });
  }

  addProduct(item: {
    Productnr: string;
    Name: string;
    Price: number;
  }): void {
    this.productsService.addProduct(item).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Produkten är tillagd!');
    });
  }

  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Produkten är nu borttagen!');
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
