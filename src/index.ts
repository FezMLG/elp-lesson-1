import { ERROR_DIVIDE_ZERO } from "./consts";

export class TurboNumber {
  num: number;
  constructor(num: number) {
    this.num = num;
  }

  substract(x: number) {
    this.num = this.num - x;
  }

  divide(x: number) {
    if (x === 0) throw new Error(ERROR_DIVIDE_ZERO);
    this.num = this.num / x;
  }

  result(): number {
    return this.num;
  }
}
