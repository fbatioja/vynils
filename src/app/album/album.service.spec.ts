/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { Album } from "./album";
import { environment } from "../../environments/environment";
import { Genre } from './genre.enum';
import { Record_label } from './record_label.enum';
import { AlbumDetail } from './albumdetail';

describe('Service: Album', () => {
  let injector: TestBed;
  let service: AlbumService;
  let httpMock: HttpTestingController;
  let apiUrl = environment.baseUrl + "/albums";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });

    injector = getTestBed();
    service = injector.get(AlbumService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should Album', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));

  it("getAlbums() should return 10 records", () => {
    let mockAlbums: AlbumDetail[] = [];

    for (let i = 1; i < 11; i++) {
      let albumDetail = new AlbumDetail(
        i,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.between('1900-01-01', '2021-01-05'),
        faker.random.arrayElement(Object.getOwnPropertyNames(Genre)),
        faker.random.arrayElement(Object.getOwnPropertyNames(Record_label)),
        faker.lorem.sentence()
      );

      mockAlbums.push(albumDetail);
    }

    service.getAlbums().subscribe((albums) => {
      expect(albums.length).toBe(10);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbums);
  });

  it("getAlbumDetail() should return 1 record", () => {
    let mockAlbums: AlbumDetail[] = [];
    let idAlbum : number = 100;

    let albumDetail = new AlbumDetail(
        idAlbum,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.between('1900-01-01', '2021-01-05'),
        faker.random.arrayElement(Object.getOwnPropertyNames(Genre)),
        faker.random.arrayElement(Object.getOwnPropertyNames(Record_label)),
        faker.lorem.sentence()
    );

    mockAlbums.push(albumDetail);


    service.getAlbumDetail(idAlbum).subscribe((album:AlbumDetail) => {
      let albumDetailList : AlbumDetail = mockAlbums[0];
      expect(album[0]).not.toEqual(null);
      expect(album[0]).not.toEqual(undefined);
      expect(album[0].name).toEqual(albumDetailList.name);
    });

    const req = httpMock.expectOne(`${apiUrl}/${idAlbum}`);
    expect(req.request.method).toBe("GET");
    req.flush(mockAlbums);

  });





});
