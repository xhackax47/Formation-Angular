import { TestBed, inject } from '@angular/core/testing';

import { CardProviderService } from './card-provider.service';

describe('CardProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardProviderService]
    });
  });

  it('should be created', inject([CardProviderService], (service: CardProviderService) => {
    expect(service).toBeTruthy();
  }));
});
