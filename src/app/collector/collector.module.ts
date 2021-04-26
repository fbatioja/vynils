import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectorListComponent } from './collector-list/collector-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CollectorListComponent],
  exports: [CollectorListComponent]
})
export class CollectorModule { }
