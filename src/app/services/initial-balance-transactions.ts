import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InitialBalanceTransactionsService {
  
  private apiUrlInitialBalanceTransactions = `${environment.apiUrl}/initialBalanceTransactions`;

  constructor(private http: HttpClient) {}

  getInitialBalanceTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlInitialBalanceTransactions);
  }

  updateInitialBalanceTransactions(item: { _id: string, Product: String, Quantity: Number, Type: String, Location: String }): Observable<void> {
    const url = `${this.apiUrlInitialBalanceTransactions}/${item._id}`;
    return this.http.put<void>(url, item);
  }

  addInitialBalanceTransaction(item: { Product: String, Quantity: Number, Type: String, Location: String }): Observable<any> {
    return this.http.post<void>(this.apiUrlInitialBalanceTransactions, item)
    .pipe(catchError((error) => {
      console.error('Error adding dated transaction:', error);
      throw error; 
    })
    );
  }

  deleteInitialBalanceTransaction(id: string): Observable<any> {
    const url = `${this.apiUrlInitialBalanceTransactions}/${id}`;
    return this.http.delete<void>(url);
  }

}
