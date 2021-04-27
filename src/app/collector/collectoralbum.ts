import {Album_status} from './album_status.enum';
import {Album} from '../album/album';

export class CollectorAlbum {
  id: number;
  album: Album;
  price: number;
  status: Album_status;

  constructor(
  id: number,
  album: Album,
  price: number,
  status: Album_status
  ){
    this.id = id;
    this.album = album;
    this.price = price;
    this.status = status;
  }

}

