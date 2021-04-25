import {Album} from './album';
import {Genre} from './genre.enum';
import {Record_label} from './record_label.enum';

export class AlbumDetail extends Album {
  constructor(
    id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    genre: Genre,
    recordLabel: Record_label
    ) {
    super(id,name,cover,releaseDate,genre,recordLabel);
  }
}




