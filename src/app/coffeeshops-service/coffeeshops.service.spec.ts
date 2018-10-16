/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoffeeshopsService } from './coffeeshops.service';

describe('Service: Coffeeshops', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoffeeshopsService]
    });
  });

  it('should ...', inject([CoffeeshopsService], (service: CoffeeshopsService) => {
    expect(service).toBeTruthy();
  }));
});
