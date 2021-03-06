import { Aggregator, Iterator } from "./types";
import { StringCollection, StringIterator } from "./StringIterator";
import { ProfileCollection, ProfileIterator } from "./ProfileIterator";

class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;
  private position: number;
  private reverse: boolean;

  constructor(collection: WordsCollection, reverse = false) {
    this.collection = collection;
    this.reverse = reverse;
    this.position = reverse ? collection.getCount() - 1 : 0;
  }

  current(): string {
    return this.collection.getItems()[this.position];
  }

  key(): number {
    return this.position;
  }

  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;

    return item;
  }

  rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  hasNext(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

class WordsCollection implements Aggregator<string> {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

// const collection = new StringCollection();
// collection.addItem("abc");
// collection.addItem("ghffgd");
// collection.addItem("efwew");
//
// const iterator = new StringIterator(collection);
// while (iterator.hasNext()) {
//   console.log(iterator.next());
// }

const collection = new ProfileCollection();
collection.addItem({
  id: 1,
  email: "a",
  name: "a",
});
collection.addItem({
  id: 2,
  email: "b",
  name: "b",
});
collection.addItem({
  id: 3,
  email: "c",
  name: "c",
});

const iterator = new ProfileIterator(collection);
while (iterator.hasNext()) {
  console.log(iterator.next());
}

// ?????????????????? ?????? ???????????? ????????? ???????????? ??????, iterator protocol??? ???????????? ????????? ?????? ????????????.
// ?????? ??? ???????????? ?????? ????????????? ??? ????????????...
