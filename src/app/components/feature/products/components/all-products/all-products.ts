import {Component, inject} from '@angular/core';
import {ExampleService} from '../../../../shared/services/example-service';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.html',
  styleUrl: './all-products.css',
})
export class AllProducts {
  exampleService = inject(ExampleService);
}
