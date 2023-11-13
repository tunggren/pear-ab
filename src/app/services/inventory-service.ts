import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = `${environment.apiUrl}/inventoryItems`;

  constructor(private http: HttpClient) {}

  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateInventory(item: { name: string; quantity: number }): Observable<void> {
    return this.http.post<void>(this.apiUrl, item);
  }

  addInventoryItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

}
