import path from 'path';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { ConsoleReport } from './reporters/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';

const sourceFile = 'football.csv';
const sourceFilePath = path.resolve(__dirname, `../${sourceFile}`);

const csvFileReader = new CsvFileReader(sourceFilePath);
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

/// main part
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport(),
);

summary.createReport(matchReader.matches);
