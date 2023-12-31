import {
  convertIntegerToRoman,
  getRangeForNumber,
} from "../src/integer_to_roman";
describe("test convertIntegerToRoman function for numbers that have single roman symbol ", () => {
  it("should return 'I' for convertIntegerToRoman(1)", () => {
    expect(convertIntegerToRoman(1)).toBe("I");
  });
  it("should return V for convertIntegerToRoman(5)", () => {
    expect(convertIntegerToRoman(5)).toBe("V");
  });
  it("should return X for convertIntegerToRoman(10)", () => {
    expect(convertIntegerToRoman(10)).toBe("X");
  });
  it("should return L for convertIntegerToRoman(50)", () => {
    expect(convertIntegerToRoman(50)).toBe("L");
  });
  it("should return C for convertIntegerToRoman(100)", () => {
    expect(convertIntegerToRoman(100)).toBe("C");
  });
  it("should return D for convertIntegerToRoman(500)", () => {
    expect(convertIntegerToRoman(500)).toBe("D");
  });
  it("should return M for convertIntegerToRoman(1000)", () => {
    expect(convertIntegerToRoman(1000)).toBe("M");
  });
});

describe("test convertIntegerToRoman function for single digit numbers that are less than or equal to midrange range ", () => {
  it("should return 'II' for convertIntegerToRoman(2)", () => {
    expect(convertIntegerToRoman(2)).toBe("II");
  });
  it("should return III for convertIntegerToRoman(3)", () => {
    expect(convertIntegerToRoman(3)).toBe("III");
  });
  it("should return IV for convertIntegerToRoman(4)", () => {
    expect(convertIntegerToRoman(4)).toBe("IV");
  });
  it("should return VIII for convertIntegerToRoman(8)", () => {
    expect(convertIntegerToRoman(8)).toBe("VIII");
  });
  it("should return IX for convertIntegerToRoman(9)", () => {
    expect(convertIntegerToRoman(9)).toBe("IX");
  });
});

describe("test convertIntegerToRoman function for numbers within 1000 with simple conversions", () => {
  it("should return 'DCCCL' for convertIntegerToRoman(850)", () => {
    expect(convertIntegerToRoman(850)).toBe("DCCCL");
  });
  it("should return CCI for convertIntegerToRoman(201)", () => {
    expect(convertIntegerToRoman(201)).toBe("CCI");
  });
  it("should return CCCL for convertIntegerToRoman(350)", () => {
    expect(convertIntegerToRoman(350)).toBe("CCCL");
  });
});
describe("test convertIntegerToRoman function for numbers within 1000 where order of conversion matter", () => {
  it("should return 'CML' for convertIntegerToRoman(950)", () => {
    expect(convertIntegerToRoman(950)).toBe("CML");
  });
  it("should return XCV for convertIntegerToRoman(95)", () => {
    expect(convertIntegerToRoman(95)).toBe("XCV");
  });
  it("should return XCIV for convertIntegerToRoman(99)", () => {
    expect(convertIntegerToRoman(99)).toBe("XCIX");
  });
  it("should return CMXCV for convertIntegerToRoman(995)", () => {
    expect(convertIntegerToRoman(995)).toBe("CMXCV");
  });
});

describe("test convertIntegerToRoman function for edge cases 0 and 3000 ", () => {
  it("should return '' for convertIntegerToRoman(0)", () => {
    expect(convertIntegerToRoman(0)).toBe("");
  });
  it("should return MMM for convertIntegerToRoman(3000)", () => {
    expect(convertIntegerToRoman(3000)).toBe("MMM");
  });
});

describe("test convertIntegerToRoman function for numbers greater than 3000 ", () => {
  it("should return 'Input has to be less than or equal to 3000' for convertIntegerToRoman(3001)", () => {
    expect(convertIntegerToRoman(3001)).toBe(
      "Input has to be less than or equal to 3000"
    );
  });
});

describe("test convertIntegerToRoman function for numbers greater than 1000 ", () => {
  it("should return MML for convertIntegerToRoman(2050)", () => {
    expect(convertIntegerToRoman(2050)).toBe("MML");
  });
  it("should return MMCXI for convertIntegerToRoman(2111)", () => {
    expect(convertIntegerToRoman(2111)).toBe("MMCXI");
  });
  it("should return MMCMXXXII for convertIntegerToRoman(2932)", () => {
    expect(convertIntegerToRoman(2932)).toBe("MMCMXXXII");
  });
});

describe("test getRangeForNumber function to check for the integer range the number lies in ", () => {
  it("should return [1,5] for numbers from 2-4", () => {
    expect(getRangeForNumber(4)).toEqual([1, 5]);
    expect(getRangeForNumber(3)).toEqual([1, 5]);
  });
  it("should return [5,10] for numbers from 6-9", () => {
    expect(getRangeForNumber(7)).toEqual([5, 10]);
    expect(getRangeForNumber(9)).toEqual([5, 10]);
  });
  it("should return [10,50] for numbers from 11-49", () => {
    expect(getRangeForNumber(37)).toEqual([10, 50]);
    expect(getRangeForNumber(49)).toEqual([10, 50]);
    expect(getRangeForNumber(11)).toEqual([10, 50]);
  });
  it("should return [50,100] for numbers from 11-49", () => {
    expect(getRangeForNumber(57)).toEqual([50, 100]);
    expect(getRangeForNumber(89)).toEqual([50, 100]);
    expect(getRangeForNumber(99)).toEqual([50, 100]);
  });
  it("should return [100,500] for numbers from 101-499", () => {
    expect(getRangeForNumber(137)).toEqual([100, 500]);
    expect(getRangeForNumber(499)).toEqual([100, 500]);
    expect(getRangeForNumber(101)).toEqual([100, 500]);
  });
  it("should return [500,1000] for numbers from 501-999", () => {
    expect(getRangeForNumber(737)).toEqual([500, 1000]);
    expect(getRangeForNumber(999)).toEqual([500, 1000]);
    expect(getRangeForNumber(501)).toEqual([500, 1000]);
  });
  it("should return [1000,num] for numbers greater than 1000", () => {
    expect(getRangeForNumber(1001)).toEqual([1000, 1001]);
    expect(getRangeForNumber(2000)).toEqual([1000, 2000]);
    expect(getRangeForNumber(3000)).toEqual([1000, 3000]);
  });
});
