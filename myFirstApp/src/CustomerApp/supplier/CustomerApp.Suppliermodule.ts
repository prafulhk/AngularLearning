import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier.component';
import { CommonModule } from '@angular/common';
import { SupplierRoutingModule } from '../routing/customer-app-supplier-routing.module';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule
  ],
  providers: [],
  bootstrap: [SupplierComponent]

})
export class CustomerAppSupplierModule { }
