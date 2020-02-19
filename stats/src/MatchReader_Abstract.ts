import { CsvFileReader_Abstract } from './CsvFileReader_Abstract';
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

export class MatchReader_Abstract extends CsvFileReader_Abstract<Match> {
  mapRow(row: string[]): Match {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3], 10),
      parseInt(row[4], 10),
      row[5] as Winner,
      row[6],
    ];
  }
}
