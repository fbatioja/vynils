import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumRoutingModule } from './album-routing.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumListComponent, AlbumDetailComponent ],
  exports: [AlbumListComponent,AlbumRoutingModule],
})
export class AlbumModule { }
