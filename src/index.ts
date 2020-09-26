import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchReader } from './libs/CSV/MatchReader';
import { ConsoleReport } from './reporters/ConsoleReport';
import { HTMLReport } from './reporters/HTMLReport';
import { Summary } from './Summary';
import { MatchResult } from './types/football.types';


// Inheritance design pattern example
const csvFileReader = new MatchReader("./data/football.csv")
csvFileReader.read()

const { data } = csvFileReader;


// composition design pattern example

// const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport())

// const summaryHTML = new Summary(new WinsAnalysis("Man United"), new HTMLReport())

// summary.buildAndPrintReport(data)
// summaryHTML.buildAndPrintReport(data)

const summary = Summary.winsAnalysisHTMLReport("Man United")

summary.buildAndPrintReport(data)