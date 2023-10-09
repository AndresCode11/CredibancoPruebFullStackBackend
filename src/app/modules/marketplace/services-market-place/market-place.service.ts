import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceService {

  private productsUrl: string;
  private productsbyTextUrl: string;
  constructor(private http: HttpClient) {
    this.productsUrl = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=12';
    this.productsbyTextUrl = 'https://api.escuelajs.co/api/v1/products?title='
  }

  // ALL PRODUCTS
  public getProducts(): Observable<Object> {
    return this.http.get(this.productsUrl, {responseType: 'json'});
  }

  // PRODUCTS BY TEXT
  public getProductsByText(title: string): Observable<Object> {
    return this.http.get(this.productsbyTextUrl + `${title}`, {responseType: 'json'});
  }
 }
