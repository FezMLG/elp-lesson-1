import { TurboNumber } from "./index";

describe("number", function () {
  it("should correctly subtract numbers", () => {
    const tn = new TurboNumber(10);

    tn.divide(5);

    expect(tn.result()).toBe(10 / 5);
  });
});
