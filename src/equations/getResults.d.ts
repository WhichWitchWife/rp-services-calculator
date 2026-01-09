declare interface Results {
  workerProfit: number;
  tipShare: number;
  fcIncome: number;
}
declare interface Tip {
  amount: number;
  timestamp: string;
}
declare function getResults(params: {
  startingGil: number;
  endingGil: number;
  houseCut: number;
  numWorkers: number;
  bigTipThreshold: number;
  tipHistory: Tip[];
}): Results;
