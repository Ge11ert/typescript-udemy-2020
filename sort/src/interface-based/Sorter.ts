interface Sortable {
  length: number;
  compare(i: number, j: number): boolean;
  swap(i: number, j: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1);
        }
      }
    }
  }
}
