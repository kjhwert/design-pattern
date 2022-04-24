export interface Beverage {
  shot: number;
  syrup: boolean;
  topping?: Topping;
  drizzle?: Drizzle;
  whipping?: Whipping;
  order(): Omit<Beverage, "order">;
}

type Topping = "Java Chip" | "Espresso Chip";
type Drizzle = "Caramel" | "Chocolate";
type Whipping = "Normal" | "Espresso";

const beverage: Beverage = {
  shot: 1,
  syrup: false,
  order() {
    const { order, ...rest } = this;
    return rest;
  },
};

const beverageWithDecorate = (
  beverage: Beverage,
  args: Partial<Beverage>
): Beverage => {
  return {
    ...beverage,
    ...args,
  };
};

const topping = beverageWithDecorate(beverage, { topping: "Java Chip" });
const drizzle = beverageWithDecorate(topping, { drizzle: "Caramel" });
const result = beverageWithDecorate(drizzle, { whipping: "Normal" });

console.log(result.order());
