import {HttpClient} from '@angular/common/http';
import {inject} from '@angular/core';
import {delay, firstValueFrom} from 'rxjs';
import {AuthorizationService} from '../components/shared/services/authorization.service';


export function remoteConfigFactoryAlternative() {
  return async () => {
    const http = inject(HttpClient);
    const authorizationService = inject(AuthorizationService);
    console.error(authorizationService.isAuthorized())
    let value = await firstValueFrom(http.get("/assets/config.json").pipe(delay(5000)));
    // then save to local storage, ngrx,
  }
}
