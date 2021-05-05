import { Component, OnInit } from '@angular/core';
import { Collector } from '../collector';
import { CollectorService } from '../collector.service';
import { CollectorDetail } from '../collectordetail';

@Component({
  selector: 'app-collector-list',
  templateUrl: './collector-list.component.html',
  styleUrls: ['./collector-list.component.css']
})
export class CollectorListComponent implements OnInit {

  constructor(private collectorService: CollectorService) { }
  collectors: Array<CollectorDetail>;
  selected = false;
  selectedCollector: Collector;

  ngOnInit(): void {
    this.getCollectors();
  }

  getCollectors(): void {
    this.collectorService.getCollectors()
      .subscribe(collectors => {
        this.collectors = collectors;
      });
  }

  onSelected(collector: Collector): void {
    this.selected = true;
    this.selectedCollector = collector;
  }

  closeDetail(): void {
    this.selected = false;
  }

}
