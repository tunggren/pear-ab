import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedTransactionDialogComponent } from './dated-transaction-dialog.component';

describe('DatedTransactionDialogComponent', () => {
  let component: DatedTransactionDialogComponent;
  let fixture: ComponentFixture<DatedTransactionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatedTransactionDialogComponent]
    });
    fixture = TestBed.createComponent(DatedTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
