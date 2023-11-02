import { convertIntegerToRoman, getRomanEquivalentFromMap } from "../src/integer_to_roman";
describe("test convertIntegerToRoman function for single digit numbers ", () => {
  it("should return 'I' for convertIntegerToRoman(1)", () => {
    expect(convertIntegerToRoman(1)).toBe("I");
  });
  it("should return V for convertIntegerToRoman(5)", () => {
    expect(convertIntegerToRoman(5)).toBe("V");
  });
});
describe("test getRomanEquivalentFromMap function for digits present in map", () => {
  it("should return 'I' for getRomanEquivalentFromMap(1)", () => {
    expect(getRomanEquivalentFromMap(1)).toBe("I");
  });
  it("should return 'V' for getRomanEquivalentFromMap(5)", () => {
    expect(getRomanEquivalentFromMap(5)).toBe("V");
  });
  it("should return 'I' for getRomanEquivalentFromMap(1)", () => {
    expect(getRomanEquivalentFromMap(50)).toBe("L");
  });
});
describe("test getRomanEquivalentFromMap function for digits not present in the map",() => {
  it("should return 'none' for getRomanEquivalentFromMap(2)",() => {
    expect(getRomanEquivalentFromMap(2)).toBe("none");
  })
});
