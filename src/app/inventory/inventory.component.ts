import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory-service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass'],
})

export class InventoryComponent implements OnInit {
  inventoryData!: any[];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe({
      next: (data) => {
        this.inventoryData = data;
        console.log('Retrieved data:', data);
      },
      error: (error) => {
        console.error('Error retrieving data:', error);
      }
    });    
  }
}
