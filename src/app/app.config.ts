import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {ExampleService} from './components/shared/services/example-service';
import {ExampleService2} from './components/shared/services/example-service-2';
import {ExampleService3} from './components/shared/services/example-service-3';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // use this if library used only has NgModule API
    //importProvidersFrom(ExampleLibraryModule.forRoot())
    // useClass
    // real world case for testing, interceptors, logger
    {provide: ExampleService, useClass: ExampleService2}, // new ExampleService2 = new ExampleService2()
    {provide: ExampleService3, useExisting: ExampleService}, // does not use new
    // useFactory, useValue
  ]
};
