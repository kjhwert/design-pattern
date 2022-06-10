import { Espresso } from "./Beverage/Espresso";
import { Mocha } from "./Condiment/Mocha";
import { Soy } from "./Condiment/Soy";

const beverageOrder = () => {
  let beverage = new Espresso();
  beverage.setSize("venti");
  beverage = new Mocha(beverage);
  beverage = new Mocha(beverage);
  beverage = new Mocha(beverage);
  beverage = new Soy(beverage);

  // console.log(beverage.getDescription());
  // console.log(beverage.cost());
};

(() => {
  const beverage = new Espresso();
  beverage.setSize("grande");

  const result = new Soy(new Mocha(new Mocha(beverage)));
  console.log("grande", result.cost());
})();

/*
  decorator는 실행 중에도 유연하게 변경할 수 있지만,
  builder는 컴파일 시에 정적으로 결정된다.
 */

beverageOrder();
