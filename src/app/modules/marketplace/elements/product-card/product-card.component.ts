import {Component, Input} from '@angular/core';
import {Product} from "../../../../models/cart";
import {MarketPlaceService} from "../../services-market-place/market-place.service";
import {CartService} from "../../../../services/cart-service/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({alias: "product"}) product !: Product;

  constructor(private marketPlaceService: MarketPlaceService, private cartService: CartService) {
  }
  handleAddProductCart(product: any) {
    console.log('agregando')
    console.log(product)
    this.cartService.addToCart(product);
  }
}
