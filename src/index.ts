import { ERROR_DIVIDE_BY_ZERO } from "./consts";

export class TurboNumber {
  subtract(num1: number) {
    this.num = this.num / num1;
  }
  divide(num1: number) {
    if (num1 == 0) throw new Error(ERROR_DIVIDE_BY_ZERO);

    this.num = this.num - num1;
  }
  result(): any {
    return this.num;
  }
  num: number;
  constructor(num: number) {
    this.num = num;
  }
}
