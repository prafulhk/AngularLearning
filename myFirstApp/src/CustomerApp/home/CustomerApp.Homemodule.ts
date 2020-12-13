import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { MasterPageComponent } from './masterPage/masterpage.component';
import { CustomerAppMainRoutingModule } from '../routing/customer-app-main-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomerAppMainRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]

})
export class CustomerAppHomeModule { }
