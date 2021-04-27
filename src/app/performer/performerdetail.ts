import { Performer } from './performer';

export class PerfomerDetail implements Performer{
  id: number;
  name: string;
  image: string;
  description: string;
  birthDate: Date;
  creationDate: Date;

  constructor(
      id: number,
      name: string,
      image: string,
      description: string,
      birthDate?: Date,
      creationDate?: Date
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;

    if(birthDate)
      this.birthDate = birthDate;

    if(creationDate)
      this.creationDate = birthDate;

  }
}


