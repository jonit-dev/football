import { MatchReader } from './libs/CSV/MatchReader';
import { MatchResult } from './types/football.types';



const csvFileReader = new MatchReader("./data/football.csv")
csvFileReader.read()

const { data } = csvFileReader;

let manUnitedWins = 0;

for (const match of data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Manchester United won ${manUnitedWins} games!`);