import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  updateInitialBalanceTransactions(item: { Product: String, Quantity: Number, Type: String, Location: String }): Observable<void> {
    return this.http.put<void>(this.apiUrlInitialBalanceTransactions, item);
  }

  addInitialBalanceTransaction(item: { Product: String, Quantity: Number, Type: String, Location: String }): Observable<any> {
    return this.http.post(this.apiUrlInitialBalanceTransactions, item);
  }

  deleteInitialBalanceTransaction(id: string): Observable<any> {
    const url = `${this.apiUrlInitialBalanceTransactions}/${id}`;
    return this.http.delete<void>(url);
  }

}
