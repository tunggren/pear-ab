import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
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

  updateInventoryItems(item: { _id: string, Product: String; Balance: Number, Location: String }): Observable<void> {
    const url = `${this.apiUrlInventoryItems}/${item._id}`;
    return this.http.put<void>(url, item);
  }

  addInventoryItem(item: { Product: String; Balance: Number, Location: String }): Observable<any> {
    return this.http.post<void>(this.apiUrlInventoryItems, item)
    .pipe(
      catchError((error) => {
        console.error('Error adding dated transaction:', error);
        throw error; 
      })
    );
  }

  deleteInventoryItem(id: string): Observable<any> {
    const url = `${this.apiUrlInventoryItems}/${id}`;
    return this.http.delete<void>(url);
  }
}
