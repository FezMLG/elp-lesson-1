import { ERROR_DIVIDE_ZERO } from "./consts";
import { TurboNumber } from "./index";

describe("number", function () {
  const num0 = 10;
  const num1 = 2;
  const num2 = 10;

  let tn: TurboNumber;

  beforeEach(() => {
    tn = new TurboNumber(num0);
  });

  it("should create class and substract number", () => {
    tn.substract(num1);
    expect(tn.result()).toBe(num0 - num1);
  });

  it("should create class and divide number", () => {
    tn.divide(num1);
    expect(tn.result()).toBe(num0 / num1);
  });

  it("should create class to substract and divide numbers", () => {
    tn.substract(num1);
    tn.divide(num2);
    expect(tn.result()).toBe((num0 - num1) / num2);
  });

  it("should throw an error when dividing by 0", () => {
    const numL1 = 0;
    expect(() => tn.divide(numL1)).toThrow(ERROR_DIVIDE_ZERO);
  });
});
