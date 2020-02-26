import { Reporter } from '../Summary';

export class ConsoleReport implements Reporter {
  print(report: string): void {
    console.log(report);
  }
}
