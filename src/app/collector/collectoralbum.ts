
import {Album} from '../album/album';

export class CollectorAlbum {
  id: number;
  album: Album;
  price: number;
  status: number;

  constructor(
  id: number,
  album: Album,
  price: number,
  status: number
  ){
    this.id = id;
    this.album = album;
    this.price = price;
    this.status = status;
  }

}

