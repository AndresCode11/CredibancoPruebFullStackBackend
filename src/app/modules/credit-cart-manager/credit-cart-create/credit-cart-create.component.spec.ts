import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCartCreateComponent } from './credit-cart-create.component';

describe('CreditCartCreateComponent', () => {
  let component: CreditCartCreateComponent;
  let fixture: ComponentFixture<CreditCartCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCartCreateComponent]
    });
    fixture = TestBed.createComponent(CreditCartCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
