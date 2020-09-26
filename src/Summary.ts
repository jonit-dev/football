import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HTMLReport } from './reporters/HTMLReport';
import { MatchData } from './types/football.types';
import { IAnalyzer, IOutputTarget } from './types/summary.types';

export class Summary {

  constructor(
    public analyzer: IAnalyzer,
    public outputTarget: IOutputTarget
  ) { }

  public static winsAnalysisHTMLReport(teamName: string): Summary {

    return new Summary(
      new WinsAnalysis(teamName),
      new HTMLReport()
    )


  }

  public buildAndPrintReport(matches: MatchData[]): void {

    const output = this.analyzer.run(matches);

    this.outputTarget.print(output)

  }

}