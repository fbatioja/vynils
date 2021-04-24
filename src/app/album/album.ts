import { Genre } from './genre.enum';
import { Record_label } from './record_label.enum'

export class Album {
  private id: number;
  private name: string;
  private cover: string;
  private releaseDate: Date;
  private genre: Genre;
  private recordLabel: Record_label;

  constructor(
    id: number,
    name: string,
    cover: string,
    releaseDate: Date,
    genre: Genre,
    recordLabel: Record_label,
  ) {
    this.id = id;
    this.name = name;
    this.cover = cover;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.recordLabel = recordLabel;
  }

}
