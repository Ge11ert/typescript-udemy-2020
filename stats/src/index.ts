import path from 'path';
import { MatchReader_Abstract, Match } from './MatchReader_Abstract';
import { MatchReader_Interface } from './MatchReader_Interface';
import { CsvFileReader_Interface } from './CsvFileReader_Interface';
import { Winner } from './MatchResult';

const sourceFile = 'football.csv';
const sourceFilePath = path.resolve(__dirname, `../${sourceFile}`);

/// abstract class usage
const reader = new MatchReader_Abstract(sourceFilePath);
reader.read();

///
const csvFileReader = new CsvFileReader_Interface(sourceFilePath);
const matchReader = new MatchReader_Interface(csvFileReader);

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
