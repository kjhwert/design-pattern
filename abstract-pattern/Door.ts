import { CarBrand } from "./index";

export class Door {
  public open() {
    return "open door";
  }

  public close() {
    return "close door";
  }
}

export class HyundaiDoor extends Door {}
export class TeslaDoor extends Door {}
export class BMWDoor extends Door {}
export class KiaDoor extends Door {}

export class DoorFactory {
  public static createDoor(brand: CarBrand) {
    let door: Door;
    switch (brand) {
      case "Hyundai":
        door = new HyundaiDoor();
        break;
      case "BMW":
        door = new BMWDoor();
        break;
      case "Tesla":
        door = new TeslaDoor();
        break;
      case "Kia":
        door = new KiaDoor();
        break;
    }

    return door;
  }
}
