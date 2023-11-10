import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InventoryManager } from './inventory-manager';

@Component({
  selector: 'app-inventory-manager',
  templateUrl: './inventory-manager.component.html',
  styleUrls: ['./inventory-manager.component.sass']
})
export class InventoryManagerComponent {
  @Input() inventoryManager: InventoryManager | null = null;
  @Output() edit = new EventEmitter<InventoryManager>();
}
