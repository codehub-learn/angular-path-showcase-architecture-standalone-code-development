import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() {
    console.error("authorization service created")
  }

  isAuthorized() {
    let isAuthorized = Math.random() > 0.5;
    console.error(`is authorized: ${isAuthorized}`)
    return isAuthorized;
  }

}
