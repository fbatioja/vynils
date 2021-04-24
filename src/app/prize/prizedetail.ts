import {Prize} from './prize';

export class PrizeDetail extends Prize {
  performerPrizes: Array<PerformerPrizes>;

  constructor(
    id: number,
    organization: string,
    name: string,
    description: string,
    performerPrizes: Array<PerformerPrizes>
  ) {
    super(id, organization, name, description);
    this.performerPrizes = performerPrizes;
  }
}

export class PerformerPrizes {
  id: number;
  premiationDate: string;

  constructor(id: number, premiationDate: string) {
    this.id = id;
    this.premiationDate = premiationDate;
  }
}
