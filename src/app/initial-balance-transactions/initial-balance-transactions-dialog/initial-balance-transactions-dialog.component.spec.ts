import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialBalanceTransactionsDialogComponent } from './initial-balance-transactions-dialog.component';

describe('InitialBalanceTransactionsDialogComponent', () => {
  let component: InitialBalanceTransactionsDialogComponent;
  let fixture: ComponentFixture<InitialBalanceTransactionsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitialBalanceTransactionsDialogComponent]
    });
    fixture = TestBed.createComponent(InitialBalanceTransactionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
