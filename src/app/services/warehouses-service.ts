import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
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

  updateWarehouses(item: { _id: string, Location: String, Warehousenr: String }): Observable<void> {
    const url = `${this.apiUrlWarehouses}/${item._id}`;
    return this.http.put<void>(url, item);  
  }

  addWarehouse(item: { Location: String, Warehousenr: String }): Observable<any> {
    return this.http.post<void>(this.apiUrlWarehouses, item)
    .pipe(
      catchError((error) => {
        console.error('Error adding dated transaction:', error);
        throw error; 
      })
    );
  }

  deleteWarehouse(id: string): Observable<any> {
    const url = `${this.apiUrlWarehouses}/${id}`;
    return this.http.delete<void>(url);
  }

}
