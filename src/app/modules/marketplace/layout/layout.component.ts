import {Component, OnInit} from '@angular/core';
import {MarketPlaceService} from "../services-market-place/market-place.service";
import {CartService} from "../../../services/cart-service/cart.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  products: any = [];

  ngOnInit(): void {
    this.handleGetProducts()
  }

  constructor(private marketPlaceService: MarketPlaceService, private cartService: CartService) {
  }

  getProductsCart() {
    return this.cartService.getProducts();
  }
  handleGetProducts() {
    this.marketPlaceService.getProducts()
      .subscribe((data)  => {
        this.products = data;
      })
  }

}
