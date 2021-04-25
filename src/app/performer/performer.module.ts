import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformerListComponent } from './performer-list/performer-list.component'

@NgModule({
  declarations: [PerformerListComponent],
  imports: [
    CommonModule
  ],
  exports: [PerformerListComponent],
})
export class PerformerModule { }
