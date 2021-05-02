import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  @Input() albumDetail: Album;

  constructor() { }

  ngOnInit() {
  }

}
