import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import {HomePageComponent} from "./home-page/home-page.component";
import { ProductCardComponent } from './elements/product-card/product-card.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ProductCardComponent,
    CheckoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    ReactiveFormsModule
  ]
})
export class MarketplaceModule { }
