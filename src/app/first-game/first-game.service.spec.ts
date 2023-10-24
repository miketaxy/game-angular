import { TestBed } from '@angular/core/testing';

import { FirstGameService } from './first-game.service';

describe('FirstGameService', () => {
  let service: FirstGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
