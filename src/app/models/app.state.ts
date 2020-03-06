import { CustomerModel } from './customer.model';

export interface AppState {
  readonly customers: CustomerModel[]
}
