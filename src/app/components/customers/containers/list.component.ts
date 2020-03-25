import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CustomerActions from '../../../store/customer.actions'
import CustomerModel from 'src/app/models/customer.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  customer$: Observable<any>
  customers: CustomerModel[] | number

  constructor(
    private store: Store<AppState>
  ) {
    this.customer$ = this.store.select('applicationState')
  }

  ngOnInit(): void {
    this.loadCustomers()
    this.customer$.subscribe((state: AppState) => this.customers = state.customers)
  }

  loadCustomers() {
    this.store.dispatch(new CustomerActions.LoadCustomersAction(null))
  }

  deleteCustomer(customer: CustomerModel) {
    this.store.dispatch(new CustomerActions.DeleteCustomerAction(customer.id))
  }

}
