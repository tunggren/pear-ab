import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatedTransactionsService {
  
  private apiUrlDatedTransactions = `${environment.apiUrl}/datedTransactions`;

  constructor(private http: HttpClient) {}

  getDatedTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlDatedTransactions);
  }

  updateDatedTransactions(item: { Date: Date, Product: String, Type: String, Location: String, Quantity: Number }): Observable<void> {
    return this.http.put<void>(this.apiUrlDatedTransactions, item);
  }

  addDatedTransaction(item: { Date: Date, Product: String, Type: String, Location: String, Quantity: Number }): Observable<any> {
    return this.http.post(this.apiUrlDatedTransactions, item);
  }

  deleteDatedTransaction(id: string): Observable<any> {
    const url = `${this.apiUrlDatedTransactions}/${id}`;
    return this.http.delete(url);
  }

}
