import Hamburger from "./hamburger";
import {
  BeverageOption,
  GetOrder,
  HamburgerOption,
  OrderSet,
  PackageType,
  PlaceToEatType,
  SideDishOption,
  Size,
} from "./types";
import Beverage from "./beverage";
import SideDish from "./sideDish";

class Order {
  private hamburgers: Hamburger[] = [];
  private beverages: Beverage[] = [];
  private sideDishes: SideDish[] = [];

  private placeToEat: PlaceToEatType = "for here";
  private size: Size = "medium";
  private package: PackageType = "tray";

  constructor() {
    this.reset();
  }

  public addHamburger(option: HamburgerOption) {
    const hamburger = new Hamburger(option.type);

    option.addPatty && hamburger.addPatty(option.addPatty);
    option.addBacon && hamburger.addBacon(option.addBacon);
    option.addTomato && hamburger.addTomato(option.addTomato);
    option.addLettuce && hamburger.addLettuce(option.addLettuce);

    this.hamburgers.push(hamburger);

    return this;
  }

  public addBeverage(option: BeverageOption) {
    const beverage = new Beverage(option.type);

    this.isSizeUp() && beverage.sizeUp();
    this.isPlaceToGo() && beverage.disposableCup();

    this.beverages.push(beverage);

    return this;
  }

  public addSideDish(option: SideDishOption) {
    const sideDish = new SideDish(option.type);

    this.isSizeUp() && sideDish.sizeUp();

    this.sideDishes.push(sideDish);

    return this;
  }

  /*
    햄버거 옵션 추가는 불가능
    사이즈, 포장여부만 선택 가능
   */
  public orderBurgerSet({
    hamburger,
    placeToEat = "for here",
    beverage = "coke",
    sideDish = "fries",
    size = "medium",
  }: OrderSet) {
    this.setPlaceToEat(placeToEat);
    if (size === "large") {
      this.sizeUp();
    }

    this.addHamburger({ type: hamburger });
    this.addBeverage({ type: beverage });
    this.addSideDish({ type: sideDish });
  }

  public setPlaceToEat(placeToEat: PlaceToEatType) {
    if (placeToEat === "to go") {
      this.package = "paper bag";
    }

    this.placeToEat = placeToEat;
  }

  public sizeUp() {
    this.size = "large";
  }

  public getOrder(): GetOrder {
    const result = {
      hamburgers: this.hamburgers.map((hamburger) => hamburger.getHamburger()),
      beverages: this.beverages.map((beverage) => beverage.getBeverage()),
      sideDishes: this.sideDishes.map((sideDish) => sideDish.getSideDish()),
      package: this.package,
    };

    this.reset();
    return result;
  }

  private isSizeUp(): boolean {
    return this.size === "large";
  }

  private isPlaceToGo(): boolean {
    return this.placeToEat === "to go";
  }

  private reset() {
    this.hamburgers = [];
    this.beverages = [];
    this.sideDishes = [];
    this.placeToEat = "for here";
    this.size = "medium";
    this.package = "tray";
  }
}

export default Order;
