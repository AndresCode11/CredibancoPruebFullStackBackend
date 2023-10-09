import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {CreditCartAdminComponent} from "../credit-cart-manager/credit-cart-admin/credit-cart-admin.component";
import {LayoutComponent} from "./layout/layout.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'checkout',
      component: CheckoutComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MarketplaceRoutingModule { }
