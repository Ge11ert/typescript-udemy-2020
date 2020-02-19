import { dateStringToDate } from './utils';
import { Winner } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

type Match = [
  Date,
  string,
  string,
  number,
  number,
  Winner,
  string,
];

export class MatchReader_Interface {
  matches: Match[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): Match => (
      [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3], 10),
        parseInt(row[4], 10),
        row[5] as Winner,
        row[6],
      ]
    ));
  }
}
