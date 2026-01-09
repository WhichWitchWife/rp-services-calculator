export const TIP_HISTORY = "tipHistory";
export function getTipHistory() {
  return JSON.parse(localStorage.getItem(TIP_HISTORY) || "") || [];
}

export function dangerousSetTipHistory(newTipHistory: array) {
  localStorage.setItem(TIP_HISTORY, newTipHistory);
}
export function pushOntoLocalStorageTips(newTip: object) {
  const tipHistory = getTipHistory();
  const newHistory = [...tipHistory, newTip];
  dangerousSetTipHistory(JSON.stringify(newHistory));
}

export function deleteIndexInLocalStorageTips(deletedIndex: number) {
  const history = getTipHistory();
  dangerousSetTipHistory(
    JSON.stringify([
      ...history.slice(0, deletedIndex),
      ...history.slice(deletedIndex + 1, history.length),
    ])
  );
}
