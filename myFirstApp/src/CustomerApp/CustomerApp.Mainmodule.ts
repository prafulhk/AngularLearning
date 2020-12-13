import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier/supplier.component';
import { HomeComponent } from './home/home.component';
import { MasterPageComponent } from './home/masterPage/masterpage.component';
import { CustomerAppRoutingModule } from './customer-app-routing/customer-app-routing.module';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    CustomerComponent,
    SupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerAppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]

})
export class CustomerAppMainModule { }
