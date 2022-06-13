export class TreeType {
  public name: string;
  public color: string;
  public texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas: string, x: number, y: number) {
    console.log(canvas, x, y);
  }
}

class TreeFactory {
  static treeTypes: TreeType[] = [];
  static getTreeType(name: string, color: string, texture: string) {
    let type = this.treeTypes.find((treeType) => treeType.name === name);
    if (!type) {
      type = new TreeType(name, color, texture);
      this.treeTypes.push(type);
    }

    return type;
  }
}

class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas: string) {
    this.type.draw(canvas, this.x, this.y);
  }
}

// Cilent
class Forest {
  public trees: Tree[] = [];

  plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ) {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas: string) {
    return this.trees.forEach((tree) => tree.draw(canvas));
  }
}

const client = new Forest();
client.plantTree(10, 20, "소나무", "초록색", "몰라");
client.plantTree(10, 40, "고동나무", "감자색", "몰라");
client.plantTree(40, 20, "모잉나무", "미오색", "몰라");
client.draw("칸바스다~~");
