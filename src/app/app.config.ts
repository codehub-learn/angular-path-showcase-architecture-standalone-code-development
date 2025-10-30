import {
  APP_INITIALIZER,
  ApplicationConfig, provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {ExampleService} from './components/shared/services/example-service';
import {ExampleService2} from './components/shared/services/example-service-2';
import {ExampleService3} from './components/shared/services/example-service-3';
import {
  ExampleServiceWithRequiredAuthorization
} from './components/shared/services/example-service-with-required-authorization';
import {exampleServiceWithAuthorizationFactory} from './init/exampleServiceWithRequiredAuthorizationFactory';
import {AuthorizationService} from './components/shared/services/authorization.service';
import {APP_CONFIG, BACKEND_API_KEY} from './init/tokens';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {remoteConfigFactoryAlternative} from './init/remoteConfigFactoryAlternative';
import {remoteConfigFactory} from './init/remoteConfigFactory';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    // use this if library used only has NgModule API
    //importProvidersFrom(ExampleLibraryModule.forRoot())
    // useClass
    // real world case for testing, interceptors, logger
    {provide: ExampleService, useClass: ExampleService2}, // new ExampleService2 = new ExampleService2()
    {provide: ExampleService3, useExisting: ExampleService}, // does not use new
    // useFactory
    /*{
      provide: ExampleServiceWithRequiredAuthorization,
      useFactory: exampleServiceWithAuthorizationFactory,
      deps: [AuthorizationService]
    },*/
    // useValue (InjectionTokens)
    {provide: BACKEND_API_KEY, useValue: "82571298FH91HF"},
    {
      provide: APP_CONFIG, useValue: {
        title: "my-app",
        version: "1.0",
      }
    },
    // newer version:
    //provideAppInitializer(remoteConfigFactoryAlternative()),
    remoteConfigFactory(),
    provideHttpClient()
    // older version, now deprecated:
   /* {
      provide: APP_INITIALIZER,
      useFactory: remoteConfigFactory,
      deps: [HttpClient],
      multi: true
    }*/
    /*{
      provide: APP_INITIALIZER,
      useFactory: () => () => console.error('Init 1'),
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => console.error('Init 2'),
      multi: true
    }*/
  ]
};
