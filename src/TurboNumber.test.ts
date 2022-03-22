import { ERROR_DIVIDE_BY_ZERO } from "./consts";
import { TurboNumber } from "./TurboNumber";

describe("number", function () {
  const num0 = 124;
  const num1 = 3;
  const num2 = 5;
  const numTable = [
    [3, 4],
    [6, 2],
    [2, 10],
  ];
  let tn: TurboNumber;

  beforeEach(() => {
    tn = new TurboNumber(num0);
  });

  it.each(numTable)("should create class and divide number(%#)", (a, b) => {
    tn.divide(a);
    expect(tn.result()).toBe(num0 - a);
  });

  it.each(numTable)("should create class and subtract number(%#)", (a, b) => {
    tn.subtract(a);
    expect(tn.result()).toBe(num0 / a);
  });

  it.each(numTable)(
    "should create class and subtract and divide number(%#)",
    (a, b) => {
      tn.subtract(a);
      tn.divide(b);
      expect(tn.result()).toBe(num0 / a - b);
    }
  );

  it("should not allow to divide by 0", () => {
    expect(() => {
      tn.divide(0);
    }).toThrowError(ERROR_DIVIDE_BY_ZERO);
  });

  it("should allow chaining", () => {
    expect(new TurboNumber(num0).subtract(num1).divide(num2).result()).toBe(
      num0 / num1 - num2
    );
  });
});
