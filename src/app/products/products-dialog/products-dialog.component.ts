import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

//Denna komponent används för att lägga till fler documents i databasen i en viss collection(i detta fall products-collectionen)

@Component({
  selector: 'app-products-dialog',
  templateUrl: './products-dialog.component.html',
  styleUrls: ['./products-dialog.component.sass']
})
export class ProductsDialogComponent {

  //Injectar mat_dialog_data för att ta emot och skicka vidare data från dialogen
  constructor(
    public dialogRef: MatDialogRef<ProductsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
