import { TestBed } from '@angular/core/testing';

import { AdminPanelCustomerManegementService } from './admin-panel-customer-manegement.service';

describe('AdminPanelCustomerManegementService', () => {
  let service: AdminPanelCustomerManegementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPanelCustomerManegementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
