import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'pricing', loadComponent: () => import('./pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'get-started', loadComponent: () => import('./get-started/get-started.component').then(m => m.GetStartedComponent) },
  { path: 'build-your-box', loadComponent: () => import('./build-your-box/build-your-box.component').then(m => m.BuildYourBoxComponent) },
  { path: 'our-work', loadComponent: () => import('./our-work/our-work.component').then(m => m.OurWorkComponent) },
  { path: 'review-purchase', loadComponent: () => import('./review-purchase/review-purchase.component').then(m => m.ReviewPurchaseComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'blog', loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
];
