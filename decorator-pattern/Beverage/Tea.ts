import { Beverage } from "../Beverage";

class Chamomile extends Beverage {
  constructor() {
    super();
    this.description = "캐모마일";
  }

  cost(): number {
    return 3.0;
  }
}

class EarlGrey extends Beverage {
  constructor() {
    super();
    this.description = "얼그레이";
  }

  cost(): number {
    return 2.5;
  }
}
