import { TurboNumber, ZERO_ERROR } from "./index";

describe("number", function () {
  const num0 = 20;
  const num1 = 10;
  const num2 = 5;
  let tn: TurboNumber;
  beforeEach(() => {
    tn = new TurboNumber(num0);
  });
  it("should correctly divide numbers", () => {
    tn.divide(num1);

    expect(tn.result()).toBe(num0 / num1);
  });

  it("corretly subtract numbers", () => {
    tn.subtract(num1);

    expect(tn.result()).toBe(num0 - num1);
  });

  it("corretly throws errow when try to divide by 0.", () => {
    expect(() => tn.divide(0)).toThrow(ZERO_ERROR);
  });

  it("should allow chaining", () => {
    expect(tn.subtract(num1).divide(num2).result()).toBe((num0 - num1) / num2);
  });

  it("should add numbers", () => {
    expect(tn.add(num1).result()).toBe(num0 + num1);
  });
});
