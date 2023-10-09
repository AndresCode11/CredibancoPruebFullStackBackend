import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCartAdminComponent } from './credit-cart-admin.component';

describe('CreditCartAdminComponent', () => {
  let component: CreditCartAdminComponent;
  let fixture: ComponentFixture<CreditCartAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCartAdminComponent]
    });
    fixture = TestBed.createComponent(CreditCartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
