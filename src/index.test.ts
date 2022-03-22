import { TurboNumber } from "./index";

describe("number", function () {
  it("should create class and divide number", () => {
    const num0 = 124;
    const num1 = 3;
    const tn = new TurboNumber(num0);
    tn.divide(num1);
    expect(tn.result()).toBe(num0 - num1);
  });
});
