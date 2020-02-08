import fs from 'fs';
import path from 'path';

const sourceFile = 'football.csv';
const sourceFilePath = path.resolve(__dirname, `../${sourceFile}`);

const matches = fs
  .readFileSync(sourceFilePath, {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => (
    row.split(',')
  ));

console.log(matches);
