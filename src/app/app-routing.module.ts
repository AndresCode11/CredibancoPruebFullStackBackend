import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    /* Modulo de MarketPlace */
    loadChildren: () => import('./modules/marketplace/marketplace.module').then(m => m.MarketplaceModule)
  },
  {
    path: "credit-cart",
    /* Modulo de Tarjetas de credito */
    loadChildren: () => import('./modules/credit-cart-manager/credit-cart-manager.module').then(m => m.CreditCartManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
