import fs from 'fs';

export abstract class CSVFileReader<T> {

  abstract data: T[] = []
  abstract path: string
  abstract mapRow(row: string[]): T

  constructor(public filename: string) { }

  public read(): void {

    this.data = fs.readFileSync(this.path, {
      encoding: 'utf-8',
    }).split('\n')
      .map((row: string) => {
        return row.split(',')
      })
      .map((row: string[]): T => this.mapRow(row))

  }


}