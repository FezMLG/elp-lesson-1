import { ERROR_DIVIDE_ZERO } from "./consts";

export class TurboNumber {
  num: number;
  constructor(num: number) {
    this.num = num;
  }

  substract(x: number): TurboNumber {
    this.num = this.num - x;
    return this;
  }

  divide(x: number): TurboNumber {
    if (x === 0) throw new Error(ERROR_DIVIDE_ZERO);
    this.num = this.num / x;
    return this;
  }

  result(): number {
    return this.num;
  }
}
