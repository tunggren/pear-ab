import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
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

  updateProducts(item: { _id: string, Productnr: String; Price: Number, Product: String }): Observable<void> {
    const url = `${this.apiUrlProducts}/${item._id}`;
    return this.http.put<void>(url, item);  
  }

  addProduct(item: { Productnr: String; Price: Number, Product: String }): Observable<any> {
    return this.http.post<void>(this.apiUrlProducts, item)
    .pipe(
      catchError((error) => {
        console.error('Error adding dated transaction:', error);
        throw error; 
      })
    );
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.apiUrlProducts}/${id}`;
    return this.http.delete<void>(url);
  }

}

//Använder services med samma namn som alla collections i databasen, använder dessa för att kunna "prata" med back-end