/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import faker from "faker";
import { AlbumListComponent } from './album-list.component';
import { Genre } from '../genre.enum';
import { Record_label } from '../record_label.enum';
import { AlbumDetail } from '../albumdetail';
import { HttpClientModule } from '@angular/common/http';


describe('AlbumListComponent', () => {
  let component: AlbumListComponent;
  let fixture: ComponentFixture<AlbumListComponent>;
  let debug: DebugElement;
  let mockAlbums: Array<AlbumDetail>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [AlbumListComponent],
     imports: [HttpClientTestingModule],
   }).compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(AlbumListComponent);
   component = fixture.componentInstance;
   mockAlbums = [];
   mockAlbums.push(
    new AlbumDetail(
      1,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.between('1900-01-01', '2021-01-05'),
      faker.random.arrayElement(Object.getOwnPropertyNames(Genre)),
      faker.random.arrayElement(Object.getOwnPropertyNames(Record_label)),
      faker.lorem.sentence()
    ));

    component.albums = mockAlbums;
    fixture.detectChanges();
    debug = fixture.debugElement;
 });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should have an album element ", () => {
    expect(debug.query(By.css(".album-name")).nativeElement.innerText).toContain(
      component.albums[0].name
    );
  });

  it("Select album", () => {
    component.onSelected(mockAlbums[0]);
    expect(component.selected).toBeTrue();
    expect(component.selectedAlbum).toEqual(mockAlbums[0]);
  });

  it("Close detail album", () => {
    component.closeDetail();
    expect(component.selected).toBeFalse();
  });


  it("Consume Get albums", () => {
    component.getAlbums();
    expect(component.albums.length).toBeGreaterThan(0);
  });

  it("initialize component", () => {
    component.ngOnInit();
    expect(component.albums.length).toBeGreaterThan(0);
  });

});
