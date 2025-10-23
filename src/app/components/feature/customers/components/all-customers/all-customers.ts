import {Component, inject, OnInit} from '@angular/core';
import {ExampleService} from '../../../../shared/services/example-service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-all-customers',
  imports: [],
  templateUrl: './all-customers.html',
  styleUrl: './all-customers.css',
})
export class AllCustomers {
  exampleService = inject(ExampleService);

  constructor() {
  }
}
