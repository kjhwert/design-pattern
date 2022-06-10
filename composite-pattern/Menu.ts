import { MenuComponent } from "./MenuComponent";

export class Menu extends MenuComponent {
  public menuComponents: MenuComponent[] = [];

  public name = "";
  public description = "";

  constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent) {
    this.menuComponents = this.menuComponents.filter(
      (prevMenu) => prevMenu.name !== menuComponent.name
    );
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  isComposite(): boolean {
    return true;
  }

  print() {
    console.log(`${this.getName()}, ${this.getDescription()}`);
    console.log(`-------------------------------------------`);

    this.menuComponents.forEach((menuComponent) => menuComponent.print());
  }
}
