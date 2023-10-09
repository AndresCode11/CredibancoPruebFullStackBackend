import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CreditCardService} from "../../../services/credit-card-service/credit-card.service";

@Component({
  selector: 'app-credit-cart-list',
  templateUrl: './credit-cart-list.component.html',
  styleUrls: ['./credit-cart-list.component.scss']
})
export class CreditCartListComponent implements OnInit, AfterViewInit {

  creditCards: any = []

  ngOnInit(): void {
    this.getCreditCards()
  }

  ngAfterViewInit() {
  }

  constructor(private creditCardService: CreditCardService) {

  }

  getCreditCards() {
    this.creditCardService.getCreditCards()
      .subscribe((data) => {
        this.creditCards = data;
      })
  }

  updateBalance(id: number) {

    // call
  }

}
