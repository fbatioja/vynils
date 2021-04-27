import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizesListComponent } from './prizes-list.component';
import { HttpClientModule } from '@angular/common/http';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {PrizeDetail} from '../prizedetail';
import faker from 'faker';

describe('PrizesListComponent', () => {
  let component: PrizesListComponent;
  let fixture: ComponentFixture<PrizesListComponent>;
  let debug: DebugElement;
  let mockPrizes: Array<PrizeDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PrizesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizesListComponent);
    component = fixture.componentInstance;
    mockPrizes = [];
    mockPrizes.push(new PrizeDetail(
      1,
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      null
    ));
    component.prizes = mockPrizes;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have an h2 tag', () => {
    expect(debug.query(By.css('h2')).nativeElement.innerText).toBe('Lista de premios');
  });

  it('Should have buttons with the prize name', () => {
    const tag = debug.query(By.css('.card h2 button')).nativeElement;
    expect(tag.innerText).toContain(mockPrizes[0].name);
  });
});
