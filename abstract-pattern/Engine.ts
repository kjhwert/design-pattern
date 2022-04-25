import { CarBrand } from "./index";

export class Engine {
  public run() {
    return "run engine";
  }

  public stop() {
    return "stop engine";
  }
}

export class HyundaiEngine extends Engine {}
export class TeslaEngine extends Engine {}
export class BMWEngine extends Engine {}
export class KiaEngine extends Engine {}

export class EngineFactory {
  public static createEngine(brand: CarBrand) {
    let engine: Engine;
    switch (brand) {
      case "Hyundai":
        engine = new HyundaiEngine();
        break;
      case "BMW":
        engine = new BMWEngine();
        break;
      case "Tesla":
        engine = new TeslaEngine();
        break;
      case "Kia":
        engine = new KiaEngine();
    }

    return engine;
  }
}
