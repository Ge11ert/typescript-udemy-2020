import { Analyzer } from '../Summary';
import { Match } from '../Match';
import { Winner } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: Match[]): string {
    let teamWins = 0;

    matches.forEach((match: Match) => {
      if (match[1] === this.teamName && match[5] === Winner.HOME) {
        teamWins++;
      } else if (match[2] === this.teamName && match[5] === Winner.AWAY) {
        teamWins++;
      }
    });

    return `Team ${this.teamName} won ${teamWins} games`;
  }
}
