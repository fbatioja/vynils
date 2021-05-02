import { Component, OnInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import {BandDetail} from '../banddetail';
import {MusicianDetail} from '../musiciandetail';

@Component({
  selector: 'app-performer-list',
  templateUrl: './performer-list.component.html',
  styleUrls: ['./performer-list.component.scss']
})
export class PerformerListComponent implements OnInit {

  constructor(private performerService: PerformerService) { }
  performers: (BandDetail | MusicianDetail)[] = [];
  selected: boolean;
  selectedPerformer: BandDetail | MusicianDetail;

  ngOnInit(): void {
    this.getPerformer();
  }

  getPerformer(): void {
    this.performerService.getBands()
      .subscribe(performers => {
        this.performers = this.performers.concat(performers);
      });

    this.performerService.getMusicians()
      .subscribe(performers => {
        this.performers = this.performers.concat(performers);
      });
  }

  onSelected(performer: BandDetail | MusicianDetail): void {
    this.selected = true;
    this.selectedPerformer = performer;
  }

  closeDetail(): void {
    this.selected = false;
    this.selectedPerformer = null;
  }
}
