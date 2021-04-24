import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizesListComponent } from './prizes-list/prizes-list.component';



@NgModule({
  declarations: [PrizesListComponent],
  exports: [
    PrizesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrizeModule { }
