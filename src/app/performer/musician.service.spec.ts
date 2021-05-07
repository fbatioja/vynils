import {getTestBed, TestBed} from '@angular/core/testing';
import { MusicianService } from './musician.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {MusicianDetail} from './musiciandetail';
import faker from 'faker';
import {PerformerPrizes} from '../prize/prizedetail';


describe('MusicianService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: MusicianService;
  const apiUrl = environment.baseUrl + '/musicians';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MusicianService]
    });
    injector = getTestBed();
    service = TestBed.inject(MusicianService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getMusicians() should return 10 records', () => {
    let mockMusicians: MusicianDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let musicianDetail = new MusicianDetail(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.between('1900-01-01', '2021-01-05'),
        null,
        null
      );
      mockMusicians.push(musicianDetail);
    }

    service.getMusicians().subscribe((musicians) => {
      expect(musicians.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockMusicians);
  });

  it('getMusiciansDetail() should return a musician detail', () => {
    let id = 100;

    let MockMusician = new MusicianDetail(
      id,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.between('1900-01-01', '2021-01-05'),
      null,
      [new PerformerPrizes(
        faker.datatype.number(),
        faker.date.past()
      )]
    );

    service.getMusicianDetail(id).subscribe((musician) => {
      expect(musician.id).toBe(id);
    });

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(MockMusician);
  });
});
