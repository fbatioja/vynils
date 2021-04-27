import { Component, OnInit } from '@angular/core';
import {PrizeService} from '../prize.service';
import {PrizeDetail} from '../prizedetail';

@Component({
  selector: 'app-prizes-list',
  templateUrl: './prizes-list.component.html',
  styleUrls: ['./prizes-list.component.css']
})
export class PrizesListComponent implements OnInit {
  prizes: Array<PrizeDetail>;

  constructor(private prizeService: PrizeService) { }

  ngOnInit(): void {
    this.getPrizes();
  }

  getPrizes(): void {
    this.prizeService.getPrizes().subscribe(prizes => {
      this.prizes = prizes;
    });
  }
}
