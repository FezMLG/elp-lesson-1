import { DIVIDE_BY_ZERO_ERROR, NOT_SAFE_INTIGER } from "./consts";

export class TurboNumber {
  num: number;
  constructor(num: number) {
    if (!Number.isSafeInteger(num)) throw new Error(NOT_SAFE_INTIGER);
    this.num = num;
  }

  subtract(x: number): TurboNumber {
    this.num = this.num - x;
    return this;
  }

  divide(x: number): TurboNumber {
    if (x == 0) {
      throw new Error(DIVIDE_BY_ZERO_ERROR);
    }
    this.num = this.num / x;
    return this;
  }

  result(): number {
    return this.num;
  }
}
