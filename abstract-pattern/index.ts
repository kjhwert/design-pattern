import {
  BMWGearBox,
  Gearbox,
  GearboxFactory,
  HyundaiGearBox,
  TeslaGearBox,
} from "./Gearbox";
import {
  BMWEngine,
  Engine,
  EngineFactory,
  HyundaiEngine,
  TeslaEngine,
} from "./Engine";

export type CarBrand = "Hyundai" | "Tesla" | "BMW";

const hyundaiGearBox = GearboxFactory.createGearBox("Hyundai");
const hyundaiEngine = EngineFactory.createEngine("Hyundai");
const hyundaiDoor = DoorFactory.createDoor("Hyundai");

hyundaiGearBox.drive();
hyundaiEngine.run();
hyundaiDoor.open();

/*
    단점
    1. 제조사가 많아지면 모든 부품에 제조사별 case문을 추가해야 한다.
    2. 부품이 많아지면 factory에 제조사별로 case문을 작성해야 한다.

    -> 각각의 부품을 생성하는걸 추상화하고, 브랜드 별로 해당 추상화를 implements해서 사용하면 훨씬 시간이 절감될 수 있다.
 */

interface CarFactory {
  createGearBox(): Gearbox;
  createEngine(): Engine;
  createDoor(): Door;
}

class HyundaiFactory implements CarFactory {
  public createEngine(): Engine {
    return new HyundaiEngine();
  }

  public createGearBox(): Gearbox {
    return new HyundaiGearBox();
  }
}

class TeslaFactory implements CarFactory {
  public createEngine(): Engine {
    return new TeslaEngine();
  }

  public createGearBox(): Gearbox {
    return new TeslaGearBox();
  }
}

class BMWFactory implements CarFactory {
  public createEngine(): Engine {
    return new BMWEngine();
  }

  public createGearBox(): Gearbox {
    return new BMWGearBox();
  }
}

function createCar(brand: CarBrand) {
  let factory: CarFactory;
  switch (brand) {
    case "Hyundai":
      factory = new HyundaiFactory();
      break;
    case "Tesla":
      factory = new TeslaFactory();
      break;
    case "BMW":
      factory = new BMWFactory();
      break;
  }

  const engine = factory.createEngine();
  const gearBox = factory.createGearBox();
  const door = factory.createDoor();
}

/*
    door가 추가된다고 했을때, 이전 코드와 abstract pattern을 적용한 코드가 훨씬 효율적이라고 말할 수 있을까?.. 잘 모르겠는데
 */
