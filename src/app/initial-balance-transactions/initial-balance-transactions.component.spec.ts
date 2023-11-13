import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialBalanceTransactionsComponent } from './initial-balance-transactions.component';

describe('InitialBalanceTransactionsComponent', () => {
  let component: InitialBalanceTransactionsComponent;
  let fixture: ComponentFixture<InitialBalanceTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialBalanceTransactionsComponent]
    });
    fixture = TestBed.createComponent(InitialBalanceTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
