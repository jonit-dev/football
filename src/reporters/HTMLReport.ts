import { IOutputTarget } from '../types/summary.types';
import fs from 'fs'


export class HTMLReport implements IOutputTarget {

  public print(report: string): void {

    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `

    console.log('Generating html output...');

    fs.writeFileSync('data/report.html', html);

  }


}