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
});
