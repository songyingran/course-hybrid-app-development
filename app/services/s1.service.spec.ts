import { TestBed } from '@angular/core/testing';

import { Fw2Service } from './fw2.service';

describe('Fw2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fw2Service = TestBed.get(Fw2Service);
    expect(service).toBeTruthy();
  });
});
