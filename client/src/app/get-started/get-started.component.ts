import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  step = 1;
  submitted = false;
  success = false;
  getStartedForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    business: new FormControl('', Validators.required),
    goals: new FormControl('', Validators.required)
  });
  f: any;

  constructor(private fb: FormBuilder) {
    this.getStartedForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      business: ['', Validators.required],
      goals: ['', Validators.required]
    });
  }

  nextStep() {
    if (this.step === 1 && this.getStartedForm.get('name')?.invalid) {
      this.getStartedForm.get('name')?.markAsTouched();
      return;
    }
    if (this.step === 2 && (this.getStartedForm.get('email')?.invalid || this.getStartedForm.get('business')?.invalid)) {
      this.getStartedForm.get('email')?.markAsTouched();
      this.getStartedForm.get('business')?.markAsTouched();
      return;
    }
    this.step++;
  }

  prevStep() {
    if (this.step > 1) this.step--;
  }

  onSubmit() {
    this.submitted = true;
    if (this.getStartedForm.valid) {
      this.success = true;
    }
  }
}
