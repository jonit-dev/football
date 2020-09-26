import { MatchData, MatchResult } from '../../types/football.types';
import { DateHelper } from '../DateHelper';
import { CSVFileReader } from './CsvFileReader';


export class MatchReader extends CSVFileReader<MatchData> {

  constructor(
    public path: string,
    public data: MatchData[] = []
  ) {
    super(path)
  }

  public mapRow(row: string[]): MatchData {
    return [
      DateHelper.dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]

  }


}