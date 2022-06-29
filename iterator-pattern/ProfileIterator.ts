import { Aggregator, Iterator } from "./types";

interface Profile {
  id: number;
  email: string;
  name: string;
}

export class ProfileIterator implements Iterator<Profile> {
  private collection: ProfileCollection;
  private position: number;

  constructor(collection: ProfileCollection) {
    this.collection = collection;
    this.position = 0;
  }

  current(): Profile {
    return this.collection.getItems()[this.position];
  }

  hasNext(): boolean {
    return this.collection.getCount() > this.position;
  }

  key(): number {
    return this.position;
  }

  next(): Profile {
    const item = this.collection.getItems()[this.position];
    this.position += 1;
    return item;
  }

  rewind(): void {}
}

export class ProfileCollection implements Aggregator<Profile> {
  private items: Profile[] = [];

  getItems() {
    return this.items;
  }

  addItem(profile: Profile) {
    this.items.push(profile);
  }

  getCount(): number {
    return this.items.length;
  }

  getIterator(): Iterator<Profile> {
    return new ProfileIterator(this);
  }
}
