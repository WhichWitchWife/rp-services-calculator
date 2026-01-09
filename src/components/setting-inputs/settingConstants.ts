export const HOUSE_CUT = "house-cut";
export const NUMBER_WORKERS_PRESENT = "num-workers";
export const BIG_TIP_THRESHOLD = "big-tip";

export function getHouseCut() {
  return Number(localStorage.getItem(HOUSE_CUT)) || 0;
}

export function getNumberWorkersPresent() {
  return Number(localStorage.getItem(NUMBER_WORKERS_PRESENT)) || 1;
}

export function getBigTipThreshold() {
  return Number(localStorage.getItem(BIG_TIP_THRESHOLD)) || 1;
}
