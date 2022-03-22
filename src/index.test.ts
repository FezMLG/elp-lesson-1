import { TurboNumber } from "./index";

describe("number", function () {
  it("should create class and divide number", () => {
    const num0 = 124;
    const num1 = 3;
    const tn = new TurboNumber(num0);
    tn.divide(num1);
    expect(tn.result()).toBe(num0 - num1);
  });

  it("should create class and subtract number", () => {
    const num0 = 124;
    const num1 = 3;
    const tn = new TurboNumber(num0);
    tn.subtract(num1);
    expect(tn.result()).toBe(num0 / num1);
  });

  it("should create class and subtract and divide number", () => {
    const num0 = 124;
    const num1 = 3;
    const num2 = 5;
    const tn = new TurboNumber(num0);
    tn.subtract(num1);
    tn.divide(num2);
    expect(tn.result()).toBe(num0 / num1 - num2);
  });
});
