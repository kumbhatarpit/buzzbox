import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface PackageOption {
  name: string;
  price: number;
}
interface AddonOption {
  name: string;
  price: number;
}

@Component({
  selector: 'app-build-your-box',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './build-your-box.component.html',
  styleUrls: ['./build-your-box.component.css']
})
export class BuildYourBoxComponent {
  packages: PackageOption[] = [
    { name: 'Starter', price: 699 },
    { name: 'Growth', price: 899 },
    { name: 'Pro', price: 1099 },
    { name: 'Pro Max', price: 1399 }
  ];
  addons: AddonOption[] = [
    { name: 'Extra Reel', price: 99 },
    { name: 'Extra Graphic Post', price: 49 },
    { name: 'Priority Support', price: 199 }
  ];
  boxForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.boxForm = this.fb.group({
      package: ['', Validators.required],
      addons: [[]]
    });
  }

  get total() {
    const pkg = this.packages.find(p => p.name === this.boxForm.value.package);
    const base = pkg ? pkg.price : 0;
    const addonTotal = (this.boxForm.value.addons || []).reduce((sum: number, addonName: string) => {
      const addon = this.addons.find(a => a.name === addonName);
      return sum + (addon ? addon.price : 0);
    }, 0);
    return base + addonTotal;
  }

  onAddonChange(event: any, addon: string) {
    const selected = this.boxForm.value.addons || [];
    if (event.target.checked) {
      this.boxForm.patchValue({ addons: [...selected, addon] });
    } else {
      this.boxForm.patchValue({ addons: selected.filter((a: string) => a !== addon) });
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.boxForm.valid) {
      // Navigate to review-purchase or emit event
    }
  }

  get f() { return this.boxForm.controls; }
}
