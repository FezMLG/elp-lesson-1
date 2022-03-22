export class TurboNumber {
  subtract(num1: number) {
    this.num = this.num / num1;
  }
  divide(num1: number) {
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
