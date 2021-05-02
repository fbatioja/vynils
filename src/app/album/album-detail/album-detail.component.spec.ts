/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlbumDetailComponent } from './album-detail.component';
import { AlbumDetail } from '../albumdetail';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import faker from "faker";
import { Genre } from '../genre.enum';
import { Record_label } from '../record_label.enum';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailComponent;
  let fixture: ComponentFixture<AlbumDetailComponent>;
  let debug: DebugElement;
  let mockAlbum: AlbumDetail;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumDetailComponent ],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailComponent);
    component = fixture.componentInstance;

    mockAlbum =
     new AlbumDetail(
       1,
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.date.between('1900-01-01', '2021-01-05'),
       faker.random.arrayElement(Object.getOwnPropertyNames(Genre)),
       faker.random.arrayElement(Object.getOwnPropertyNames(Record_label)),
       faker.lorem.sentence()
     );

     component.albumDetail = mockAlbum;
     fixture.detectChanges();
     debug = fixture.debugElement;
  });


  it('should detail', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an album ", () => {
    expect(debug.query(By.css(".album-name")).nativeElement.innerText).toContain(
      component.albumDetail.name
    );
  });

});
