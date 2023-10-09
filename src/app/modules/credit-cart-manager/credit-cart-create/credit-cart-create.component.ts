import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CreditCardService} from "../../../services/credit-card-service/credit-card.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-credit-cart-create',
  templateUrl: './credit-cart-create.component.html',
  styleUrls: ['./credit-cart-create.component.scss']
})
export class CreditCartCreateComponent implements OnInit {

  public formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) {
  }

  generateRandomCard() {
      let min = Math.ceil(10000000000000000);
      return "" + Math.floor(Math.random() *  min)
  }

  generateRandomCVC() {
    let min = Math.ceil(1000);
    return "" + Math.floor(Math.random() *  min)
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      number: [this.generateRandomCard(), Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvc: [this.generateRandomCVC(), Validators.required]
    })

  }

  get f() {
    return this.formGroup.controls;
  }

  submit() {

    let submitData = {
      name: this.f['name'].value,
      number: this.f['number'].value,
      expire: this.f['year'].value + '-' + this.f['month'].value + '-01',
      cvc: this.f['cvc'].value,
      balance: 0
    }


    this.creditCardService.saveCreditCard(submitData)
      .subscribe(
        () =>{
          Swal.fire({
            icon: 'success',
            title: 'Tarjeta creada con exito',
            showConfirmButton: false,
            timer: 3500
          });
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Error al crear tarjeta de credito',
            showConfirmButton: false,
            timer: 3500
          });
        }
      )
  }
}
