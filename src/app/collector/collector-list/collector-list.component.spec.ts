/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CollectorDetail } from '../collectordetail';
import faker from 'faker';

import { CollectorListComponent } from './collector-list.component';

describe('CollectorListComponent', () => {
  let component: CollectorListComponent;
  let fixture: ComponentFixture<CollectorListComponent>;
  let debug: DebugElement;
  let mockCollectors: Array<CollectorDetail> = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CollectorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorListComponent);
    component = fixture.componentInstance;
    mockCollectors.push(new CollectorDetail(
      1,
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.internet.email(),
      null,
      null,
    ));
    component.collectors = mockCollectors;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have buttons with the prize name', () => {
    const tag = debug.query(By.css('a')).nativeElement;
    expect(tag.innerText).toContain(mockCollectors[0].name);
  });

});
