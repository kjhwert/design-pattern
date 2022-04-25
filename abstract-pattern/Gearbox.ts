import { CarBrand } from "./index";

export class Gearbox {
  public parking() {
    return "parking";
  }

  public reverse() {
    return "reverse";
  }

  public neutral() {
    return "neutral";
  }

  public drive() {
    return "drive";
  }
}

export class HyundaiGearBox extends Gearbox {}
export class TeslaGearBox extends Gearbox {}
export class BMWGearBox extends Gearbox {}
export class KiaGearBox extends Gearbox {}

export class GearboxFactory {
  public static createGearBox(brand: CarBrand) {
    let gearBox: Gearbox;
    switch (brand) {
      case "Hyundai":
        gearBox = new HyundaiGearBox();
        break;
      case "BMW":
        gearBox = new BMWGearBox();
        break;
      case "Tesla":
        gearBox = new TeslaGearBox();
        break;
      case "Kia":
        gearBox = new KiaGearBox();
        break;
    }

    return gearBox;
  }
}
