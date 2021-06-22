import { TestBed } from '@angular/core/testing';

import { DomObjectService } from './dom-object.service';

describe('DomObjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomObjectService = TestBed.get(DomObjectService);
    expect(service).toBeTruthy();
  });
});
