import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PerformerListComponent} from './performer-list/performer-list.component';

const routes: Routes = [{
  path: 'performers',
  component: PerformerListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PerformerRoutingModule { }
