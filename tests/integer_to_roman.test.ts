import { convertIntegerToRoman } from "../src/integer_to_roman";
describe("test convertIntegerToRoman function for single digit numbers ", () => {
  it("should return 'I' for convertIntegerToRoman(1)", () => {
    expect(convertIntegerToRoman(1)).toBe("I");
  });
  it("should return V for convertIntegerToRoman(5)", () => {
    expect(convertIntegerToRoman(5)).toBe("V");
  });
});
