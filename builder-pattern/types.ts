export type HamburgerType = "classic" | "1955" | "big mac";
export type BeverageType = "coffee" | "coke" | "zero coke" | "milk shake";
export type Size = "medium" | "large";
export type BeverageCupType = "reusable" | "disposable";
export type SideDishType = "fries" | "cheese fries" | "onion ring";
export type PlaceToEatType = "for here" | "to go";
export type PackageType = "tray" | "paper bag";

export type GetOrder = {
  hamburgers: GetHamburger[];
  beverages: GetBeverage[];
  sideDishes: GetSideDish[];
  package: PackageType;
};

export type HamburgerOption = {
  type: HamburgerType;
  addPatty?: number;
  addBacon?: number;
  addLettuce?: number;
  addTomato?: number;
};

export type GetHamburger = {
  type: HamburgerType;
  patty: number;
  bacon: number;
  lettuce: number;
  tomato: number;
};

export type BeverageOption = {
  type: BeverageType;
};

export type GetBeverage = {
  type: BeverageType;
  size: Size;
  cup: BeverageCupType;
};

export type SideDishOption = {
  type: SideDishType;
};

export type GetSideDish = {
  type: SideDishType;
  size: Size;
};

export type OrderSet = {
  hamburger: HamburgerType;
  beverage?: BeverageType;
  sideDish?: SideDishType;
  placeToEat?: PlaceToEatType;
  size?: Size;
};
