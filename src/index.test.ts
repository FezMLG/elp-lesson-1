import { TurboNumber } from "./index";

describe("number", function () {
  it("should create class and substract number", () => {
    const num0 = 10;
    const num1 = 2;
    const tn = new TurboNumber(num0);
    tn.substract(num1);
    expect(tn.result()).toBe(num0 - num1);
  });

  it("should create class and divide number", () => {
    const num0 = 10;
    const num1 = 2;
    const tn = new TurboNumber(num0);
    tn.divide(num1);
    expect(tn.result()).toBe(num0 / num1);
  });

  it("should create class to substract and divide numbers", () => {
    const num0 = 10;
    const num1 = 2;
    const num2 = 10;
    const tn = new TurboNumber(num0);
    tn.substract(num1);
    tn.divide(num2);
    expect(tn.result()).toBe((num0 - num1) / num2);
  });
});
