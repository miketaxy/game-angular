import { TestBed } from '@angular/core/testing';

import { ThirdGameService } from './third-game.service';

describe('ThirdGameService', () => {
  let service: ThirdGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
