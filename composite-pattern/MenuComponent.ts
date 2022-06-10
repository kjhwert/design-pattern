export abstract class MenuComponent {
  public name?: string;
  public description?: string;
  public vegetarian?: boolean;
  public price?: number;

  isComposite(): boolean {
    return false;
  }

  add(menuComponent: MenuComponent): void {
    throw new Error("unsupported operation exception");
  }
  remove(menuComponent: MenuComponent): void {
    throw new Error("unsupported operation exception");
  }
  getName(): string {
    throw new Error("unsupported operation exception");
  }
  getDescription(): string {
    throw new Error("unsupported operation exception");
  }
  getPrice(): number {
    throw new Error("unsupported operation exception");
  }
  isVegetarian(): boolean {
    throw new Error("unsupported operation exception");
  }
  print(): void {
    throw new Error("unsupported operation exception");
  }
}
