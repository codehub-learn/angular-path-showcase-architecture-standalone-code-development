import {HttpClient} from '@angular/common/http';
import {inject, makeEnvironmentProviders, provideAppInitializer} from '@angular/core';
import {delay, firstValueFrom} from 'rxjs';
import {AuthorizationService} from '../components/shared/services/authorization.service';
import {REMOTE_CONFIG} from './tokens';


export function remoteConfigFactory() {
  let remoteConfig: any | null = null;
  return makeEnvironmentProviders([
    // initializer:
    provideAppInitializer(async () => {
      const http = inject(HttpClient);
      remoteConfig = await firstValueFrom(http.get<any>('/assets/config.json').pipe(delay(1000)));
    }),
    {
      provide: REMOTE_CONFIG,
      useFactory: () => {
        return remoteConfig;
      },
    },
  ]);
}
