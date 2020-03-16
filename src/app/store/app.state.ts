import CustomerModel from '../models/customer.model';

export interface AppState {
  readonly customers: CustomerModel[] | number
}
