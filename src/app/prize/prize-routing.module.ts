import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrizesListComponent} from './prizes-list/prizes-list.component';

const routes: Routes = [{
  path: 'prizes',
  component: PrizesListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PrizeRoutingModule { }
