import {Performer} from './performer';

export class Band implements Performer {
  id: number;
  name: string;
  image: string;
  description: string;
  creationDate: Date;

  constructor(id: number, name: string, image: string, description: string, creationDate: Date) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.creationDate = creationDate;
  }
}
