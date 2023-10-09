import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart-service/cart.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreditCardService} from "../../../services/credit-card-service/credit-card.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public formGroup!: FormGroup;

  constructor(private cartService: CartService,
              private formBuilder: FormBuilder,
              private creditCardService: CreditCardService) {

  }

  get f() {
    return this.formGroup.controls;
  }
  getProductsCart() {
    return this.cartService.getProducts();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvc: ['', Validators.required]
    })
  }

  totalCheckout() {
    return this.cartService.getTotal()
  }

  submit() {
    let submitData = {
      name: this.f['name'].value,
      number: this.f['number'].value,
      expire: this.f['year'].value + '-' + this.f['month'].value + '-01',
      cvc: this.f['cvc'].value,
      balance: this.cartService.getTotal()
    }


    this.creditCardService.discountCreditCard(submitData)
      .subscribe(
        () =>{
          Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado de manera exitosa',
            showConfirmButton: false,
            timer: 3500
          });

        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: error.error.response,
            showConfirmButton: false,
            timer: 3500
          });
        }
      )
  }


}
