import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customerModel:Customer=new Customer();
  customerModels:Array<Customer>=new Array<Customer>();
  Add()
  {
    this.customerModels.push(this.customerModel);
    // this.customerModel=new Customer();
  }

}