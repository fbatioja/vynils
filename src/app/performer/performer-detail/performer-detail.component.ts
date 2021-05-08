import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PerformerService} from '../performer.service';
import {BandDetail} from '../banddetail';
import {MusicianDetail} from '../musiciandetail';

@Component({
  selector: 'app-performer-detail',
  templateUrl: './performer-detail.component.html',
  styleUrls: ['./performer-detail.component.css']
})
export class PerformerDetailComponent implements OnInit {
  @Input() performerDetail: BandDetail | MusicianDetail = null;
  @Output()
  closeDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeDetail.emit();
  }

  @Output()
  getTypeObject(){
    console.log(typeof this.performerDetail)
  }
}
