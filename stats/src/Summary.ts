import { Match } from './Match';

export interface Analyzer {
  run(matches: Match[]): string;
}

export interface Reporter {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public reporter: Reporter
  ) {}

  createReport(matches: Match[]) {
    const report = this.analyzer.run(matches);
    this.reporter.print(report);
  }
}
