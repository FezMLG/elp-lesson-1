export class TurboNumber {
  num: number;
  constructor(num: number) {
    this.num = num;
  }

  substract(x: number) {
    this.num = this.num - x;
  }

  result(): number {
    return this.num;
  }
}
