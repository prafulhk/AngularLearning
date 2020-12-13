import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterPageComponent } from './home/masterPage/masterpage.component';
import { CustomerAppHomeModule } from './home/CustomerApp.Homemodule';
import { CustomerAppCustomerModule } from './customer/CustomerApp.Customermodule';
import { CustomerAppSupplierModule } from './supplier/CustomerApp.Suppliermodule';
import { CustomerAppMainRoutingModule } from './routing/customer-app-main-routing.module';

@NgModule({
  declarations: [
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerAppMainRoutingModule,
    CustomerAppHomeModule,
    CustomerAppCustomerModule,
    CustomerAppSupplierModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]

})
export class CustomerAppMainModule { }
