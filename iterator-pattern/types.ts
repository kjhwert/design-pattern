export interface Iterator<T> {
  current(): T;
  next(): T;
  key(): number;
  hasNext(): boolean;
  rewind(): void;
}

export interface Aggregator<T> {
  getItems(): T[];
  getCount(): number;
  addItem(item: T): void;
  getIterator(): Iterator<T>;
}
