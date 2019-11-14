import { TestBed } from '@angular/core/testing';

import { EvmenuService } from './evmenu.service';

describe('EvmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvmenuService = TestBed.get(EvmenuService);
    expect(service).toBeTruthy();
  });
});
