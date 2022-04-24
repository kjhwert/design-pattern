import { BeverageCupType, BeverageType, GetBeverage, Size } from "./types";

class Beverage {
  private type: BeverageType = "coke";
  private size: Size = "medium";
  private cup: BeverageCupType = "reusable";

  constructor(type: BeverageType) {
    this.init(type);
  }

  init(type: BeverageType) {
    this.type = type;
  }

  sizeUp() {
    this.size = "large";
  }

  disposableCup() {
    this.cup = "disposable";
  }

  // order 입장에서는 이건 조금 사용하기 불편해. size를 알고 있어야되니까.
  // 하지만 beverage 입장에서는 확장성이 용이하긴한데.. 어렵네
  changeSize(size: Size) {
    this.size = size;
  }

  changeCup(cup: BeverageCupType) {
    this.cup = cup;
  }

  getBeverage(): GetBeverage {
    return {
      type: this.type,
      size: this.size,
      cup: this.cup,
    };
  }
}

export default Beverage;
