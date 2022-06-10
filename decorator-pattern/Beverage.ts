export type BeverageSize = "tall" | "grande" | "venti";

export abstract class Beverage {
  public description = "제목 없음";
  public size: BeverageSize = "tall";

  public getDescription() {
    return this.description;
  }

  public setSize(size: BeverageSize) {
    this.size = size;
  }

  public getSize(): BeverageSize {
    return this.size;
  }

  public cost(): number {
    return 0;
  }
}
