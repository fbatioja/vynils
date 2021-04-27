import { CollectorAlbum } from './collectoralbum';
import { Performer } from '../performer/performer';
import { Collector } from './collector';


export class CollectorDetail extends Collector {
  collectorAlbums: CollectorAlbum[];
  favoritePerformers: Performer[];

  constructor(
    id: number,
    name: string,
    telephone: number,
    email: string,
    collectorAlbums: CollectorAlbum[],
    favoritePerformer: Performer[]
    ) {
    super(id, name, telephone, email);
    this.collectorAlbums = collectorAlbums;
    this.favoritePerformers = favoritePerformer;
    }
}
