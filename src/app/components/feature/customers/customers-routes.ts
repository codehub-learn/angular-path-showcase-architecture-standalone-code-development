import {AllCustomers} from './components/all-customers/all-customers';
import {Routes} from '@angular/router';
import {ExampleService} from '../../shared/services/example-service';
import {CustomerDetails} from './components/customer-details/customer-details';
import {ExampleService2} from '../../shared/services/example-service-2';


export const customerRoutes: Routes = [
  {
    path: '',
    providers: [{provide: ExampleService, useClass: ExampleService2}],
    children: [
      {
        path: 'all-customers',
        component: AllCustomers,
      },
      {
        path: 'customer-details',
        component: CustomerDetails,
      }
    ]
  }
  /*{
    path: 'all-customers',
    component: AllCustomers,
    providers: [ExampleService]
  }*/
];
