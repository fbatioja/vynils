import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformerDetailComponent } from './performer-detail.component';
import {DebugElement} from '@angular/core';
import {BandDetail} from '../banddetail';
import {MusicianDetail} from '../musiciandetail';
import {HttpClientModule} from '@angular/common/http';
import faker from 'faker';
import {By} from '@angular/platform-browser';

describe('PerformerDetailComponent', () => {
  let component: PerformerDetailComponent;
  let fixture: ComponentFixture<PerformerDetailComponent>;
  let debug: DebugElement;
  let mockBand: BandDetail;
  let mockMusician: MusicianDetail;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PerformerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have basic info about performer', () => {
    mockBand = new BandDetail(
      1,
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      [],
      [],
      []
    );
    component.performerDetail = mockBand;
    fixture.detectChanges();
    debug = fixture.debugElement;
    expect(
      debug.query(By.css('#performer-name')).nativeElement.innerText
    ).toContain(mockBand.name);
    expect(
      debug.query(By.css('#performer-image')).properties.src
    ).toContain(mockBand.image);
  });

  it('should be visible birthDate when is a Musician', () => {
    mockMusician = new MusicianDetail(
      1,
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      [],
      [],
    );
    component.performerDetail = mockMusician;
    fixture.detectChanges();
    debug = fixture.debugElement;
    expect(
      debug.query(By.css('#birthDate'))
    ).toBeTruthy();
    expect(
      debug.query(By.css('#creationDate'))
    ).toBeFalsy();
  });

  it('should be visible creationDate when is a Band', () => {
    mockBand = new BandDetail(
      1,
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      [],
      [],
      []
    );
    component.performerDetail = mockBand;
    fixture.detectChanges();
    debug = fixture.debugElement;
    expect(
      debug.query(By.css('#creationDate'))
    ).toBeTruthy();
    expect(
      debug.query(By.css('#birthDate'))
    ).toBeFalsy();
  });
});
