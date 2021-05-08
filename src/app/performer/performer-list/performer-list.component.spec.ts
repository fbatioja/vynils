/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PerformerListComponent } from './performer-list.component';
import { PerfomerDetail } from '../performerdetail';
import { HttpClientModule } from '@angular/common/http';
import faker from 'faker';
import {BandDetail} from '../banddetail';

describe('PerformerListComponent', () => {
  let component: PerformerListComponent;
  let fixture: ComponentFixture<PerformerListComponent>;
  let debug: DebugElement;
  let mockPerformer: Array<BandDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PerformerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformerListComponent);
    component = fixture.componentInstance;
    mockPerformer = [];
    mockPerformer.push(new BandDetail(
      1,
      faker.lorem.word(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.date.past(),
      [],
      [],
      []
    ));
    component.performers = mockPerformer;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an performer element ', () => {
    expect(debug.query(By.css('.performer-name')).nativeElement.innerText).toContain(
      component.performers[0].name
    );
  });

  it('Should called onSelected when click in a card', () => {
    expect(debug.query(By.css('a'))).toBeTruthy();
    let card  = fixture.debugElement.nativeElement.querySelector('a');
    card.click();
    fixture.whenStable().then(() => {
      expect(component.onSelected).toHaveBeenCalled();
      expect(component.selected).toBeTrue();
      component.closeDetail();
      let attributes = debug.query(By.css('#container-performer-list')).attributes;
      expect(attributes.hasOwnProperty('hidden')).toBeFalse();
    });
  });
});
