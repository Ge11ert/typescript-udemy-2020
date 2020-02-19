import fs from 'fs';
import { dateStringToDate } from './utils';
import { Winner } from './MatchResult';

export type Match = [
  Date,
  string,
  string,
  number,
  number,
  Winner,
  string,
];

export class CsvFileReader {
  data: Match[] = [];

  constructor(public pathToFile: string) {}

  read(): void {
    this.data = fs.readFileSync(this.pathToFile, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): Match => (
        [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 10),
          parseInt(row[4], 10),
          row[5] as Winner,
          row[6],
        ]
      ))
  }
}
