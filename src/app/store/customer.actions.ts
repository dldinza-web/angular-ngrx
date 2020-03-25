import { Action } from '@ngrx/store'
import types from './action.types'
import CustomerModel from '../models/customer.model'

export class LoadCustomersAction implements Action {
  readonly type = types.LOAD_CUSTOMERS
  constructor(public payload: undefined | null) {}
}

export class LoadCustomersSuccessAction implements Action {
  readonly type = types.LOAD_CUSTOMERS_SUCCESS
  constructor(public payload: CustomerModel[]){}
}

export class DeleteCustomerAction implements Action {
  readonly type = types.DELETE_CUSTOMER
  constructor(public payload: number){}
}

export class DeleteCustomerSuccessAction implements Action {
  readonly type = types.DELETE_CUSTOMER_SUCCESS
  constructor(public payload: number){}
}

export type Actions =
  LoadCustomersAction |
  LoadCustomersSuccessAction |
  DeleteCustomerAction |
  DeleteCustomerSuccessAction;
