import { TestBed } from '@angular/core/testing';

import { DeclinisonService } from './declinison.service';

describe('DeclinisonService', () => {
  let service: DeclinisonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclinisonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
