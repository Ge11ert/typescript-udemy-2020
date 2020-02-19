import fs from 'fs';

export abstract class CsvFileReader_Abstract<T> {
  data: T[] = [];

  constructor(public pathToFile: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.pathToFile, { encoding: 'utf-8' })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow)
  }
}
