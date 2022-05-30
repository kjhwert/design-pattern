/*
    Menu와 MenuItem 모두에게 적용되는 인터페이스
 */

export abstract class Component {
  getName() {}
  getDescription() {}
  getPrice() {}
  print() {}
}

export class Menu extends Component {
  getName() {
    super.getName();
  }

  getDescription() {
    super.getDescription();
  }

  getPrice() {
    super.getPrice();
  }

  print() {
    super.print();
  }
}
