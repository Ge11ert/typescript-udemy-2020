import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public pathToFile: string) {}

  read(): void {
    this.data = fs.readFileSync(this.pathToFile, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
  }
}
