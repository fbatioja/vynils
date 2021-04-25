import {getTestBed, TestBed} from '@angular/core/testing';

import { BandService } from './band.service';
import {AlbumService} from '../album/album.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import faker from 'faker';
import {BandDetail} from './BandDetail';

describe('BandService', () => {
  let injector: TestBed;
  let service: BandService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.baseUrl + '/bands';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });
    injector = getTestBed();
    service = injector.inject(BandService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBands() should return 10 records', () => {
    let mockBands: BandDetail[] = [];
    for (let i = 1; i < 11; i++) {
      let bandDetail = new BandDetail (
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.between('1900-01-01', '2021-01-05'),
        null,
        null,
        null
      );

      mockBands.push(bandDetail);
    }

    service.getBands().subscribe((bands) => {
      expect(bands.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockBands);
  });
});
