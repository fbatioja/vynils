import { Genre } from './genre.enum';
import { Record_label } from './record_label.enum'
import { Band } from '../performer/band';
import { Musician } from '../performer/musician';
import { Track } from '../album/track';

export class Album {
  id: number;
  name: string;
  cover: string;
  description: string;
  releaseDate: Date;
  genre: Genre;
  recordLabel: Record_label;
  performers: (Band | Musician)[];
  tracks : Track[]
  constructor(
    id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    genre: Genre,
    recordLabel: Record_label,
    description: string
  )
  {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.description = description;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.recordLabel = recordLabel;
  }

}
