import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CollectorDetail } from '../collectordetail';
import { CollectorAlbum } from '../collectoralbum';
import { PerfomerDetail } from '../../performer/performerdetail';
import { CollectorService } from '../collector.service';
@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {

  @Input() collectorDetail: CollectorDetail;
  @Output()
  closeDetail = new EventEmitter<void>();

  collectorAlbums: CollectorAlbum[] = [];
  collectorPerformers: PerfomerDetail[] = [];

  constructor(private collectorService: CollectorService) { }

  ngOnInit(): void {
    console.log(this.collectorDetail.id);
    this.getCollectorAlbums();
    this.getCollectorPerformers();
  }

  getCollectorAlbums(): void {
    this.collectorService.getCollectorAlbums(this.collectorDetail.id)
    .subscribe(albums => {
      this.collectorAlbums = albums;
    });
  }

  getCollectorPerformers(): void {
    this.collectorService.getCollectorPerformers(this.collectorDetail.id)
    .subscribe(performer => {
      this.collectorPerformers = performer;
      console.log(performer);
    });
  }

  onClose(): void {
    this.closeDetail.emit();
  }

}
