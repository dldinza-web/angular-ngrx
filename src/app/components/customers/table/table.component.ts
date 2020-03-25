import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CustomerModel from 'src/app/models/customer.model';

@Component({
  selector: 'customers-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  @Input() customers: CustomerModel[] | number
  @Output() onDelete = new EventEmitter<CustomerModel>()

  constructor() { }

  deleteCustomer(customer: CustomerModel) {
    if (customer && customer.id) {
      if (confirm(`Are you sure you want to delete customer ${customer.firstName}?`)) {
        this.onDelete.emit(customer)
      }
    }
  }

  ngOnInit(): void {
  }

}
