import { MatchData } from './football.types';

export interface IAnalyzer {
  run(matches: MatchData[]): string
}

export interface IOutputTarget {
  print(report: string): void
}