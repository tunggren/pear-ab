import { Component, OnInit } from '@angular/core';

import { InventoryItemsService } from '../services/inventory-items-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.sass'],
})

export class InventoryItemsComponent implements OnInit {

  inventoryItemsData!: any[];


  constructor(private snackBar: MatSnackBar, private inventoryItemsService: InventoryItemsService) {}

  ngOnInit(): void {

    this.inventoryItemsService.getInventoryItems().subscribe({
      next: (data) => {
        this.inventoryItemsData = data;
        console.log('Retrieved inventory-items data:', data);
      },
      error: (error) => {
        console.error('Error retrieving inventory-items data:', error);
      }
    });   
  
  }
}
