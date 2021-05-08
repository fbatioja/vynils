import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './performer-list/performer-list.component'
import {PerformerDetailComponent} from './performer-detail/performer-detail.component';
import {PerformerRoutingModule} from './performer-routing.module';

@NgModule({
  declarations: [
    PerformerListComponent, PerformerDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PerformerListComponent, PerformerRoutingModule],
})
export class PerformerModule { }
