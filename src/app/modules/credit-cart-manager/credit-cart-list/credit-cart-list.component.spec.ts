import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCartListComponent } from './credit-cart-list.component';

describe('CreditCartListComponent', () => {
  let component: CreditCartListComponent;
  let fixture: ComponentFixture<CreditCartListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCartListComponent]
    });
    fixture = TestBed.createComponent(CreditCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
