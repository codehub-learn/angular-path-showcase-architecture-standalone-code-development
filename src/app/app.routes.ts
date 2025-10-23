import { Routes } from '@angular/router';
import {productsRoutes} from './components/feature/products/products-routes';
import {AllClients} from './components/feature/clients/all-clients/all-clients';

export const routes: Routes = [
  {
    path: "customers",
    loadChildren: () => import('./components/feature/customers/customers-routes')
      .then((m) => m.customerRoutes)
  },
  {
    path: "products",
    loadChildren: () => import('./components/feature/products/products-routes')
      .then((m) => m.productsRoutes)
  },
  {
    path: "orders",
    loadComponent: () => import("./components/feature/orders/all-orders/all-orders")
      .then((c) => c.AllOrders)
  },
  {
    path: "clients",
    component: AllClients
  }

];
