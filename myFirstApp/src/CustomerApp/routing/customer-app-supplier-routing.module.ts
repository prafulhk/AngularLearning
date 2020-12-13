import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from "../supplier/supplier.component";
import { RouterModule } from '@angular/router';

export const supplierRoutes = [
  { path: 'Add', component: SupplierComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(supplierRoutes),
  ],
  exports:[RouterModule]
})
export class SupplierRoutingModule {

}



