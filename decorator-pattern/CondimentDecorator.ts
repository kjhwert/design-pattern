import { Beverage } from "./Beverage";

// 첨가물(condiment) 추상 클래스(데코레이터 클래스)
export abstract class CondimentDecorator extends Beverage {
  /*
   * 각 데코레이터가 감쌀 음료를 나타내는 Beverage 객체를 여기에서 지정합니다.
   * 음료를 지정할 때는 데코레이터에서 어떤 음료든 감쌀 수 있도록 Beverage 슈퍼클래스 유형을 사용합니다.
   * */
  // @ts-ignore
  public beverage: Beverage;

  public getDescription(): string {
    return super.getDescription();
  }
}

/*
  *Decorator는 component(Beverage)를 상속받을 뿐만 아니라
  component(Beverage)를 내부적으로 가지고 있다.

  deprecation이 쉽다는 말이 조금 이해가 안되는데? 52:00
 */
