import {Performer} from './performer';

export class Musician implements Performer {
  name: string;
  image: string;
  description: string;
  birthDate: Date;
  id: number;

  constructor(id: number, name: string, image: string, description: string, birthDate: Date) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.birthDate = birthDate;
  }
}
