import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {

  }

  customerModel: Customer = new Customer();
  customerModels: Array<Customer> = new Array<Customer>();
  Add(): void {
    this.customerModels.push(this.customerModel);
  }
  hasError(typeofValidator: string, controlName: string): boolean {
    return this.customerModel.formCustomerGroup.controls[controlName].hasError(typeofValidator);
  }
}
