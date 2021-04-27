/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PerformerService } from './performer.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('Service: Performer', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PerformerService]
    });
  });


  it('should ...', inject([PerformerService], (service: PerformerService) => {
    expect(service).toBeTruthy();
  }));

});
