import { Component, OnInit } from '@angular/core';

import { WarehousesService } from '../services/warehouses-service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.sass']
})
export class WarehousesComponent implements OnInit {
  
  warehousesData!: any[];

  constructor(private warehousesService: WarehousesService) {}

  ngOnInit(): void {

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
}
