import Order from "./order";

/*
    basic set order
    1955 버거 세트 주세요.
    음료는 제로콜라요.
    먹고 갈게요.
 */
export const orderSetExample = () => {
  const order = new Order();

  order.orderBurgerSet({
    hamburger: "1955",
    beverage: "zero coke",
    placeToEat: "for here",
  });

  order.addHamburger({
    type: "big mac",
  });

  console.log("set order", order.getOrder());
};

export const orderCustomExample = () => {
  const order = new Order();

  order.setPlaceToEat("to go");
  order.sizeUp();

  order
    .addHamburger({
      type: "1955",
    })
    .addHamburger({
      type: "big mac",
      addBacon: 1,
    })
    .addBeverage({
      type: "zero coke",
    })
    .addSideDish({
      type: "fries",
    })
    .getOrder();

  console.log("custom order", order.getOrder());
};

orderSetExample();
orderCustomExample();
