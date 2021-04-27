/* tslint:disable:no-unused-variable */
import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { CollectorService } from './collector.service';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import faker from 'faker';
import {Collector} from './collector';
import { environment } from '../../environments/environment';
import {CollectorDetail} from './collectordetail';

describe('Service: Collector', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: CollectorService;
  const apiUrl = environment.baseUrl + '/collectors';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorService]
    });
    injector = getTestBed();
    service = TestBed.inject(CollectorService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should Collector', inject([CollectorService], (service: CollectorService) => {
    expect(service).toBeTruthy();
  }));

  it('getCollectors() should return 10 records', () => {
    let mockCollectors: CollectorDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let collectorDetail = new CollectorDetail(
        i,
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.internet.email(),
        null,
        null,
      );

      mockCollectors.push(collectorDetail);
    }

    service.getCollectors().subscribe((collectors) => {
      expect(collectors.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockCollectors);
  });

});
