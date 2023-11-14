import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
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

  updateDatedTransactions(item: { _id: string, Date: string, Product: string, Type: string, Location: string, Quantity: number }): Observable<void> {
    const url = `${this.apiUrlDatedTransactions}/${item._id}`;
    return this.http.put<void>(url, item);
  }
  
  addDatedTransaction(item: { Date: string, Product: string, Type: string, Location: string, Quantity: number }): Observable<void> {
    return this.http.post<void>(this.apiUrlDatedTransactions, item)
      .pipe(
        catchError((error) => {
          console.error('Error adding dated transaction:', error);
          throw error; 
        })
      );
  }
  
  deleteDatedTransaction(id: string): Observable<any> {
    const url = `${this.apiUrlDatedTransactions}/${id}`;
    return this.http.delete<void>(url);
  }

}
