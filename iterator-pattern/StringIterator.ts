import { Aggregator, Iterator } from "./types";

export class StringIterator implements Iterator<string> {
  private collection: StringCollection;
  private position: number;

  constructor(collection: StringCollection) {
    this.collection = collection;
    this.position = 0;
  }

  current(): string {
    return this.collection.getItems()[this.position];
  }

  hasNext(): boolean {
    return this.collection.getCount() > this.position;
  }

  key(): number {
    return this.position;
  }

  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += 1;

    return item;
  }

  rewind() {}
}

export class StringCollection implements Aggregator<string> {
  private items: string[] = [];

  getItems(): string[] {
    return this.items;
  }

  getCount(): number {
    return this.items.length;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  getIterator(): Iterator<string> {
    return new StringIterator(this);
  }
}
