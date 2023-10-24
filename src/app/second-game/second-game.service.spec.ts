import { TestBed } from '@angular/core/testing';

import { SecondGameService } from './second-game.service';

describe('SecondGameService', () => {
  let service: SecondGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
