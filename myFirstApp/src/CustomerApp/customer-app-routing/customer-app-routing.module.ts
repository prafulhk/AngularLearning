import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from "../home/home.component";
import { CustomerComponent } from "../customer/customer.component";
import { SupplierComponent } from "../supplier/supplier.component";
import { RouterModule } from '@angular/router';

export const mainRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', component: CustomerComponent },
  { path: 'Supplier', component: SupplierComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes),
  ],
  exports:[RouterModule]
})
export class CustomerAppRoutingModule {

}



