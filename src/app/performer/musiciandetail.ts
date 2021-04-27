import {Musician} from './musician';
import {Album} from '../album/album';
import {PerformerPrizes} from '../prize/prizedetail';

export class MusicianDetail extends Musician {
  albums: Album[];
  performerPrizes: PerformerPrizes[];

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    creationDate: Date,
    albums: Album[],
    performerPrizes: PerformerPrizes[]) {
    super(id, name, image, description, creationDate);
    this.albums = albums;
    this.performerPrizes = performerPrizes;
  }
}
