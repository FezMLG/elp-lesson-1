import { DIVIDE_BY_ZERO_ERROR } from "./consts";
import { TurboNumber } from "./index";

describe("number", function () {
  it("subtracts 2 numbers", () => {
    const num1 = 12;
    const num2 = 5;
    const a = new TurboNumber(num1);
    a.subtract(num2);
    expect(a.result()).toBe(num1 - num2);
  });

  it("devides 2 numbers", () => {
    const num1 = 12;
    const num2 = 5;
    const a = new TurboNumber(num1);
    a.divide(num2);
    expect(a.result()).toBe(num1 / num2);
  });

  it("subtracts 3 numbers", () => {
    const num1 = 12;
    const num2 = 5;
    const num3 = 3;
    const a = new TurboNumber(num1);
    a.subtract(num2);
    expect(a.result()).toBe(num1 - num2);
    a.subtract(num3);
    expect(a.result()).toBe(num1 - num2 - num3);
  });

  it("devides 3 numbers", () => {
    const num1 = 12;
    const num2 = 5;
    const num3 = 3;
    const a = new TurboNumber(num1);
    a.divide(num2);
    a.divide(num3);
    expect(a.result()).toBe(num1 / num2 / num3);
  });

  it("expect to throw error when dividing by 0", () => {
    const num1 = 12;
    const num2 = 0;
    const a = new TurboNumber(num1);
    expect(() => a.divide(num2)).toThrow(DIVIDE_BY_ZERO_ERROR);
  });
});
