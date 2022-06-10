import { Beverage } from "../Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "에스프레소";
  }

  cost() {
    return 1.99;
  }
}
