import { MatchData, MatchResult } from '../types/football.types';
import { IAnalyzer } from '../types/summary.types';



export class WinsAnalysis implements IAnalyzer {

  constructor(
    public teamName: string,
  ) { }

  public run(matches: MatchData[]): string {

    let wins = 0;

    for (const match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        wins++
      }
    }

    return `Team ${this.teamName} won ${wins} games.`
  }


}