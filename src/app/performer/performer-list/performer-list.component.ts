import { Component, OnInit } from '@angular/core';
import { PerformerService } from '../performer.service';
import { Band } from '../band';
import { Musician } from '../musician';

@Component({
  selector: 'app-performer-list',
  templateUrl: './performer-list.component.html',
  styleUrls: ['./performer-list.component.scss']
})
export class PerformerListComponent implements OnInit {

  constructor(private performerService: PerformerService) { }
  performers: (Band | Musician)[]=[];

  ngOnInit() {
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
}
