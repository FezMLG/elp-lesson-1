import { ERROR_DIVIDING_BY_ZERO } from "./consts";
import { TurboNumber } from "./index";

describe("number", function () {
  const num0 = 10;
  const num1 = 2;
  const num2 = 4;
  let tn: TurboNumber;

  beforeEach(() => {
    tn = new TurboNumber(num0);
  });
  it("should create class and substract numbers", () => {
    tn.substract(num1);
    expect(tn.result()).toBe(num0 - num1);
  });

  it("should create class and divide numbers", () => {
    tn.divide(num1);
    expect(tn.result()).toBe(num0 / num1);
  });

  it("should create class and divide and substract numbers", () => {
    tn.divide(num1);
    tn.substract(num2);
    expect(tn.result()).toBe(num0 / num1 - num2);
  });

  it("should not allow dividing by 0", () => {
    expect(() => tn.divide(0)).toThrowError(ERROR_DIVIDING_BY_ZERO);
  });

  it("should allow chaining", () => {
    expect(new TurboNumber(num0).divide(num1).substract(num2).result()).toBe(
      num0 / num1 - num2
    );
  });
});
