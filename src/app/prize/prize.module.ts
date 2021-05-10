import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizesListComponent } from './prizes-list/prizes-list.component';
import {PrizeRoutingModule} from './prize-routing.module';



@NgModule({
  declarations: [PrizesListComponent],
  exports: [
    PrizesListComponent,
    PrizeRoutingModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrizeModule { }
