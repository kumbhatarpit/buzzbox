import { Component } from '@angular/core';
import { LucideAngularModule, CheckCircle } from 'lucide-angular';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
  check = CheckCircle;
}
