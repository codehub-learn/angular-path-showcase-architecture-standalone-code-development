import {
  ExampleServiceWithRequiredAuthorization
} from '../components/shared/services/example-service-with-required-authorization';
import {AuthorizationService} from '../components/shared/services/authorization.service';


export function exampleServiceWithAuthorizationFactory(authorizationService: AuthorizationService) {
  console.error("test")
  return new ExampleServiceWithRequiredAuthorization(authorizationService.isAuthorized());
}
