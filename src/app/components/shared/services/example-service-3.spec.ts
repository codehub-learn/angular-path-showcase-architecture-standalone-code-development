import { TestBed } from '@angular/core/testing';

import { ExampleService3 } from './example-service-3';

describe('ExampleService3', () => {
  let service: ExampleService3;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService3);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
