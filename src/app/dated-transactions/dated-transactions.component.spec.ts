import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedTransactionsComponent } from './dated-transactions.component';

describe('DatedTransactionsComponent', () => {
  let component: DatedTransactionsComponent;
  let fixture: ComponentFixture<DatedTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatedTransactionsComponent]
    });
    fixture = TestBed.createComponent(DatedTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
