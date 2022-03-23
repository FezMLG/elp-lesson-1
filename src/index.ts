export const ZERO_ERROR = "Cannot divide by 0.";
export const ZERO_ERROR_2 = "Cannot sqrt number lower than 0.";

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
  add(x: number) {
    this.num += x;
    return this;
  }

  power(pow: number) {
    this.num = Math.pow(this.num, pow);
    return this;
  }
  sqrt() {
    if (this.num < 0) throw new Error(ZERO_ERROR_2);
    this.num = Math.sqrt(this.num);
    return this;
  }
  result() {
    return this.num;
  }
}
