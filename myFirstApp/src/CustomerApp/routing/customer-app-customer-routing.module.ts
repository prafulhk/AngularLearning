import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from "../customer/customer.component";
import { RouterModule } from '@angular/router';

export const customerRoutes = [
  { path: 'Add', component: CustomerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes),
  ],
  exports:[RouterModule]
})
export class CustomerRoutingModule {

}



