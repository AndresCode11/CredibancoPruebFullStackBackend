import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditCartAdminComponent} from "./credit-cart-admin/credit-cart-admin.component";
import {CreditCartCreateComponent} from "./credit-cart-create/credit-cart-create.component";
import {CreditCartListComponent} from "./credit-cart-list/credit-cart-list.component";

const routes: Routes = [{
  path: '',
  component: CreditCartAdminComponent,
  children: [
    {
      path: '',
      component: CreditCartListComponent
    },
    {
      path: 'list',
      component: CreditCartListComponent
    },
    {
      path: 'create',
      component: CreditCartCreateComponent
    }

    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCartManagerRoutingModule { }
