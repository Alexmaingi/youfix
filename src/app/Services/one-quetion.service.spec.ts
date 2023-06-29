import { TestBed } from '@angular/core/testing';

import { OneQuetionService } from './one-quetion.service';

describe('OneQuetionService', () => {
  let service: OneQuetionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneQuetionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
