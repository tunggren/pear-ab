import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = 'http://localhost:3000/api/inventory';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateInventory(item: { name: string; quantity: number }): Observable<void> {
    return this.http.post<void>(this.apiUrl, item);
  }
}
