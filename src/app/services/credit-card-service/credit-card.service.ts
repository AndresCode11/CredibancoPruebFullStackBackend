import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  private creditsCardsUrl: string;
  private creditCardDiscountUrl: string;

  constructor(private http: HttpClient) {
    this.creditsCardsUrl = 'http://credibancospringboot-env.eba-jhijkhmh.us-east-2.elasticbeanstalk.com/api/v1/card';
    this.creditCardDiscountUrl = 'http://credibancospringboot-env.eba-jhijkhmh.us-east-2.elasticbeanstalk.com/api/v1/card/discount'
  }

  // ALL CREDIT CARDS
  public getCreditCards(): Observable<Object> {
    return this.http.get(this.creditsCardsUrl, {responseType: 'json'});
  }

  public saveCreditCard(body: Object): Observable<Object> {
    return this.http.post(this.creditsCardsUrl, body, {responseType: 'json'})
  }

  public discountCreditCard(body: Object): Observable<Object> {
    return this.http.post(this.creditCardDiscountUrl, body, {responseType: 'json'})
  }

}
