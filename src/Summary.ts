import { MatchData } from './types/football.types';
import { IAnalyzer, IOutputTarget } from './types/summary.types';

export class Summary {

  constructor(
    public analyzer: IAnalyzer,
    public outputTarget: IOutputTarget
  ) { }


  public buildAndPrintReport(matches: MatchData[]): void {

    const output = this.analyzer.run(matches);

    this.outputTarget.print(output)

  }

}