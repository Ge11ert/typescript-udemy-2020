import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { Sorter } from './Sorter';

export default function () {
  const numbersCollection = new NumbersCollection([10, 0, 5, -1, 3, -2]);
  const charactersCollection = new CharactersCollection('Xaayb');
  const linkedList = new LinkedList();

  linkedList.add(500);
  linkedList.add(-10);
  linkedList.add(-3);
  linkedList.add(4);

  const numberSorter = new Sorter(numbersCollection);
  const charSorter = new Sorter(charactersCollection);
  const listSorter = new Sorter(linkedList);

  numberSorter.sort();
  charSorter.sort();
  listSorter.sort();
}
