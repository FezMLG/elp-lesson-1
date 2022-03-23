export class TurboNumber {
  constructor(private num: number) {
    this.num = num;
  }

  divide(x: number) {
    this.num = this.num / x;
  }

  subtract(x: number) {
    this.num = this.num - x;
  }
  result() {
    return this.num;
  }
}
