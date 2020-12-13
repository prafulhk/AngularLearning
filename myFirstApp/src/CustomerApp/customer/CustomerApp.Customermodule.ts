import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from '../routing/customer-app-customer-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CustomerComponent]

})
export class CustomerAppCustomerModule { }
