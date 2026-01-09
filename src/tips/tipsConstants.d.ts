declare interface Tip {
  amount: number;
  timestamp: string;
}
declare function getTipHistory(): Tip[];
declare function dangerousSetTipHistory(a: Tip[]): void;
declare function deleteIndexInLocalStorageTips(n: number): void;
