import { CondimentDecorator } from "../CondimentDecorator";
import { Beverage } from "../Beverage";

export class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", 두유";
  }

  cost(): number {
    let result = this.beverage.cost();

    switch (this.beverage.getSize()) {
      case "tall":
        result += 0.5;
        break;
      case "grande":
        result += 1.0;
        break;
      case "venti":
        result += 1.5;
        break;
    }

    return result;
  }
}
