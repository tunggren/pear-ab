import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryItemsService {
  
  private apiUrlInventoryItems = `${environment.apiUrl}/inventoryItems`;

  constructor(private http: HttpClient) {}

  getInventoryItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlInventoryItems);
  }

  updateInventoryItems(item: { Product: String; Balance: Number, Warehouse: String }): Observable<void> {
    return this.http.put<void>(this.apiUrlInventoryItems, item);
  }

  addInventoryItem(item: { Product: String; Balance: Number, Warehouse: String }): Observable<any> {
    return this.http.post(this.apiUrlInventoryItems, item);
  }

  deleteInventoryItem(id: string): Observable<any> {
    const url = `${this.apiUrlInventoryItems}/${id}`;
    return this.http.delete(url);
  }
}
