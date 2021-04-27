import { Component, OnInit } from '@angular/core';
import { CollectorService } from '../collector.service';
import { CollectorDetail } from '../collectordetail';

@Component({
  selector: 'app-collector-list',
  templateUrl: './collector-list.component.html',
  styleUrls: ['./collector-list.component.css']
})
export class CollectorListComponent implements OnInit {

  constructor(private collectorService: CollectorService) { }
  collectors: Array<CollectorDetail>

  ngOnInit() {
    this.getCollectors();
  }

  getCollectors(): void {
    this.collectorService.getCollectors()
      .subscribe(collectors => {
        this.collectors = collectors;
      });
  }

}
