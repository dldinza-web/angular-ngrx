import { Injectable } from "@angular/core";
import { CustomerService } from '../services/customer.service';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';

import types from './action.types'
import * as customerActions from './customer.actions'

@Injectable({ providedIn: 'root' })
export class CustomerEffect {
  constructor(
    private customerSrv: CustomerService,
    private actions$: Actions
  ) {}

  @Effect()
  loadCustomers$: Observable<Action> = this.actions$
    .pipe(
      ofType<customerActions.LoadCustomersAction>(types.LOAD_CUSTOMERS),
      mergeMap(() => this.customerSrv.getCustomers()
        .pipe(
          map(customers => (new customerActions.LoadCustomersSuccessAction(customers)))
        ))
    )

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$
    .pipe(
      ofType<customerActions.DeleteCustomerAction>(types.DELETE_CUSTOMER),
      mergeMap((action) => this.customerSrv.deleteCustomer(action.payload)
        .pipe(
          map(customer => (new customerActions.DeleteCustomerSuccessAction(customer.id)))
        )
      )
    )
}
