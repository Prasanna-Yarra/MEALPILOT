import { TestBed } from '@angular/core/testing';

import { Dify } from './dify';

describe('Dify', () => {
  let service: Dify;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dify);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
