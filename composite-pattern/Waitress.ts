import { MenuComponent } from "./MenuComponent";

export class Waitress {
  public allMenu: MenuComponent;

  constructor(menuComponents: MenuComponent) {
    this.allMenu = menuComponents;
  }

  printMenu() {
    this.allMenu.print();
  }
}
