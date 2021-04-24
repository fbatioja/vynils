import {Album} from './album';
import {Track} from './track';
import {Genre} from './genre.enum';
import {Record_label} from './record_label.enum'

export class AlbumDetail extends Album {
  private tracksAlbum: Array<Track>;

  constructor(
    id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    genre: Genre,
    recordLabel: Record_label,
    tracks?: Array<Track>) {
    super(id,name,cover,releaseDate,genre,recordLabel);

    this.tracksAlbum = tracks;
  }

  get tracks(): Array<Track> { return this.tracksAlbum; }
  set tracks(tracks) { this.tracksAlbum = tracks; }
}




