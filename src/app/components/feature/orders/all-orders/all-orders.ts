import {Component, inject} from '@angular/core';
import {ExampleService} from '../../../shared/services/example-service';
import {ExampleService3} from '../../../shared/services/example-service-3';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.html',
  styleUrl: './all-orders.css',
})
export class AllOrders {
  exampleService: ExampleService = inject(ExampleService);
  exampleService3: ExampleService = inject(ExampleService3);

  constructor() {
  }
}
