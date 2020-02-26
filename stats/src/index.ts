import path from 'path';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Winner } from './MatchResult';
import { Match } from './Match';

const sourceFile = 'football.csv';
const sourceFilePath = path.resolve(__dirname, `../${sourceFile}`);

const csvFileReader = new CsvFileReader(sourceFilePath);
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

/// main part
let manUnitedWins = 0;
let data;

data = matchReader.matches;

data.forEach((match: Match) => {
  if (match[1] === 'Man United' && match[5] === Winner.HOME) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === Winner.AWAY) {
    manUnitedWins++;
  }
});

console.log(`Manchester United won ${manUnitedWins} games`);
