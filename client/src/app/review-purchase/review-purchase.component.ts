import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-purchase',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './review-purchase.component.html',
  styleUrls: ['./review-purchase.component.css']
})
export class ReviewPurchaseComponent {
  paymentForm: FormGroup;
  submitted = false;
  success = false;
  f: any;
  // Mock order summary
  order = {
    package: 'Pro',
    addons: ['Extra Reel', 'Priority Support'],
    total: 1399 + 99 + 199
  };

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      card: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiry: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')]],
      cvc: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.valid) {
      this.success = true;
    }
  }
}
