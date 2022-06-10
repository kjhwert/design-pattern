import { Beverage } from "../Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "하우스 블렌드 커피";
  }

  cost() {
    return 0.89;
  }
}
