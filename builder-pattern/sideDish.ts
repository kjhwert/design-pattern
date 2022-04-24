import { GetSideDish, SideDishType, Size } from "./types";

class SideDish {
  private type: SideDishType = "fries";
  private size: Size = "medium";

  constructor(type: SideDishType) {
    this.init(type);
  }

  init(type: SideDishType) {
    this.type = type;
  }

  sizeUp() {
    this.size = "large";
  }

  getSideDish(): GetSideDish {
    return {
      type: this.type,
      size: this.size,
    };
  }
}

export default SideDish;
