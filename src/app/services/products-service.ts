import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  private apiUrlProducts = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlProducts);
  }

  updateProducts(item: { Productnr: String; Price: Number, Name: String }): Observable<void> {
    return this.http.post<void>(this.apiUrlProducts, item);
  }

  addProduct(item: { Productnr: String; Price: Number, Name: String }): Observable<any> {
    return this.http.post(this.apiUrlProducts, item);
  }

}
