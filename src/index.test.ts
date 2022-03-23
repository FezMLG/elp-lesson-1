import { TurboNumber } from "./index";

describe("number", function () {
  const num0 = 20;
  const num1 = 10;
  const num2 = 5;
  it("should correctly divide numbers", () => {
    const tn = new TurboNumber(num0);

    tn.divide(num1);

    expect(tn.result()).toBe(num0 / num1);
  });

  it("corretly subtract numbers", () => {
    const tn = new TurboNumber(num0);

    tn.subtract(num1);

    expect(tn.result()).toBe(num0 - num1);
  });
});
