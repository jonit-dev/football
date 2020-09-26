import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { MatchReader } from './libs/CSV/MatchReader';
import { ConsoleReport } from './reporters/ConsoleReport';
import { Summary } from './Summary';
import { MatchResult } from './types/football.types';


// Inheritance design pattern example
const csvFileReader = new MatchReader("./data/football.csv")
csvFileReader.read()

const { data } = csvFileReader;


// composition design pattern example

const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleReport())

summary.buildAndPrintReport(data)