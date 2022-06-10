import { CondimentDecorator } from "../CondimentDecorator";
import { Beverage, BeverageSize } from "../Beverage";

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", 모카";
  }

  getSize(): BeverageSize {
    return this.beverage.getSize();
  }

  cost() {
    return this.beverage.cost() + 0.2;
  }
}
