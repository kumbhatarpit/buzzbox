import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewPurchaseComponent } from './review-purchase.component';

describe('ReviewPurchaseComponent', () => {
  let component: ReviewPurchaseComponent;
  let fixture: ComponentFixture<ReviewPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
