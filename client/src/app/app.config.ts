import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { provideReactiveForms } from '@angular/forms';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    //provideReactiveForms()
  ]
};

