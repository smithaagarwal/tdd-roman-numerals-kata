import { convertDecimalToRoman } from "../src/decimal_to_roman";
describe("test convertDecimalToRoman function for single digit numbers ", () => {
  it("should return 'I' for convertDecimalToRoman(1)", () => {
    expect(convertDecimalToRoman(1)).toBe("I");
  });
});
