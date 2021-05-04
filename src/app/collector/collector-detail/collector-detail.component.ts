import { Component, Input, OnInit, Output } from '@angular/core';
import { CollectorDetail } from '../collectordetail';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.css']
})
export class CollectorDetailComponent implements OnInit {

  @Input() collectorDetail: CollectorDetail;
  // @Output()
  // closeDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log(this.collectorDetail.id);
  }

  // onClose(): void {
  //   this.closeDetail.emit();
  // }

}
