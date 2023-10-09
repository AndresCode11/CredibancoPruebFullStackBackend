import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCartManagerRoutingModule } from './credit-cart-manager-routing.module';
import { CreditCartAdminComponent } from './credit-cart-admin/credit-cart-admin.component';
import { CreditCartCreateComponent } from './credit-cart-create/credit-cart-create.component';
import { CreditCartListComponent } from './credit-cart-list/credit-cart-list.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CreditCartAdminComponent,
    CreditCartCreateComponent,
    CreditCartListComponent
  ],
  imports: [
    CommonModule,
    CreditCartManagerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreditCartManagerModule { }
