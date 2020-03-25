import * as customerActions from './customer.actions'
import { AppState } from './app.state'
import types from './action.types'

export let initialState: AppState = { customers: [] }

export let CustomerReducer = (state = initialState, action: customerActions.Actions):AppState => {
  switch(action.type) {
    case types.LOAD_CUSTOMERS_SUCCESS: {
      return {... state, customers: action.payload }
    }
    case types.DELETE_CUSTOMER_SUCCESS: {
      return {... state, customers: typeof(state.customers) == 'number' ? state.customers : state.customers.filter(customer => customer.id !== action.payload)}
    }
    default:
      return state
  }
}
