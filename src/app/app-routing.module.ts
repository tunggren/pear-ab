import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemsComponent } from './inventory-items/inventory-items.component';

const routes: Routes = [
  { path: 'inventoryitems', component: InventoryItemsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
