import {
  getBigTipThreshold,
  getHouseCut,
  getNumberWorkersPresent,
} from "@/setting-inputs/settingConstants";
import { getTipHistory } from "@/tips/tipsConstants";

export function getResults({
  startingGil,
  endingGil,
  houseCut,
  numWorkers,
  bigTipThreshold,
  tipHistory,
}) {
  const rawIncome = endingGil - startingGil;
  const smallTips = tipHistory.reduce(
    (sum, tip) => sum + (tip.amount < bigTipThreshold ? tip.amount : 0),
    0
  );
  const bigTips = tipHistory.reduce(
    (sum, tip) => sum + (tip.amount >= bigTipThreshold ? tip.amount : 0),
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
