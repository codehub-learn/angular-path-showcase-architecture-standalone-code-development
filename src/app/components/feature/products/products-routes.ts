import {AllProducts} from './components/all-products/all-products';
import {ExampleService} from '../../shared/services/example-service';
import {AllCustomers} from '../customers/components/all-customers/all-customers';
import {CustomerDetails} from '../customers/components/customer-details/customer-details';


export const productsRoutes = [
  {
    path: '',
    providers: [ExampleService],
    children: [
      {
        path: 'all-products',
        component: AllProducts,
      }
    ]
  }
];
