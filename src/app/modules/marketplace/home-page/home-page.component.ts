import {Component, OnInit} from '@angular/core';
import {MarketPlaceService} from "../services-market-place/market-place.service";
import {CartService} from "../../../services/cart-service/cart.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

    products: any = [];
    disabled = true;
    constructor(private marketPlaceService: MarketPlaceService, private cartService: CartService) {
    }

    handleSideCart() {
      let sideCart = document.getElementById("side-cart");
      sideCart?.classList.add("active");
    }
    handleGetProducts() {
      this.marketPlaceService.getProducts()
        .subscribe((data)  => {
          this.products = data;
        })
    }

    handleSearchByText(event: any) {
      let title: string = event.target.value
      this.marketPlaceService.getProductsByText(title)
        .subscribe((data)  => {
          this.products = data;
        })
    }

    handleAddProductCart(product: any) {
      this.cartService.addToCart(product);
      this.handleSideCart()
    }

    ngOnInit() {
      this.handleGetProducts();
    }

}
