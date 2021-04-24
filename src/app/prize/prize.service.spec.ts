import {getTestBed, TestBed} from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { PrizeService } from './prize.service';
import faker from 'faker';
import {Prize} from './prize';
import { environment } from '../../environments/environment';
import {PrizeDetail} from './prizedetail';

describe('PrizeService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: PrizeService;
  const apiUrl = environment.baseUrl + '/prizes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PrizeService]
    });
    injector = getTestBed();
    service = TestBed.inject(PrizeService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPrizes() should return 10 records', () => {
    let mockPrizes: Prize[] = [];

    for (let i = 1; i < 11; i++) {
      let prizeDetail = new PrizeDetail(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        null
      );

      mockPrizes.push(prizeDetail);
    }

    service.getPrizes().subscribe((prizes) => {
      expect(prizes.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPrizes);
  });
});
