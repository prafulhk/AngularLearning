import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "../home/home.component";
import { RouterModule } from '@angular/router';
import { SupplierComponent } from '../supplier/supplier.component';

export const mainRoutes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Customer', loadChildren: '../customer/CustomerApp.Customermodule#CustomerAppCustomerModule'},
  { path: 'Supplier', loadChildren: '../supplier/CustomerApp.Suppliermodule#CustomerAppSupplierModule' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes),
  ],
  exports:[RouterModule]
})
export class CustomerAppMainRoutingModule {

}



