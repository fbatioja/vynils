/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PerformerListComponent } from './performer-list.component';
import { PerfomerDetail } from '../performerdetail';
import { HttpClientModule } from '@angular/common/http';
import faker from 'faker';

describe('PerformerListComponent', () => {
  let component: PerformerListComponent;
  let fixture: ComponentFixture<PerformerListComponent>;
  let debug: DebugElement;
  let mockPrizes: Array<PerfomerDetail>;

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
    mockPrizes = [];
    mockPrizes.push(new PerfomerDetail(
      1,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    ));
    component.performers = mockPrizes;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should have an performer element ", () => {
    expect(debug.query(By.css(".performer-name")).nativeElement.innerText).toContain(
      component.performers[0].name
    );
  });

});
