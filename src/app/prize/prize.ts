export class Prize {
  id: number;
  organization: string;
  name: string;
  description: string;

  constructor(
    id: number,
    organization: string,
    name: string,
    description: string
  ) {
    this.id = id;
    this.organization = organization;
    this.name = name;
    this.description = description;
  }
}
