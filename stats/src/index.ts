import path from 'path';
import { CsvFileReader } from './CsvFileReader';

enum Winner {
  HOME = 'H',
  AWAY = 'A',
  DRAW = 'D',
}

const sourceFile = 'football.csv';
const sourceFilePath = path.resolve(__dirname, `../${sourceFile}`);
const reader = new CsvFileReader(sourceFilePath);
reader.read();

let manUnitedWins = 0;

reader.data.forEach((match: string[]) => {
  if (match[1] === 'Man United' && match[5] === Winner.HOME) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === Winner.AWAY) {
    manUnitedWins++;
  }
});

console.log(`Manchester United won ${manUnitedWins} games`);
