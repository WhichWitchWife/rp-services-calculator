export function getResults(params: {
  startingGil: number;
  endingGil: number;
  houseCut: number;
  numWorkers: number;
  bigTipThreshold: number;
  tipHistory: Tip[];
}) {
  const rawIncome = endingGil - startingGil;
  const smallTips = tipHistory.reduce(
    (sum: number, tip: object) =>
      sum + (tip.amount < bigTipThreshold ? tip.amount : 0),
    0
  );
  const bigTips = tipHistory.reduce(
    (sum: number, tip: object) =>
      sum + (tip.amount >= bigTipThreshold ? tip.amount : 0),
    0
  );
  const rawEarnings = rawIncome - smallTips - bigTips;
  const fcIncomeFloat = (houseCut / 100.0) * rawEarnings;
  const fcIncomeInt = Math.floor(fcIncomeFloat);
  const tipShareFloat = bigTips / numWorkers;
  const tipShareInt = Math.floor(tipShareFloat);
  const workerProfit = rawIncome - fcIncomeInt - tipShareInt * (numWorkers - 1);

  return { workerProfit, tipShare: tipShareInt, fcIncome: fcIncomeInt };
}
