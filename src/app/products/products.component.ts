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

//Använder OnInit för att kunna hämta data från databasen och refresha den på komponenten varje gång man routas dit
  ngOnInit(): void {
    this.refreshData();
  }

  //.GET metod
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



  //.PUT metod
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

  //Öppnar en dialog-ruta där man kan lägga till en produkt genom att .POST-metoden körs
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

  //.POST metod
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

  //.DELETE metod
  deleteProduct(id: string): void {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.refreshData();
      this.openSnackBar('Produkten är nu borttagen!');
    });
  }

  //Ger användaren en notis
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
