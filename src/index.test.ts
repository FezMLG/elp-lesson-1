import { TurboNumber } from "./index";

describe("number", function () {
  it("should correctly divide numbers", () => {
    const tn = new TurboNumber(10);

    tn.divide(5);

    expect(tn.result()).toBe(10 / 5);
  });

  it("corretly subtract numbers", () => {
    const tn = new TurboNumber(10);

    tn.subtract(5);

    expect(tn.result()).toBe(10 - 5);
  });
});
