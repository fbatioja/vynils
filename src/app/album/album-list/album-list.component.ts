import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { AlbumDetail } from '.././albumdetail';
import { Album } from '../album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  constructor(private albumService: AlbumService) { }
  albums: Array<AlbumDetail>;
  selected = false;
  selectedAlbum: Album;

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAlbums()
      .subscribe(albums => {
        this.albums = albums;
      });
  }

  onSelected(album: Album): void {
    this.selected = true;
    this.selectedAlbum = album;
  }

  closeDetail(): void {
    this.selected = false;
  }

}
