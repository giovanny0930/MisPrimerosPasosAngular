import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import {CustomersModule} from './customers/customers.module';
import {MenuComponent} from './menu/menu.component';
import {OrdersModule } from './orders/orders.module';
import{IndexComponent}from './customers/index/index.component';
import {AddComponent as OrderAddComponent}from './orders/add/add.component';

const appRoutes:Routes =[

  {path: "customers/index", component:IndexComponent},
  {path: "orders/add", component:IndexComponent}

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    ordersmodule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
