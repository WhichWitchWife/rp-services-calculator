export const TIP_HISTORY = "tipHistory";
export function getTipHistory() {
  return JSON.parse(localStorage.getItem(TIP_HISTORY)) || [];
}

export function dangerousSetTipHistory(newTipHistory) {
  localStorage.setItem(TIP_HISTORY, newTipHistory);
}
export function pushOntoLocalStorageTips(newTip) {
  const tipHistory = getTipHistory();
  const newHistory = [...tipHistory, newTip];
  console.log(tipHistory);
  console.log(newTip);
  console.log(newHistory);
  dangerousSetTipHistory(JSON.stringify(newHistory));
}
