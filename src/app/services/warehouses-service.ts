import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WarehousesService {
  
  private apiUrlWarehouses = `${environment.apiUrl}/warehouses`;

  constructor(private http: HttpClient) {}

  getWarehouses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlWarehouses);
  }

  updateWarehouses(item: { Location: String, Warehousenr: String }): Observable<void> {
    return this.http.put<void>(this.apiUrlWarehouses, item);
  }

  addWarehouse(item: { Location: String, Warehousenr: String }): Observable<any> {
    return this.http.post(this.apiUrlWarehouses, item);
  }

  deleteWarehouse(id: string): Observable<any> {
    const url = `${this.apiUrlWarehouses}/${id}`;
    return this.http.delete(url);
  }

}
