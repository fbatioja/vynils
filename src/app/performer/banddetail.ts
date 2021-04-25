import {Band} from './band';
import {Musician} from './musician';
import {Album} from '../album/album';
import {PerformerPrizes} from '../prize/prizedetail';

export class BandDetail extends Band {
  musicians: Musician[];
  albums: Album[];
  performerPrizes: PerformerPrizes[];

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    creationDate: Date,
    musicians: Musician[],
    albums: Album[],
    performerPrizes: PerformerPrizes[]) {
    super(id, name, image, description, creationDate);
    this.musicians = musicians;
    this.albums = albums;
    this.performerPrizes = performerPrizes;
  }
}
