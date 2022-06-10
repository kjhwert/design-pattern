import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
  public name = "";
  public description = "";
  public price = 0;
  public vegetarian = false;

  constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  isVegetarian(): boolean {
    return this.vegetarian;
  }

  print() {
    console.log(
      `${this.getName()}, ${this.getDescription()}, ${this.getPrice()}, is Vegetarian? ${this.isVegetarian()}`
    );
  }
}
