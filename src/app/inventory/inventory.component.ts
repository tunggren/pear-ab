import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory-service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass'],
})

export class InventoryComponent implements OnInit {
  inventory!: any[];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.inventoryService.getInventory().subscribe((data) => {
      this.inventory = data;
    });
  }

  updateInventory(name: string, quantity: number): void {
    this.inventoryService.updateInventory({ name, quantity }).subscribe(() => {
      this.loadInventory();
    });
  }
}
