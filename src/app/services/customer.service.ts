import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

import CustomerModel from '../models/customer.model';

let httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private baseUrl = 'http://localhost:3000/customers'

  constructor(
    private http: HttpClient
  ) {}

  getCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.baseUrl)
      .pipe(
        tap(customers => { return customers }),
        catchError(this.handleError('getCustomers', []))
      )
  }

  deleteCustomer(customer: CustomerModel | number): Observable<CustomerModel> {
    let id = typeof customer == 'number' ? customer : customer.id
    let url = `${this.baseUrl}/${id}`

    return this.http.delete<CustomerModel>(url, httpOptions)
      .pipe(
        tap(customer => console.log(`deleted customer id=${id}`)),
        catchError(this.handleError<CustomerModel>('deleteCustomer'))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    }
  }
}
