import { DIVIDE_BY_ZERO_ERROR } from "./consts";
import { TurboNumber } from "./index";

describe("number", function () {
  let tn: TurboNumber;
  const num0 = 17;

  beforeEach(() => {
    tn = new TurboNumber(num0);
  });

  it("subtracts 2 numbers", () => {
    const num2 = 5;
    tn.subtract(num2);
    expect(tn.result()).toBe(num0 - num2);
  });

  it("devides 2 numbers", () => {
    const num2 = 5;
    tn.divide(num2);
    expect(tn.result()).toBe(num0 / num2);
  });

  it("subtracts 3 numbers", () => {
    const num2 = 5;
    const num3 = 3;
    tn.subtract(num2);
    expect(tn.result()).toBe(num0 - num2);
    tn.subtract(num3);
    expect(tn.result()).toBe(num0 - num2 - num3);
  });

  it("devides 3 numbers", () => {
    const num2 = 5;
    const num3 = 3;
    tn.divide(num2);
    tn.divide(num3);
    expect(tn.result()).toBe(num0 / num2 / num3);
  });

  it("expect to throw error when dividing by 0", () => {
    const num2 = 0;
    expect(() => tn.divide(num2)).toThrow(DIVIDE_BY_ZERO_ERROR);
  });

  it("possible to run function from function", () => {
    const num1 = 5;
    const num2 = -3;
    const num3 = -4;
    expect(tn.subtract(num1).divide(num2).result()).toBe(num3);
  });
});
