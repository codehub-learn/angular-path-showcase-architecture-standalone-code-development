import { TestBed } from '@angular/core/testing';

import { ExampleService2 } from './example-service-2';

describe('ExampleService2', () => {
  let service: ExampleService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
