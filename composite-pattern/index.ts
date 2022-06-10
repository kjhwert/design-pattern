import { Waitress } from "./Waitress";
import { MenuItem } from "./MenuItem";
import { Menu } from "./Menu";

export function client() {
  const pancakeMenu = new Menu("팬케이크 하우스 메뉴", "아침 메뉴");
  const dinnerMenu = new Menu("객체마을 식당 메뉴", "점심 메뉴");
  dinnerMenu.add(
    new MenuItem(
      "파스타",
      "마리나라 소스 스파게티, 효모빵도 드립니다.",
      true,
      33.89
    )
  );
  const cafeMenu = new Menu("카페 메뉴", "저녁 메뉴");
  const dessertMenu = new Menu("디저트 메뉴", "디저트를 즐겨보세요");
  dessertMenu.add(
    new MenuItem(
      "애플 파이",
      "바삭바삭한 크러스트에 바닐라 아이스크림이 얹혀 있는 애플 파이",
      true,
      1.59
    )
  );

  const allMenu = new Menu("전체 메뉴", "전체 메뉴");

  allMenu.add(pancakeMenu);
  allMenu.add(dinnerMenu);
  allMenu.add(cafeMenu);
  allMenu.add(dessertMenu);

  const waitress = new Waitress(allMenu);
  waitress.printMenu();
  /*
    여기 예시로는 printMenu로 모든 노드의 print method를 호출할 수 있어서 좋은데, 복합 객체, 잎 객체 모두에게 선언되어 있는 메소드 말고,
    복합객체에만 선언되어 있는 메소드를 호출해야 할 경우에는 꼭 isComposite 메소드로 확인을 한 후 메소드 호출을 진행해야 한다.
   */
}

client();
