import { GetHamburger, HamburgerType } from "./types";

class Hamburger {
  private type: HamburgerType = "classic";
  private bacon = 0;
  private patty = 0;
  private lettuce = 0;
  private tomato = 0;

  constructor(type: HamburgerType) {
    this.init(type);
  }

  init(type: HamburgerType) {
    this.type = type;
    switch (type) {
      case "1955":
        this.bacon = 1;
        this.patty = 1;
        this.lettuce = 1;
        this.tomato = 1;
        break;
      case "big mac":
        this.patty = 2;
        this.lettuce = 1;
        this.tomato = 1;
        break;
      default:
        this.patty = 1;
        this.lettuce = 1;
        this.tomato = 1;
    }
  }

  addPatty(qty: number) {
    this.patty += qty;
  }

  addBacon(qty: number) {
    this.bacon += qty;
  }

  addLettuce(qty: number) {
    this.lettuce += qty;
  }

  addTomato(qty: number) {
    this.tomato += qty;
  }

  getHamburger(): GetHamburger {
    return {
      type: this.type,
      patty: this.patty,
      bacon: this.bacon,
      lettuce: this.lettuce,
      tomato: this.tomato,
    };
  }
}

export default Hamburger;
