export const ZERO_ERROR = "Cannot divide by 0.";
export class TurboNumber {
  constructor(private num: number) {
    this.num = num;
  }

  divide(x: number) {
    if (x == 0) throw new Error(ZERO_ERROR);
    this.num = this.num / x;
    return this;
  }

  subtract(x: number) {
    this.num -= x;
    return this;
  }
  result() {
    return this.num;
  }
}
