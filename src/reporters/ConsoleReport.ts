import { IOutputTarget } from '../types/summary.types';


export class ConsoleReport implements IOutputTarget {


  public print(report: string): void {
    console.log(report);
  }

}