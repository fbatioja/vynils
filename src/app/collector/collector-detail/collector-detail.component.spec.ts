/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CollectorDetail } from '../collectordetail';
import faker from 'faker';
import { CollectorDetailComponent } from './collector-detail.component';

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;
  let debug: DebugElement;
  let mockCollectors: CollectorDetail;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ CollectorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;
    mockCollectors = new CollectorDetail(
      1,
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.internet.email(),
      null,
      null,
    );
    component.collectorDetail = mockCollectors;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have title with the collector name', () => {
    const tag = debug.query(By.css('h3')).nativeElement;
    expect(tag.innerText).toContain(mockCollectors.name);
  });

});
