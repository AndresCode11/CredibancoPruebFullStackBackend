import { Injectable } from '@angular/core';
import {Product} from "../../models/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: Array<Product> = [];

  constructor() {
    this.loadCart();
  }

  getProducts() {
    return this.products;
  }

  getTotal() {
    let total = 0;
    for (const item of this.products) {
      total+= item.quantity * item.price
    }
    return total;
  }

  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products));
  }

  addToCart(product: Product) {
    console.log(this.productInCart(product))
    if(this.productInCart(product)) {
      const index = this.products.findIndex((x: any) => x.id === product.id);
      this.products[index].quantity += 1;
    }
    else {
      product.quantity = 1;
      this.products.push(product);
    }
    this.saveCart();
  }

  loadCart(): void {
    this.products = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }

  productInCart(product: Product): boolean {
    return this.products.findIndex((x: any) => x.id === product.id) > -1;
  }


  removeProduct(product: any) {
    const index = this.products.findIndex((x: any) => x.id === product.id);

    if (index > -1) {
      this.products.splice(index, 1);
      this.saveCart();
    }
  }

  clearProducts() {
    localStorage.clear();
  }
}
