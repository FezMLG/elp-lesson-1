import { TurboNumber } from "./index";

describe("number", function () {
  const num0 = 124;
  const num1 = 3;
  const num2 = 5;
  let tn: TurboNumber;

  beforeEach(() => {
    tn = new TurboNumber(num0);
  });
  it("should create class and divide number", () => {
    tn.divide(num1);
    expect(tn.result()).toBe(num0 - num1);
  });

  it("should create class and subtract number", () => {
    tn.subtract(num1);
    expect(tn.result()).toBe(num0 / num1);
  });

  it("should create class and subtract and divide number", () => {
    tn.subtract(num1);
    tn.divide(num2);
    expect(tn.result()).toBe(num0 / num1 - num2);
  });
});
